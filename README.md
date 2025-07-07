
# Haleo Website

A modern, responsive React website built for Haleo - automation systems for solopreneurs.

## 🚀 Tech Stack

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling with custom design tokens
- **React Router** for navigation
- **Shadcn/ui** components
- **Lucide React** icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Navigation.tsx  # Main navigation
│   ├── HeroSection.tsx # Landing page hero
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   ├── Services.tsx    # Services page
│   ├── Templates.tsx   # Templates page
│   └── ...
├── content/            # Content management
│   └── site.yaml       # Site content configuration
├── hooks/              # Custom React hooks
│   └── useContent.ts   # Content management hook
└── index.css          # Global styles & design tokens
```

## 🎨 Design System

The site uses a custom design system with semantic color tokens:

- `--haleo-cloud`: #F9F9F9 (Light backgrounds)
- `--haleo-ink`: #1f1f1f (Dark text)
- `--haleo-gray`: #333333 (Secondary text)
- `--haleo-violet`: #b850ff (Accent color)
- `--haleo-core`: #521ca6 (Primary brand color)

## 📝 Content Management

### Current Setup
Content is structured in YAML files for easy editing:
- `src/content/site.yaml` - Main site content
- `src/hooks/useContent.ts` - Content loading hook

### CMS Integration Options

#### Option 1: Netlify CMS
1. Add Netlify CMS to your project:
   ```bash
   npm install netlify-cms-app
   ```

2. Create `public/admin/index.html`:
   ```html
   <!doctype html>
   <html>
   <head>
     <meta charset="utf-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Content Manager</title>
   </head>
   <body>
     <div id="nc-root"></div>
     <script src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"></script>
   </body>
   </html>
   ```

3. Create `public/admin/config.yml` with your content structure
4. Access at `yoursite.com/admin/`

#### Option 2: Tina CMS
1. Install Tina:
   ```bash
   npm install @tinacms/cli @tinacms/datalayer tinacms
   ```

2. Run setup:
   ```bash
   npx @tinacms/cli@latest init
   ```

3. Configure `tina/config.ts` with your schema
4. Access visual editor at `yoursite.com/admin/`

#### Option 3: Sanity CMS
1. Create Sanity project:
   ```bash
   npm install @sanity/client
   ```

2. Set up schemas for your content types
3. Use Sanity Studio for content editing
4. Fetch content via API in `useContent.ts`

#### Option 4: Contentful
1. Install Contentful SDK:
   ```bash
   npm install contentful
   ```

2. Set up content models in Contentful dashboard
3. Update `useContent.ts` to fetch from Contentful API

### Recommended Approach: Tina CMS
For this project, **Tina CMS** is recommended because:
- ✅ Git-based (content stored in your repo)
- ✅ Visual editing experience
- ✅ TypeScript support
- ✅ Works great with React
- ✅ Free for small teams

## 🚀 Deployment

### GitHub Pages Setup

1. **Connect to GitHub:**
   - Click the GitHub button in Lovable
   - Authorize and create repository

2. **Configure GitHub Pages:**
   - Go to repository Settings > Pages
   - Source: GitHub Actions
   - The included workflow will handle deployment

3. **Environment Variables:**
   Add any needed variables in repository Settings > Secrets

### Custom Domain Setup
1. Add `CNAME` file to `public/` folder with your domain
2. Configure DNS to point to GitHub Pages
3. Enable HTTPS in repository settings

## 📱 Features

- ✅ Fully responsive design
- ✅ Multi-page navigation with React Router
- ✅ Semantic design system with CSS custom properties
- ✅ Template showcase with purchase links
- ✅ Contact forms (ready for backend integration)
- ✅ SEO-friendly structure
- ✅ Fast loading with Vite optimization

## 🔧 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Next Steps

1. **Connect CMS** (Tina recommended)
2. **Add backend** for contact forms (Netlify Forms or Supabase)
3. **Set up analytics** (Google Analytics, Plausible)
4. **Add SEO meta tags** and Open Graph images
5. **Connect payment processing** (replace Gumroad links)

## 📞 Support

For questions about this codebase or Haleo services:
- Email: hello@onehaleo.com
- Website: https://onehaleo.com
