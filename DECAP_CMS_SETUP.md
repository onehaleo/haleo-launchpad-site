# GitHub Pages Setup for Decap CMS

## 🚀 Setup Steps for GitHub Pages + Decap CMS

## 🚀 Setup Steps for onehaleo.com + Decap CMS

### 1. Repository Configuration ✅
Already configured for: `onehaleo/haleo-launchpad-site`

### 2. Deploy Free OAuth Provider (Vercel)
**Option A: Quick Deploy**
1. Click: [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bericp1/netlify-cms-oauth-provider-node&env=GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,ORIGIN)
2. Set environment variables:
   - `GITHUB_CLIENT_ID`: Your GitHub OAuth app client ID
   - `GITHUB_CLIENT_SECRET`: Your GitHub OAuth app client secret  
   - `ORIGIN`: `https://onehaleo.com`
3. Note your Vercel domain (e.g., `your-oauth.vercel.app`)

**Option B: Manual Setup**
1. Fork: https://github.com/bericp1/netlify-cms-oauth-provider-node
2. Deploy to Vercel from your fork
3. Configure environment variables

### 3. GitHub OAuth Application Setup
1. Go to **GitHub Settings → Developer settings → OAuth Apps**
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name**: `Haleo CMS`
   - **Homepage URL**: `https://onehaleo.com`
   - **Authorization callback URL**: `https://YOUR_VERCEL_DOMAIN.vercel.app/callback`

### 4. Update Config
Update `public/admin/config.yml` line 6:
```yaml
base_url: https://YOUR_VERCEL_DOMAIN.vercel.app
```

### 5. Access Your CMS
Access your admin panel at: **https://onehaleo.com/admin/**

### 5. Authentication Flow
1. Click "Login with GitHub" 
2. Authorize the OAuth app
3. You'll be redirected back to the admin interface
4. Edit content directly in your repository

## 📝 How It Works
- **Direct GitHub Integration**: Edits commit directly to your repository
- **Branch-based**: Creates commits on your main branch
- **Pull Request Workflow**: Optionally configure editorial workflow for PR-based editing
- **Static Hosting Compatible**: Works perfectly with GitHub Pages

## 🔧 Troubleshooting
- Ensure your repository is public or you have proper OAuth scope
- Check that the OAuth callback URL matches exactly
- Verify your repository name is correctly configured in config.yml

Your content will be edited directly in your GitHub repository and automatically deploy via GitHub Pages!