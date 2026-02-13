import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const key = process.env.GEMINI_API_KEY;
if (!key) {
  console.error('No GEMINI_API_KEY found. Create a .env.local with GEMINI_API_KEY=...');
  process.exit(2);
}

async function listModels(version) {
  const url = `https://generativelanguage.googleapis.com/${version}/models?key=${encodeURIComponent(key)}`;
  const res = await fetch(url, { method: 'GET' });
  const text = await res.text();
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    console.log(`\n== ${version} ==`);
    console.log('HTTP', res.status);
    console.log(text.slice(0, 4000));
    return;
  }

  console.log(`\n== ${version} ==`);
  console.log('HTTP', res.status);
  const models = Array.isArray(json.models) ? json.models : [];
  for (const m of models) {
    const name = m.name;
    const supported = Array.isArray(m.supportedGenerationMethods) ? m.supportedGenerationMethods.join(',') : '';
    console.log(`${name}${supported ? `  [${supported}]` : ''}`);
  }
}

await listModels('v1beta');
await listModels('v1');


