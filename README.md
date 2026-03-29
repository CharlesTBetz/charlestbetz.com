# charlestbetz.com - Jekyll Migration

This is the Jekyll-based version of charlestbetz.com, migrated from Wix.

## Design Decisions

### Template Base
- Started from NMTE site structure (~/code/nmte.org)
- Uses Jekyll with minima theme as foundation
- Custom styling adapted for personal composer portfolio

### Structure
- **Homepage**: News feed style with recent updates (chronological)
- **Bio page**: Professional biography
- **Blog**: Archive of compositions and project notes
- **Works** (future): Individual work showcase pages

### Content Migration
Content migrated from Wix site (as of March 2025):
- Homepage news updates (Feb 2024 - Aug 2025)
- Bio page
- Blog posts:
  - River Song: Notes on the Journey (May 2025)
  - Wild and Precious (Feb 2024)
  - IQ: the Musical (Feb 2024)

### Color Scheme
- Adapted NMTE's clean, light theme
- Professional composer aesthetic
- Brand color: #c4a843 (golden)
- Background: white (#ffffff)
- Text: dark gray (#1a1a1a)

### Media Strategy
- YouTube embeds for videos (no local hosting needed)
- Local assets directory for photos/PDFs
- External links preserved from Wix

## Deployment

This site is designed to deploy to GitHub Pages:

```bash
# Create repository at github.com/charlestbetz/charlestbetz.com
git init
git add .
git commit -m "Initial Jekyll migration from Wix"
git remote add origin git@github.com:charlestbetz/charlestbetz.com.git
git push -u origin main
```

Then configure GitHub Pages in repository settings:
- Source: Deploy from a branch
- Branch: main / (root)

Site will be available at: https://charlestbetz.github.io/charlestbetz.com/

For custom domain (charlestbetz.com):
- Add CNAME file with: charlestbetz.com
- Configure DNS A records to GitHub Pages IPs
- Update repository settings with custom domain

## Local Development

```bash
bundle install
bundle exec jekyll serve
```

Visit http://localhost:4000

## TODO
- [ ] Download and add media assets from Wix
- [ ] Create individual work showcase pages
- [ ] Add contact form or contact information
- [ ] Optimize for mobile
- [ ] Add analytics (optional)

## Notes

Built by Kyoshi (OpenClaw subagent) on 2026-03-29.
Template reference: NMTE site at ~/code/nmte.org
