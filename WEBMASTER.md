# charlestbetz.com — Webmaster Notes

## Hosting & Infrastructure
- **Platform:** Jekyll on GitHub Pages
- **Repo:** github.com/CharlesTBetz/charlestbetz.com
- **Domain:** charlestbetz.com, registered at GoDaddy
- **DNS:** GoDaddy — 4 A records to GitHub Pages IPs + CNAME www → CharlesTBetz.github.io
- **HTTPS:** Enforced via GitHub Pages (Let's Encrypt)
- **Deploy:** Push to main → GitHub Pages builds automatically

## Local Development
```
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle exec jekyll serve --livereload
# Visit http://localhost:4000/
```

## Design System
- **Fonts:** Fraunces (display serif) + Inter (body sans) via Google Fonts
- **Accent color:** Ink blue #1a2f4a
- **Background:** Warm off-white #fafaf7
- **Card backgrounds:** #f4f1e8
- **No theme** — fully custom sass in `_sass/`
- **Favicon:** CB monogram, Fraunces italic, ink blue on transparent

## Content Model

### Posts (`_posts/`)
Every piece of content on the site is a post. Front matter controls where it appears:

| Field | Values | Purpose |
|-------|--------|---------|
| `card_type` | song, composition, show, project, blog | Determines which menu page shows it |
| `front_page` | true/false | Appears on homepage stream |
| `pinned` | true/false | Sticks to top of homepage. **Should be only one.** Flag if multiple are pinned. |
| `youtube_id` | YouTube video ID | Embeds video on card and detail page. Leave absent (not empty string) if no video. |
| `song_meta` | e.g. "Choral · SATB, piano · 8 min" | Metadata line on song/composition cards |
| `project_name` | Project title | Links song to its project |
| `project_url` | e.g. /projects/five-minutes-on-the-low-road/ | URL for project link |
| `image` | Asset path | Card image (for shows with photos) |
| `upcoming` | true/false | On Shows page, separates upcoming vs past |

### Projects (`_projects/`)
Jekyll collection. Each project has its own detail page. Songs/posts with matching `project_name` auto-appear on the project page.

| Field | Purpose |
|-------|---------|
| `title` | Project name |
| `status` | "In development", "Premiered 2023", "Complete", "Ongoing" |
| `logline` | One-line description |
| `collaborators_text` | Credits line |
| `order` | Sort order on Projects page (lower = first) |

### Current Projects (order)
1. Five Minutes On The Low Road
2. IQ: The Musical
3. Escape From Babylon
4. The Womanless Wedding
10. NMI Prompts 2023-24
11. Odds and Ends

### Pages
Menu pages are HTML files that filter posts by `card_type`:
- `projects.html` — card grid from `_projects/` collection
- `shows.html` — card stream filtered by `card_type: show`
- `compositions.html` — card grid filtered by `card_type: composition`
- `songs.html` — card stream of all songs + compositions
- `blog.html` — card stream filtered by `card_type: blog`
- `gallery.md` — manual markdown page
- `bio.md` — manual markdown page
- `contact.md` — manual markdown page

## Common Tasks

### Add a new song
Create `_posts/YYYY-MM-DD-slug.md`:
```yaml
---
layout: post
title: "Song Title"
date: YYYY-MM-DD
card_type: song
front_page: true
youtube_id: "VIDEO_ID"
project_name: "Project Name"
project_url: /projects/project-slug/
song_meta: "Musical theater · Solo voice"
excerpt: "One-line description."
---

Narrative text about the song.
```

### Add a new show
Same as above but `card_type: show`. Add `image:` for a photo. Use `upcoming: true` for future events.

### Pin/unpin a card
Set `pinned: true` on the post. **Unpin the previous one** (set to false or remove the field). Only one pin at a time.

### Add a new project
Create `_projects/slug.md`. Set `order:` to control position on the Projects page.

### Add a photo to gallery
Edit `gallery.md` directly. Use markdown image syntax with `relative_url` filter.

## Changelog

### 2026-05-02 — Site launch
- Rebuilt from Wix to Jekyll with custom card-based design
- Fraunces + Inter typography, ink blue accent, warm off-white
- 5 projects: Five Minutes On The Low Road, IQ, Escape From Babylon, Womanless Wedding, NMI Prompts
- Plus Odds and Ends for standalone songs
- 25 posts (songs, compositions, shows, blog entries)
- All songs with YouTube embeds
- Gallery with Rough Cuts performance photo
- CB monogram favicon
- Custom domain configured, HTTPS enforced
- DNS moved from Wix to GoDaddy → GitHub Pages

### Pre-launch (2026-03-29)
- Initial Wix content migration by Claude Desktop
- Card-based homepage conversion
- Content inventory from Wix site
