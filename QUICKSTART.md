# Quick Start Guide

## Preview the Site Locally

```bash
cd ~/code/charlestbetz.com
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve
```

Then visit: http://localhost:4000/charlestbetz.com/

Press `Ctrl+C` to stop the server.

## Deploy to GitHub Pages (First Time)

```bash
# 1. Create repo at github.com (name it "charlestbetz.com")

# 2. Push code (replace USERNAME with your GitHub username)
cd ~/code/charlestbetz.com
git remote add origin git@github.com:USERNAME/charlestbetz.com.git
git push -u origin main

# 3. Enable GitHub Pages
# Go to repo → Settings → Pages
# Source: Deploy from branch
# Branch: main / (root)
# Save

# Site will be live at: https://USERNAME.github.io/charlestbetz.com/
```

## Make Updates

```bash
# Edit files locally (use any text editor)
# Then:
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild (1-2 minutes).

## Add a New Blog Post

```bash
cd ~/code/charlestbetz.com/_posts
# Create file: YYYY-MM-DD-title.md

# Add front matter:
---
layout: post
title: "Your Title"
date: 2026-04-15
categories: [compositions]
---

# Write your post content here...
```

## Need Help?

- **Full deployment guide:** See `DEPLOYMENT.md`
- **Migration details:** See `MIGRATION-SUMMARY.md`
- **Technical reference:** See `README.md`

---

That's it! Simple, fast, and free.
