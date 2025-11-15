# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Push your code to GitHub

```bash
# Add all files
git add .

# Commit
git commit -m "Initial commit - Resume website"

# Push to GitHub
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your GitHub repository: `https://github.com/jeevanvns/my-profile`
2. Click on **Settings** tab
3. Scroll down to **Pages** section (left sidebar)
4. Under **Source**, select:
   - **Source**: `GitHub Actions`
5. Save the settings

### 3. Deploy

The GitHub Actions workflow will automatically:
- Build your Next.js app
- Deploy to GitHub Pages
- Your site will be available at: `https://jeevanvns.github.io/my-profile/`

### 4. View Deployment Status

- Go to the **Actions** tab in your repository
- You'll see the deployment workflow running
- Once complete, your site will be live!

## Important Notes

- The basePath is set to `/my-profile` to match your repository name
- The workflow runs automatically on every push to `main` branch
- First deployment may take a few minutes
- Subsequent deployments are faster

## Custom Domain (Optional)

If you want to use a custom domain:
1. Update `next.config.ts` - set `basePath` to `""`
2. Add your custom domain in GitHub Pages settings
3. Update your DNS records

