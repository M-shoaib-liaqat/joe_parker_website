import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  const diagnostics: any = {
    timestamp: new Date().toISOString(),
    environment: {},
    packages: {},
    apiTests: {},
    errors: [],
    warnings: [],
    recommendations: []
  };

  try {
    // 1. Check Environment Variables
    console.log('=== CHECKING ENVIRONMENT ===');
    diagnostics.environment = {
      NODE_ENV: process.env.NODE_ENV || 'unknown',
      hasGeminiKey: !!process.env.GEMINI_API_KEY,
      geminiKeyLength: process.env.GEMINI_API_KEY?.length || 0,
      hasSendGridKey: !!process.env.SENDGRID_API_KEY,
      platform: process.platform,
      nodeVersion: process.version,
      vercelEnv: process.env.VERCEL_ENV || 'local'
    };

    if (!process.env.GEMINI_API_KEY) {
      diagnostics.errors.push({
        type: 'MISSING_API_KEY',
        severity: 'CRITICAL',
        message: 'GEMINI_API_KEY is not set',
        fix: 'Add GEMINI_API_KEY in Vercel Dashboard → Settings → Environment Variables → Add New'
      });
    } else if (process.env.GEMINI_API_KEY.length < 20) {
      diagnostics.warnings.push({
        type: 'SUSPICIOUS_API_KEY',
        message: 'GEMINI_API_KEY seems too short',
        fix: 'Verify your API key from https://aistudio.google.com/app/apikey'
      });
    }

    // 2. Check Package Imports
    console.log('=== CHECKING PACKAGES ===');
    try {
      const { GoogleGenerativeAI } = await import('@google/generative-ai');
      diagnostics.packages.googleGenerativeAI = {
        installed: true,
        canImport: true
      };
    } catch (error: any) {
      diagnostics.packages.googleGenerativeAI = {
        installed: false,
        canImport: false,
        error: error.message
      };
      diagnostics.errors.push({
        type: 'PACKAGE_MISSING',
        severity: 'CRITICAL',
        message: '@google/generative-ai package not found',
        fix: 'Run: npm install @google/generative-ai'
      });
    }

    try {
      await import('@sendgrid/mail');
      diagnostics.packages.sendgrid = {
        installed: true,
        canImport: true
      };
    } catch (error: any) {
      diagnostics.packages.sendgrid = {
        installed: false,
        canImport: false,
        error: error.message
      };
      diagnostics.warnings.push({
        type: 'PACKAGE_MISSING',
        message: '@sendgrid/mail package not found (only affects contact form)'
      });
    }

    // 3. Test Gemini API Connection
    console.log('=== TESTING GEMINI API ===');
    if (process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenerativeAI } = await import('@google/generative-ai');
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        
        const result = await model.generateContent('Respond with exactly: "API TEST SUCCESSFUL"');
        const response = await result.response;
        const text = response.text();
        
        diagnostics.apiTests.gemini = {
          success: true,
          responseReceived: true,
          testResponse: text.substring(0, 100)
        };
      } catch (error: any) {
        diagnostics.apiTests.gemini = {
          success: false,
          error: error.message,
          errorType: error.name
        };
        
        if (error.message?.includes('API_KEY_INVALID') || error.message?.includes('API key')) {
          diagnostics.errors.push({
            type: 'INVALID_API_KEY',
            severity: 'CRITICAL',
            message: 'GEMINI_API_KEY is invalid',
            fix: 'Get a new API key from https://aistudio.google.com/app/apikey and update it in Vercel'
          });
        } else if (error.message?.includes('quota') || error.message?.includes('429')) {
          diagnostics.errors.push({
            type: 'RATE_LIMIT',
            severity: 'HIGH',
            message: 'Gemini API rate limit exceeded',
            fix: 'Wait a few minutes or upgrade your API quota'
          });
        } else {
          diagnostics.errors.push({
            type: 'API_CONNECTION_ERROR',
            severity: 'HIGH',
            message: `Gemini API error: ${error.message}`,
            fix: 'Check your internet connection and API key validity'
          });
        }
      }
    }

    // 4. Check API Route Structure
    console.log('=== CHECKING API ROUTES ===');
    diagnostics.apiRoutes = {
      currentPath: req.url,
      method: req.method,
      headers: {
        contentType: req.headers['content-type'],
        origin: req.headers['origin']
      }
    };

    // 5. Generate Recommendations
    if (diagnostics.errors.length === 0 && diagnostics.warnings.length === 0) {
      diagnostics.recommendations.push({
        type: 'SUCCESS',
        message: '✅ All checks passed! Your configuration looks good.'
      });
    } else {
      diagnostics.recommendations.push({
        type: 'ACTION_REQUIRED',
        message: `Found ${diagnostics.errors.length} critical error(s) and ${diagnostics.warnings.length} warning(s)`
      });
      
      if (!process.env.GEMINI_API_KEY) {
        diagnostics.recommendations.push({
          priority: 1,
          action: 'Add GEMINI_API_KEY',
          steps: [
            '1. Go to https://aistudio.google.com/app/apikey',
            '2. Create or copy your API key',
            '3. Go to Vercel Dashboard → Your Project → Settings → Environment Variables',
            '4. Click "Add New" → Name: GEMINI_API_KEY, Value: your_key',
            '5. Click "Add" then go to Deployments and click "Redeploy"'
          ]
        });
      }
    }

    // 6. Summary
    diagnostics.summary = {
      status: diagnostics.errors.length === 0 ? 'HEALTHY' : 'UNHEALTHY',
      criticalErrors: diagnostics.errors.filter((e: any) => e.severity === 'CRITICAL').length,
      totalErrors: diagnostics.errors.length,
      totalWarnings: diagnostics.warnings.length,
      canChatbotWork: diagnostics.errors.length === 0 && diagnostics.apiTests.gemini?.success
    };

    return res.status(200).json({
      success: true,
      diagnostics
    });

  } catch (error: any) {
    console.error('Diagnostic Error:', error);
    return res.status(500).json({
      success: false,
      error: 'Diagnostic script failed',
      message: error.message,
      stack: error.stack
    });
  }
}