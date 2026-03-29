# charlestbetz.com - Jekyll Migration Documentation Index

## Start Here

**New to this project?** → Read `QUICKSTART.md`

**Ready to deploy?** → Read `DEPLOYMENT.md`

**Want full details?** → Read `MIGRATION-SUMMARY.md`

## Document Guide

### For Getting Started Quickly

- **QUICKSTART.md** - Commands to preview and deploy (< 5 minutes)
- **DEPLOYMENT.md** - Step-by-step GitHub Pages deployment guide

### For Understanding the Project

- **README.md** - Project overview, design decisions, TODO list
- **MIGRATION-SUMMARY.md** - Complete migration report with technical details
- **INDEX.md** - This file (documentation map)

### For Development

- **_config.yml** - Site configuration (title, URL, navigation)
- **Gemfile** - Ruby dependencies
- **_layouts/** - Page templates (home, page, post)
- **_posts/** - Blog posts (3 migrated from Wix)
- **_sass/custom.scss** - Custom styles (from NMTE template)
- **assets/css/style.scss** - Main stylesheet

### Content Files

- **index.md** - Homepage (news feed)
- **bio.md** - Professional biography
- **blog.md** - Blog archive page
- **contact.md** - Contact information

## Quick Reference

**Preview locally:**
```bash
cd ~/code/charlestbetz.com
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve
```

**Build site:**
```bash
bundle exec jekyll build
```

**Add blog post:**
```bash
# Create: _posts/YYYY-MM-DD-title.md
# Format:
---
layout: post
title: "Post Title"
date: 2026-04-15
categories: [compositions]
---
Content here...
```

**Update and deploy:**
```bash
git add .
git commit -m "Update description"
git push
```

## Status

✅ Migration complete  
✅ Site builds successfully  
✅ All content migrated  
✅ Documentation complete  
🚀 Ready for deployment

---

**Created:** 2026-03-29  
**Migration time:** ~2 hours  
**Template source:** ~/code/nmte.org  
**Original site:** https://www.charlestbetz.com (Wix)
