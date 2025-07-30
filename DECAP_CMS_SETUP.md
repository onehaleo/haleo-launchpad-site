# GitHub Pages Setup for Decap CMS

## 🚀 Setup Steps for GitHub Pages + Decap CMS

## 🚀 Setup Steps for onehaleo.com + Decap CMS

### 1. Repository Configuration ✅
Already configured for: `onehaleo/haleo-launchpad-site`

### 2. GitHub OAuth Application Setup
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: `Haleo CMS`
   - **Homepage URL**: `https://onehaleo.com`
   - **Authorization callback URL**: `https://onehaleo.com/admin/`

### 3. Alternative: Use GitHub's Implicit Flow
The current configuration uses GitHub's implicit OAuth flow which doesn't require a separate OAuth app setup, but requires you to have admin access to the repository.

### 4. Access Your CMS
Access your admin panel at:
**https://onehaleo.com/admin/**

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