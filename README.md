# Flagship Boutique

Static boutique website with a Vercel serverless AI concierge named Amélie.

## Deploy on Vercel

1. Push this folder to GitHub.
2. Import the project in Vercel.
3. Add Environment Variables:
   - `NVIDIA_API_KEY`: your rotated NVIDIA API key
   - `NVIDIA_MODEL`: `meta/llama-4-maverick-17b-128e-instruct`
   - `ALLOWED_ORIGINS`: optional comma-separated domains if you need cross-origin access
4. Deploy.

If you use a custom domain or a different Vercel project URL, update the canonical URLs in the HTML files plus `robots.txt` and `sitemap.xml`.

## Local Development

Install Vercel CLI if needed:

```bash
npm i -g vercel
```

Create `.env.local` from `.env.example`, then run:

```bash
vercel dev
```

Open the local Vercel URL and chat with Amélie.

After deploy, visit `/api/health` to confirm the site is live and `aiConfigured` is `true`.

## Security Note

Never put `NVIDIA_API_KEY` in browser JavaScript. The AI widget calls `/api/amelie`, and that serverless function reads the key from Vercel environment variables.

The key previously pasted in chat should be rotated before deployment.
