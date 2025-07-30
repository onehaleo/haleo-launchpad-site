# GitHub Pages Setup for Decap CMS

## 🚀 Setup Steps for GitHub Pages + Decap CMS

## 🚀 Setup Steps for onehaleo.com + Decap CMS

### 1. Repository Configuration ✅
Already configured for: `onehaleo/haleo-launchpad-site`

### 2. Open Authoring Setup ✅
Using Decap's Open Authoring feature which:
- **No OAuth app needed** - Uses GitHub's built-in authentication
- **Automatic forking** - Creates forks for contributors automatically  
- **Pull request workflow** - Content changes create PRs for review
- **Direct repository access** - You have full write access as repo owner

### 3. How It Works
1. **For you (repo owner)**: Direct editing access, changes commit to main branch
2. **For contributors**: CMS creates forks and PRs automatically
3. **Content workflow**: Draft → Ready for Review → Merge via GitHub

### 4. Access Your CMS
Access your admin panel at:
**https://onehaleo.com/admin/**

### 5. No Additional Setup Required
- Open Authoring uses GitHub's native authentication
- You authenticate with your GitHub account that owns the repository
- No OAuth apps, no external services needed!

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