# Deployment Guide - charlestbetz.com

## Overview

This Jekyll site is designed to deploy to GitHub Pages. It can be accessed via GitHub's subdomain or configured to use your custom domain (charlestbetz.com).

## Prerequisites

- GitHub account
- Git installed locally
- (Optional) Access to DNS settings for charlestbetz.com

## Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `charlestbetz.com` (or `charlestbetz.github.io` for user site)
3. Make it public (required for free GitHub Pages)
4. Do NOT initialize with README (you already have one)

## Step 2: Push to GitHub

From your local project directory:

```bash
cd ~/code/charlestbetz.com

# Initialize git (already done)
git add .
git commit -m "Initial Jekyll migration from Wix"

# Add remote (replace USERNAME with your GitHub username)
git remote add origin git@github.com:USERNAME/charlestbetz.com.git

# Or if using HTTPS:
# git remote add origin https://github.com/USERNAME/charlestbetz.com.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: **main** / **(root)**
   - Click **Save**

GitHub will automatically build your Jekyll site.

## Step 4A: Access via GitHub Subdomain (Temporary)

Your site will be available at:
- `https://USERNAME.github.io/charlestbetz.com/`

Note the `/charlestbetz.com/` path — this matches your `baseurl` in `_config.yml`.

## Step 4B: Configure Custom Domain (charlestbetz.com)

### Add CNAME file

Create a file named `CNAME` in the root of your repository:

```bash
echo "charlestbetz.com" > ~/code/charlestbetz.com/CNAME
git add CNAME
git commit -m "Add CNAME for custom domain"
git push
```

### Update _config.yml for Custom Domain

Edit `_config.yml`:

```yaml
url: "https://charlestbetz.com"
baseurl: ""  # Empty for custom domain
```

Commit and push:

```bash
git add _config.yml
git commit -m "Update config for custom domain"
git push
```

### Configure DNS Settings

In your domain registrar's DNS settings (wherever charlestbetz.com is hosted):

**Option 1: Apex domain (charlestbetz.com)**

Add these **A records** pointing to GitHub Pages IPs:

```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**Option 2: www subdomain (www.charlestbetz.com)**

Add a **CNAME record**:
- Name: `www`
- Value: `USERNAME.github.io`

Then add an **A record** or **ALIAS/ANAME** for the apex domain pointing to `www`.

### Enable Custom Domain in GitHub

1. Go back to Settings → Pages
2. Enter `charlestbetz.com` in the Custom domain field
3. Click **Save**
4. Wait for DNS check (can take up to 48 hours, usually ~1 hour)
5. Once verified, check **Enforce HTTPS**

## Step 5: Verify Deployment

Visit your site:
- GitHub subdomain: `https://USERNAME.github.io/charlestbetz.com/`
- Custom domain: `https://charlestbetz.com`

Check that:
- Homepage loads with news feed
- Bio page shows full biography
- Blog page lists all posts
- Individual blog posts load correctly
- Links work (especially YouTube embeds)

## Local Development

To work on the site locally:

```bash
cd ~/code/charlestbetz.com

# Serve locally (with proper Ruby path)
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve

# Visit http://localhost:4000/charlestbetz.com/
# (or http://localhost:4000/ if baseurl is empty)
```

## Updating the Site

Make changes locally, then:

```bash
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy within 1-2 minutes.

## Adding New Blog Posts

Create a new file in `_posts/` with the format:

```
YYYY-MM-DD-title-slug.md
```

Example: `2026-04-15-new-composition.md`

Front matter template:

```yaml
---
layout: post
title: "Your Post Title"
date: 2026-04-15
categories: [compositions, choral]
---

Your content here...
```

## Migrating Media from Wix

If you have images, PDFs, or other media on your Wix site:

1. Download from Wix Media Manager
2. Place in `assets/images/` or `assets/media/`
3. Reference in posts: `![Alt text](/assets/images/filename.jpg)`
4. Commit and push

For YouTube videos, just use the embed link in markdown:
```markdown
[Watch the video](https://www.youtube.com/watch?v=VIDEO_ID)
```

## Troubleshooting

### Site doesn't load

- Check that GitHub Pages is enabled
- Verify DNS settings are correct (use `dig charlestbetz.com` or `nslookup charlestbetz.com`)
- Check that CNAME file exists and contains correct domain
- Look at Settings → Pages for build errors

### Links broken

- Check `baseurl` in `_config.yml`
- For GitHub subdomain, baseurl should be `/charlestbetz.com`
- For custom domain, baseurl should be empty (`""`)

### Build fails

- Check GitHub Actions tab for error messages
- Common issues: bad YAML front matter, Ruby gem conflicts
- You can test locally with `bundle exec jekyll build`

### Custom domain not working

- DNS propagation can take up to 48 hours
- Use https://www.whatsmydns.net/ to check DNS propagation globally
- Verify A records point to all four GitHub IPs
- Try clearing browser cache

## Maintenance

### Update dependencies

```bash
bundle update
git add Gemfile.lock
git commit -m "Update dependencies"
git push
```

### Backup

Keep a local copy and/or backup to another service:

```bash
# Create tarball backup
tar -czf charlestbetz.com-backup-$(date +%Y%m%d).tar.gz ~/code/charlestbetz.com/

# Or use git to push to a second remote (e.g., GitLab, Bitbucket)
git remote add backup git@gitlab.com:USERNAME/charlestbetz.com.git
git push backup main
```

## Support

- Jekyll documentation: https://jekyllrb.com/docs/
- GitHub Pages docs: https://docs.github.com/en/pages
- Minima theme: https://github.com/jekyll/minima

---

Created: 2026-03-29
Last updated: 2026-03-29
