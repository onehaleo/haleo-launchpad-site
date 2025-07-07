
# Haleo - Automation that works while you don't

A modern, responsive website for Haleo, a systems studio for solopreneurs. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all devices from mobile to desktop
- **Smooth Scrolling Navigation**: Single-page application with smooth section transitions
- **Modern UI**: Clean design with purple gradient branding and Inter typography
- **Performance Optimized**: Built with Vite for fast loading and development
- **Accessible**: Semantic HTML and proper ARIA labels

## Sections

1. **Hero Section**: Main value proposition with call-to-action buttons
2. **Services**: Automation services, AI agents, and Notion templates
3. **Why Haleo**: Three key differentiators for solopreneurs
4. **Featured Template**: Showcase of the Solopreneur CRM template
5. **About**: Personal story and company mission
6. **Footer**: Social links, newsletter signup, and legal information

## Brand Colors

- **Cloud White**: `#F9F9F9`
- **Haleo Ink**: `#1f1f1f`
- **Haleo Gray**: `#333333`
- **Haleo Violet**: `#b850ff`
- **Haleo Core**: `#521ca6`

## Development

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

## Deployment to GitHub Pages

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Create deployment workflow**:
   Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      if: github.ref == 'refs/heads/main'
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

3. **Update base path** (if repository name is not the domain):
   In `vite.config.ts`, add:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  // ... rest of config
});
```

4. **Push to GitHub**:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

The site will automatically deploy to `https://yourusername.github.io/your-repo-name/`

## Custom Domain Setup

To use a custom domain like `onehaleo.com`:

1. Add a `CNAME` file to the `public` directory with your domain:
```
onehaleo.com
```

2. Configure your domain's DNS:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records pointing to GitHub's IP addresses

3. Enable custom domain in repository settings under Pages section

## Technologies Used

- **React 18**: Modern React with hooks and concurrent features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **Lucide React**: Beautiful icon library
- **React Router**: Client-side routing

## License

© Haleo LLC. All rights reserved.
