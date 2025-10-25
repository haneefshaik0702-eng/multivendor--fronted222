# Multivendor Frontend (Production ready)

This repository contains a Vite + React + Tailwind frontend for a multivendor app.

## Production build (what's included)
- Source code ready to build (`npm run build`)
- Vite config set to output `dist/`
- `.env` already points to your Render backend

## How to build (on your machine or CI)
1. Install dependencies:
```bash
npm install
```
2. Build for production:
```bash
npm run build
```
3. The production files will be in the `dist/` folder. Deploy `dist/` to Netlify, Vercel, or any static host.

## Notes
- API base is set by `VITE_API_URL` (client env vars must start with `VITE_`).
- If your backend endpoints differ, update `src/api/api.js`.
