<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Uw7tlH-KG2eFcPngeFp1QWctlfyBufSN

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app (frontend + local API server):
   `npm run dev:all`

### Email setup
The backend sends quote requests via email. You can configure either:

- **SendGrid** (if you have an API key): set `SENDGRID_API_KEY`.
- **SMTP** using an app password (e.g. Gmail): set `SMTP_HOST`, `SMTP_PORT` (default 587), `SMTP_USER` and `SMTP_PASS`.

If neither method is configured, the `/api/contact` endpoint will return a 503 error.

Notes:
- The frontend calls relative endpoints like `/api/chat`. In local dev, Vite (port 3000) needs to proxy `/api/*` to the Express server (port 3001). This repo is configured to do that in `vite.config.ts`.
- On Vercel deployments, the `/api/*` routes are served by the serverless functions in `api/`.
