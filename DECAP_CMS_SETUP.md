# GitHub Pages Setup for Decap CMS

## 🚀 Setup Steps for GitHub Pages + Decap CMS

### 1. Update Repository Information
In `public/admin/config.yml`, replace:
```yaml
repo: YOUR_USERNAME/YOUR_REPO_NAME
```
With your actual GitHub username and repository name.

### 2. GitHub OAuth Application Setup
1. Go to GitHub Settings → Developer settings → OAuth Apps
2. Click "New OAuth App"
3. Fill in:
   - **Application name**: `Haleo CMS`
   - **Homepage URL**: `https://yourusername.github.io/your-repo-name`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`

### 3. Environment Setup
Create a `.env` file (for local development):
```
GITHUB_CLIENT_ID=your_client_id_from_oauth_app
GITHUB_CLIENT_SECRET=your_client_secret_from_oauth_app
```

### 4. Access Your CMS
Once deployed to GitHub Pages, access your admin panel at:
`https://yourusername.github.io/your-repo-name/admin/`

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