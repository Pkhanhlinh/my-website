# Kalynk An Tuệ - Om.Vibe Retreat Website

A static website for Kalynk An Tuệ's Om.Vibe Retreat Mieu Lake, featuring homestay accommodations, healing programs, and villa bookings.

## Features

- Multi-language support (Vietnamese, English, French, Japanese, Korean, Chinese, Russian)
- Responsive design for all devices
- Image lazy loading for better performance
- Instagram embed support
- Photo galleries for rooms and facilities

## Deployment to Cloudflare Pages

### Option 1: Using Cloudflare Dashboard

1. **Prepare your project:**
   - Ensure all files are in the root directory
   - The `_headers` file is already configured for optimal caching

2. **Connect to Cloudflare:**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to "Pages" → "Connect to Git" or "Create a project"

3. **For direct upload:**
   - Go to Cloudflare Dashboard → Pages → "Create a project" → "Direct upload"
   - Drag and drop your project folder
   - Or use Wrangler CLI: `npx wrangler pages deploy .`

4. **Configure settings:**
   - Build command: (leave empty - this is a static site)
   - Build output directory: (leave empty)
   - Root directory: (leave as default)

5. **Deploy:**
   - Click "Deploy site"
   - Your site will be available at `https://your-project.pages.dev`

### Option 2: Using Wrangler CLI

```bash
# Install Wrangler if not already installed
npm install -g wrangler

# Login to Cloudflare
npx wrangler login

# Deploy to Pages
npx wrangler pages deploy . --project-name=kalynk-an-tue

# Or create a pages project first
npx wrangler pages project create kalynk-an-tue
npx wrangler pages deploy . --project-name=kalynk-an-tue
```

### Option 3: Using GitHub Integration

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/kalynk-an-tue.git
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages:**
   - Go to Cloudflare Dashboard → Pages → "Connect to Git"
   - Select your GitHub repository
   - Configure build settings (leave empty for static site)
   - Click "Deploy"

## Project Structure

```
├── _headers              # Cloudflare Pages caching headers
├── common.css            # Main stylesheet
├── common.js             # JavaScript (language switcher, header, etc.)
├── index.html            # Homepage
├── homestay.html         # Homestay page with Blog link
├── blog.html             # Blog/news page
├── healing.html          # Healing programs page
├── healthy.html          # Healthy services page
├── tien-ich.html         # Facilities page
├── villa.html            # Villa booking page
├── album1.html           # Room photo gallery
├── album2.html - album13.html  # Additional photo galleries
├── villa-album1.html - villa-album3.html  # Villa photo galleries
├── ảnh/                  # Image folder
└── lặng/                 # Image folder
```

## Performance Optimizations

- **Lazy loading:** All images use `loading="lazy"` attribute
- **Caching:** Configured in `_headers` for optimal cache behavior
- **Static site:** No build process required, fast loading

## Customization

### Adding New Images

When adding new images to any page, use the following format:

```html
<img loading="lazy" src="path/to/image.jpg" alt="Description">
```

### Adding New Languages

Edit `common.js` to add new language translations:

```javascript
const translations = {
    // ... existing languages
    new_lang_code: {
        home: "Translation",
        homestay: "Translation",
        healing: "Translation",
        villa: "Translation",
        healthy: "Translation"
    }
};
```

Then add the language to the dropdown menu in `common.js`.

## License

Copyright © 2023 Kalynk An Tuệ. All rights reserved.
