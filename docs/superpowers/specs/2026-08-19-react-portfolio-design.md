# React editorial portfolio

**Date:** 2026-08-19  
**Status:** Approved in conversation; awaiting spec review before implementation plan

## Goal

Replace the Bootstrap HTML/CSS/JS personal site with a Vite + React single-page portfolio. Keep GitHub Pages at `/personal-website/`. Visual direction: editorial dark, brass accent, split layout.

## Decisions (locked)

| Topic | Choice |
| ----- | ------ |
| Visual | Editorial dark (ink background, cream type, brass accent) |
| Layout | Sticky left rail + scrolling main; rail becomes a top bar on small screens |
| Palette | Brass (not ice blue, not paper-only) |
| Content | One page: intro, about, experience, skills, projects; contact in the rail |
| Theme | Dark only — no light-mode toggle |
| Hosting | GitHub Pages |
| Stack | Vite + React (JavaScript) + CSS custom properties. No Tailwind, no component library |

## Visual system

- **Ink:** near-black page (`#0b0d10`)
- **Cream:** primary text (`#ece8e1`)
- **Mute:** secondary text and inactive nav (`#9a958c` / `#b8b3aa`)
- **Line:** hairline dividers (`#2a2d32`)
- **Brass:** labels, active nav, links (`#c9a227`)
- **Type:** serif for name and section headlines; system or Google-font sans for body, nav, and meta
- **Motion:** restrained — nav active state, card hover lift, no hero particle effects

## Page structure

**Rail (sticky, ~240px desktop)**

- Name (serif, stacked)
- Role line: Frontend Engineer 2
- In-page nav: About, Experience, Skills, Projects
- Footer of rail: Resume download, LinkedIn, GitHub, email

**Main (scroll)**

1. **Intro** — short headline + one-line positioning
2. **About** — existing photo (`pic.jpg`) + tightened bio (ConnectWise, React/JS/Python/SQL, D.Y. Patil CGPA 8.54)
3. **Experience** — timeline. Seed with ConnectWise Frontend Engineer 2 from current copy. Additional roles can be added in `src/content/experience.js` without layout changes
4. **Skills** — compact list, not icon soup: React, JavaScript, Python, SQL, CSS
5. **Projects** — 2-column grid of the six existing GitHub projects (NetflixGPT, Dan's Food Town, Team Management, YouTube, NotesJS, Corona Cases)

**Mobile:** rail collapses to a compact top bar (name + menu or horizontal links). Same section order.

## Architecture

```
src/
  App.jsx              # Rail + Main composition, active-section tracking
  main.jsx
  styles/
    tokens.css         # colors, type, spacing
    global.css
  layout/
    Rail.jsx
  sections/
    Intro.jsx
    About.jsx
    Experience.jsx
    Skills.jsx
    Projects.jsx
  content/
    profile.js
    experience.js
    skills.js
    projects.js
public/
  pic.jpg
  Danish_Agarwal's_Resume.pdf
```

- Vite `base: '/personal-website/'` so asset URLs work on GitHub Pages.
- Section ids match nav hashes (`#about`, `#experience`, `#skills`, `#projects`).
- Intersection Observer (or scroll position) highlights the active rail link.
- External links: `target="_blank"` and `rel="noreferrer"`.
- Old `index.html`, `style.css`, `script.js` are removed after the Vite app is in place. README is updated with `npm install`, `npm run dev`, `npm run build`.

## Data

Content is data, not JSX copy. Each project: `title`, `description`, `repoUrl`. Each experience: `company`, `role`, `period`, `summary`. Profile: name, role, headline, bio, photo path, resume path, social URLs.

## Deploy

- `npm run build` → `dist/`
- GitHub Pages serves the built site (existing `danishagarwal.github.io/personal-website` URL)
- `.gitignore`: `node_modules/`, `dist/`, `.superpowers/`

## Testing and errors

- No test suite in the first slice (static content site).
- Missing image: meaningful `alt` on the portrait.
- Resume must remain downloadable; keep the existing PDF filename unless we rename it in `public/` and update the content file together.

## Out of scope

- Light mode
- Contact form / backend
- Next.js / Vercel
- New project write-ups beyond the six GitHub repos
- Blog

## Self-review

- No TBD placeholders; ConnectWise is the only experience row until more are added in data.
- Architecture matches the approved visual (rail + main, brass, GitHub Pages).
- Scope is one Vite app and one page — suitable for a single implementation plan.
