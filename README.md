# Kalynk An Tuệ - Om.Vibe Retreat Website

A static website for Kalynk An Tuệ's Om.Vibe Retreat Mieu Lake.

## Deployment to Cloudflare Pages

### Steps:

1. **Push code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/kalynk-an-tue.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Pages** → **Connect to Git**
   - Select your GitHub repository: `kalynk-an-tue`
   - Click **Connect**

3. **Deploy:**
   - Cloudflare will automatically detect this is a static site
   - Click **Save and Deploy**
   - Your site will be live at `https://kalynk-an-tue.pages.dev`

## Features

- Multi-language support (7 languages)
- Responsive design
- Lazy loading for images
- Blog section for daily news

## Files

- `wrangler.toml` - Cloudflare Pages configuration
- `_headers` - Cache headers for static assets
- `common.js` - Language switcher and shared functionality
- `common.css` - Main stylesheet
- HTML files for all pages
