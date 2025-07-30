# Complete Manual Setup Guide: React Website with Decap CMS

This guide walks you through setting up a complete React website with Decap CMS for content management, OAuth authentication, and GitHub Pages deployment - exactly like this project.

## Table of Contents
1. [Project Initialization](#1-project-initialization)
2. [Install Dependencies](#2-install-dependencies)
3. [Project Structure Setup](#3-project-structure-setup)
4. [Decap CMS Configuration](#4-decap-cms-configuration)
5. [OAuth Provider Setup](#5-oauth-provider-setup)
6. [GitHub OAuth Application](#6-github-oauth-application)
7. [Content Management System](#7-content-management-system)
8. [GitHub Pages Deployment](#8-github-pages-deployment)
9. [Testing and Verification](#9-testing-and-verification)
10. [Troubleshooting](#10-troubleshooting)

---

## 1. Project Initialization

### Create a new React project with Vite
```bash
npm create vite@latest my-website -- --template react-ts
cd my-website
npm install
```

### Initialize Git repository
```bash
git init
git add .
git commit -m "Initial commit"
```

### Connect to GitHub
```bash
# Create a new repository on GitHub first, then:
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

---

## 2. Install Dependencies

### Core dependencies
```bash
npm install \
  @radix-ui/react-accordion \
  @radix-ui/react-alert-dialog \
  @radix-ui/react-aspect-ratio \
  @radix-ui/react-avatar \
  @radix-ui/react-checkbox \
  @radix-ui/react-collapsible \
  @radix-ui/react-context-menu \
  @radix-ui/react-dialog \
  @radix-ui/react-dropdown-menu \
  @radix-ui/react-hover-card \
  @radix-ui/react-label \
  @radix-ui/react-menubar \
  @radix-ui/react-navigation-menu \
  @radix-ui/react-popover \
  @radix-ui/react-progress \
  @radix-ui/react-radio-group \
  @radix-ui/react-scroll-area \
  @radix-ui/react-select \
  @radix-ui/react-separator \
  @radix-ui/react-slider \
  @radix-ui/react-slot \
  @radix-ui/react-switch \
  @radix-ui/react-tabs \
  @radix-ui/react-toast \
  @radix-ui/react-toggle \
  @radix-ui/react-toggle-group \
  @radix-ui/react-tooltip \
  class-variance-authority \
  clsx \
  cmdk \
  embla-carousel-react \
  js-yaml \
  lucide-react \
  next-themes \
  react-router-dom \
  sonner \
  tailwind-merge \
  tailwindcss-animate
```

### Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

---

## 3. Project Structure Setup

### Create the following directory structure:
```
src/
├── components/
│   ├── ui/              # Shadcn UI components
│   ├── AboutSection.tsx
│   ├── FeaturedTemplateSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── LoadingScreen.tsx
│   ├── Navigation.tsx
│   ├── PageTransition.tsx
│   ├── SEOHead.tsx
│   ├── ServicesSection.tsx
│   └── WhyHaleoSection.tsx
├── hooks/
│   ├── useContent.ts
│   ├── use-mobile.tsx
│   ├── use-toast.ts
│   └── useNavigation.ts
├── lib/
│   └── utils.ts
├── pages/
│   ├── About.tsx
│   ├── Index.tsx
│   ├── NotFound.tsx
│   ├── Services.tsx
│   ├── Templates.tsx
│   └── WhyHaleo.tsx
└── content/
    └── site.yaml
public/
├── admin/
│   ├── index.html
│   └── config.yml
├── content/
│   └── site.yaml
└── (other static files)
```

### Configure Tailwind CSS (`tailwind.config.ts`)
```typescript
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
```

### Configure CSS variables (`src/index.css`)
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 84% 4.9%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 84% 4.9%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

---

## 4. Decap CMS Configuration

### Create `public/admin/index.html`
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Content Manager - Your Site</title>
  </head>
  <body>
    <!-- Include the script that builds the page and powers Decap CMS -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>
  </body>
</html>
```

### Create `public/admin/config.yml`
```yaml
backend:
  name: github
  repo: yourusername/your-repo-name # Change this to your repo
  branch: main
  open_authoring: true
  # Your OAuth provider URL (will be updated after step 5)
  base_url: https://your-oauth-provider.vercel.app
  auth_endpoint: auth

# Editorial workflow for content reviews
editorial_workflow: true

# Media and Public folder settings  
media_folder: public/images
public_folder: /images

# Site settings
site_url: https://yourusername.github.io/your-repo-name
display_url: https://yourusername.github.io/your-repo-name
logo_url: https://yourusername.github.io/your-repo-name/favicon.ico

collections:
  - name: "site"
    label: "Site Configuration" 
    files:
      - file: "public/content/site.yaml"
        label: "Site Content"
        name: "site"
        fields:
          # Site Information
          - {label: "Site Name", name: "name", widget: "string"}
          - {label: "Tagline", name: "tagline", widget: "string"}
          - {label: "Description", name: "description", widget: "text"}
          - {label: "Email", name: "email", widget: "string"}
          - {label: "Website", name: "website", widget: "string"}
          
          # Brand Colors
          - label: "Brand Colors"
            name: "brand"
            widget: "object"
            fields:
              - {label: "Primary Color", name: "primary", widget: "string"}
              - {label: "Secondary Color", name: "secondary", widget: "string"}
              - {label: "Accent Color", name: "accent", widget: "string"}
              - {label: "Neutral Color", name: "neutral", widget: "string"}
          
          # Hero Section
          - label: "Hero Section"
            name: "hero"
            widget: "object"
            fields:
              - {label: "Headline", name: "headline", widget: "string"}
              - {label: "Subhead", name: "subhead", widget: "string"}
              - {label: "Description", name: "description", widget: "text"}
              - label: "Call to Actions"
                name: "cta"
                widget: "list"
                fields:
                  - {label: "Text", name: "text", widget: "string"}
                  - {label: "URL", name: "url", widget: "string"}
                  - {label: "Primary", name: "primary", widget: "boolean", default: false}
              - label: "Statistics"
                name: "stats"
                widget: "list"
                fields:
                  - {label: "Number", name: "number", widget: "string"}
                  - {label: "Label", name: "label", widget: "string"}

  - name: "pages"
    label: "Pages"
    folder: "src/content/pages"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Description", name: "description", widget: "text", required: false}
      - {label: "Body", name: "body", widget: "markdown"}
      - {label: "SEO Title", name: "seo_title", widget: "string", required: false}
      - {label: "SEO Description", name: "seo_description", widget: "text", required: false}
```

---

## 5. OAuth Provider Setup

### Deploy OAuth Provider on Vercel

1. **Go to Vercel and deploy OAuth provider:**
   - Visit: https://vercel.com/new/clone?repository-url=https://github.com/bericp1/netlify-cms-oauth-provider-node&env=GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,ORIGIN
   - Name your project (e.g., `my-site-oauth`)
   - Set environment variables (you'll get these in step 6):
     - `GITHUB_CLIENT_ID`: (from GitHub OAuth app)
     - `GITHUB_CLIENT_SECRET`: (from GitHub OAuth app)
     - `ORIGIN`: your site URL (e.g., `https://yourusername.github.io/your-repo-name`)

2. **Note your Vercel domain** (e.g., `my-site-oauth.vercel.app`)

---

## 6. GitHub OAuth Application

### Create GitHub OAuth App

1. **Go to GitHub Settings**
   - Navigate to: Settings → Developer settings → OAuth Apps
   - Click "New OAuth App"

2. **Configure OAuth App:**
   - **Application name**: `My Site CMS`
   - **Homepage URL**: `https://yourusername.github.io/your-repo-name`
   - **Authorization callback URL**: `https://your-oauth-provider.vercel.app/callback`

3. **Get credentials:**
   - Copy the **Client ID**
   - Generate and copy the **Client Secret**

4. **Update Vercel environment variables:**
   - Go back to your Vercel project
   - Add the GitHub Client ID and Secret to environment variables
   - Redeploy the function

5. **Update Decap CMS config:**
   ```yaml
   # In public/admin/config.yml, update line 6:
   base_url: https://your-oauth-provider.vercel.app
   ```

---

## 7. Content Management System

### Create content hook (`src/hooks/useContent.ts`)
```typescript
import { useEffect, useState } from 'react';
import yaml from 'js-yaml';

// Content cache for performance optimization
let contentCache: any = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export const useContent = () => {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        // Check cache first for performance
        const now = Date.now();
        if (contentCache && (now - cacheTimestamp) < CACHE_DURATION) {
          setContent(contentCache);
          setLoading(false);
          return;
        }

        // Load from file system (works with Decap CMS)
        const response = await fetch('/content/site.yaml?' + now); // Cache busting
        if (!response.ok) {
          throw new Error(`Failed to load content: ${response.status}`);
        }
        
        const yamlText = await response.text();
        const parsedContent = yaml.load(yamlText);
        
        // Update cache
        contentCache = parsedContent;
        cacheTimestamp = now;
        
        setContent(parsedContent);
      } catch (err) {
        console.error('Error loading content:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return { content, loading, error };
};

// Utility to refresh content cache (useful for CMS updates)
export const refreshContentCache = () => {
  contentCache = null;
  cacheTimestamp = 0;
};
```

### Create initial content file (`public/content/site.yaml`)
```yaml
# Site Information
name: "My Awesome Website"
tagline: "Building amazing digital experiences"
description: "We create beautiful, functional websites that help businesses grow and succeed online."
email: "hello@mysite.com"
website: "https://mysite.com"

# Brand Colors
brand:
  primary: "#3B82F6"
  secondary: "#8B5CF6"
  accent: "#10B981"
  neutral: "#6B7280"

# Hero Section
hero:
  headline: "Welcome to My Website"
  subhead: "Creating Amazing Digital Experiences"
  description: "We help businesses build beautiful, functional websites that drive results and engage customers."
  cta:
    - text: "Get Started"
      url: "/contact"
      primary: true
    - text: "Learn More"
      url: "/about"
      primary: false
  stats:
    - number: "100+"
      label: "Happy Clients"
    - number: "50+"
      label: "Projects Completed"
    - number: "5+"
      label: "Years Experience"
```

---

## 8. GitHub Pages Deployment

### Create GitHub Actions workflow (`.github/workflows/deploy.yml`)
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
        
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Configure GitHub Pages

1. **Go to your GitHub repository**
2. **Navigate to Settings → Pages**
3. **Configure source:**
   - Source: "GitHub Actions"
4. **Save and wait for deployment**

### Update base URL in Vite config (`vite.config.ts`)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/', // Change this to your repository name
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

---

## 9. Testing and Verification

### Local Testing
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### CMS Testing
1. **Access your CMS**: `https://yourusername.github.io/your-repo-name/admin/`
2. **Login with GitHub**
3. **Edit content and publish**
4. **Verify changes appear on your site**

### Deployment Verification
1. **Check GitHub Actions**: Verify builds are successful
2. **Visit your site**: `https://yourusername.github.io/your-repo-name/`
3. **Test all pages and functionality**

---

## 10. Troubleshooting

### Common Issues and Solutions

#### OAuth Provider Issues
- **Problem**: "Cannot GET /" error on OAuth provider
- **Solution**: Redeploy OAuth provider, check environment variables

#### GitHub Pages Not Updating
- **Problem**: Changes not reflecting on GitHub Pages
- **Solution**: Check GitHub Actions logs, verify build process

#### CMS Authentication Issues  
- **Problem**: Can't login to CMS
- **Solution**: 
  - Verify OAuth app callback URL matches Vercel domain
  - Check GitHub OAuth app is configured correctly
  - Ensure repository is public or has correct permissions

#### Content Not Loading
- **Problem**: YAML content not loading in React app
- **Solution**:
  - Check file paths in `useContent.ts`
  - Verify YAML syntax is valid
  - Check browser network tab for 404 errors

#### Build Failures
- **Problem**: GitHub Actions build failing
- **Solution**:
  - Check dependency versions compatibility
  - Verify TypeScript types are correct
  - Review build logs for specific errors

### Debug Commands
```bash
# Check for TypeScript errors
npm run build

# Test YAML parsing
node -e "console.log(require('js-yaml').load(require('fs').readFileSync('public/content/site.yaml', 'utf8')))"

# Check dependencies
npm audit

# Clear npm cache
npm cache clean --force
```

### Support Resources
- [Decap CMS Documentation](https://decapcms.org/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Documentation](https://vitejs.dev/guide/)
- [React Router Documentation](https://reactrouter.com/en/main)

---

## Next Steps

After completing this setup:

1. **Customize your design** - Update colors, fonts, and layouts
2. **Add more content types** - Extend the CMS configuration
3. **Implement SEO** - Add meta tags and structured data  
4. **Add analytics** - Integrate Google Analytics or similar
5. **Custom domain** - Configure a custom domain for your site
6. **Performance optimization** - Add image optimization and caching

---

## File Checklist

Before deploying, ensure you have created these files:

- [ ] `public/admin/index.html`
- [ ] `public/admin/config.yml` 
- [ ] `public/content/site.yaml`
- [ ] `src/hooks/useContent.ts`
- [ ] `.github/workflows/deploy.yml`
- [ ] `tailwind.config.ts`
- [ ] `vite.config.ts`
- [ ] Updated `src/index.css`

## Configuration Checklist

- [ ] GitHub repository created and connected
- [ ] OAuth provider deployed on Vercel
- [ ] GitHub OAuth app configured
- [ ] Environment variables set in Vercel
- [ ] GitHub Pages enabled
- [ ] Base URL updated in Vite config
- [ ] Repository name updated in all configs

**Congratulations!** You now have a fully functional React website with Decap CMS content management, automated deployment, and OAuth authentication.