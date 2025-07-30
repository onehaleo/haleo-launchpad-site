# GitHub Pages Setup for Decap CMS

## 🚀 Setup Steps for GitHub Pages + Decap CMS

## 🚀 Setup Steps for onehaleo.com + Decap CMS

### 1. Repository Configuration ✅
Already configured for: `onehaleo/haleo-launchpad-site`

### 2. GitHub OAuth Application Setup (Required)
Even with Open Authoring, you need to create a GitHub OAuth app:

1. Go to **GitHub Settings → Developer settings → OAuth Apps**
2. Click **"New OAuth App"**
3. Fill in:
   - **Application name**: `Haleo CMS`
   - **Homepage URL**: `https://onehaleo.com`
   - **Authorization callback URL**: `https://decap-oauth-github.netlify.app/callback`

4. **Note your Client ID and Client Secret**

### 3. Configure OAuth Service
1. Visit: **https://decap-oauth-github.netlify.app/**
2. Register your OAuth app with the service:
   - Enter your **Client ID**
   - Enter your **Client Secret** 
   - Set **Site URL**: `https://onehaleo.com`

### 4. How It Works
- **OAuth Proxy**: The service acts as a bridge between your static site and GitHub
- **Repository Access**: You get full editing privileges as the repo owner
- **Open Authoring**: External contributors can submit PRs automatically

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