# React Editorial Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the Bootstrap static site with a Vite + React editorial-dark portfolio that still deploys to GitHub Pages at `/personal-website/`.

**Architecture:** One SPA: sticky `Rail` + scrolling `Main`. Copy lives in `src/content/` data modules. CSS custom properties (ink, cream, mute, line, brass) drive the look. Intersection Observer sets the active rail link. No Tailwind, no UI kit, no light mode.

**Tech Stack:** Vite, React 18 (JavaScript), CSS, GitHub Pages (`base: '/personal-website/'`).

## Global Constraints

- Visual: editorial dark; ink `#0b0d10`, cream `#ece8e1`, mute `#9a958c` / `#b8b3aa`, line `#2a2d32`, brass `#c9a227`
- Layout: sticky left rail ~240px desktop; rail becomes a top bar on small screens
- Type: serif for name and headlines; sans for body, nav, meta (Google Fonts: Instrument Serif + DM Sans)
- Content: intro, about, experience, skills, projects; contact only in the rail
- Theme: dark only — no light-mode toggle
- Hosting: GitHub Pages; Vite `base` must be `'/personal-website/'`
- Stack: Vite + React (JavaScript) + CSS custom properties. No Tailwind, no component library
- Tests: no unit-test suite in this slice; verify with `npm run build` and `npm run preview`
- Resume filename: `Danish_Agarwal's_Resume.pdf` unless renamed together with `profile.js`
- Portrait `alt`: meaningful (not empty)
- External links: `target="_blank"` and `rel="noreferrer"`
- Out of scope: light mode, contact form, Next.js, new projects beyond the six GitHub repos, blog

## File map

| Path | Responsibility |
| ---- | -------------- |
| `package.json` | Scripts and React/Vite deps |
| `vite.config.js` | `base: '/personal-website/'` |
| `index.html` | Vite HTML shell, fonts |
| `.gitignore` | `node_modules/`, `dist/`, `.superpowers/` |
| `src/main.jsx` | React mount |
| `src/App.jsx` | Rail + Main, active section |
| `src/styles/tokens.css` | Color, type, spacing tokens |
| `src/styles/global.css` | Reset, layout, section/card styles |
| `src/layout/Rail.jsx` | Name, nav, resume, socials |
| `src/sections/Intro.jsx` | Headline |
| `src/sections/About.jsx` | Photo + bio |
| `src/sections/Experience.jsx` | Timeline from data |
| `src/sections/Skills.jsx` | Skill list from data |
| `src/sections/Projects.jsx` | Project cards from data |
| `src/content/profile.js` | Name, role, headline, bio, photo, resume, socials, nav ids |
| `src/content/experience.js` | Jobs |
| `src/content/skills.js` | Skill strings |
| `src/content/projects.js` | Six repos |
| `public/pic.jpg` | Portrait (move from repo root) |
| `public/Danish_Agarwal's_Resume.pdf` | Resume (move from repo root if present) |
| `.github/workflows/pages.yml` | Build and publish `dist` to GitHub Pages |
| `README.md` | Install / dev / build |

Delete after Vite is running: root `style.css`, `script.js`, and the old Bootstrap `index.html` (replaced by the Vite shell).

---

### Task 1: Vite scaffold, assets, gitignore

**Files:**
- Create: `package.json`, `vite.config.js`, `index.html`, `src/main.jsx`, `src/App.jsx`, `.gitignore`
- Modify: move `pic.jpg` and `Danish_Agarwal's_Resume.pdf` into `public/` if they exist at repo root
- Delete: `style.css`, `script.js` (old site CSS/JS)

**Interfaces:**
- Consumes: nothing
- Produces: Vite app that mounts `App` and builds with `base: '/personal-website/'`

- [ ] **Step 1: Write `.gitignore`**

```
node_modules/
dist/
.superpowers/
```

- [ ] **Step 2: Write `package.json`**

```json
{
  "name": "personal-website",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "vite": "^5.4.11"
  }
}
```

- [ ] **Step 3: Write `vite.config.js`**

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/personal-website/'
});
```

- [ ] **Step 4: Write `index.html` at repo root (replace the Bootstrap file)**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Danish Agarwal</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=Instrument+Serif:ital@0;1&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 5: Write `src/main.jsx` and a placeholder `src/App.jsx`**

`src/main.jsx`:

```jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/tokens.css';
import './styles/global.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

`src/App.jsx` (temporary; Task 4 replaces this):

```jsx
export default function App() {
  return <p>Danish Agarwal</p>;
}
```

Create empty `src/styles/tokens.css` and `src/styles/global.css` so the imports do not fail (filled in Task 2).

- [ ] **Step 6: Move assets and delete legacy files**

- If `pic.jpg` exists at repo root, move it to `public/pic.jpg`
- If `Danish_Agarwal's_Resume.pdf` exists at repo root, move it to `public/Danish_Agarwal's_Resume.pdf`
- Delete `style.css` and `script.js`

- [ ] **Step 7: Install and verify build**

Run:

```
npm install
npm run build
```

Expected: `dist/` is created; no errors about missing `src/main.jsx`.

- [ ] **Step 8: Commit**

```
git add package.json package-lock.json vite.config.js index.html src .gitignore public
git rm --ignore-unmatch style.css script.js
git commit -m "chore: scaffold Vite React app for GitHub Pages"
```

---

### Task 2: Design tokens and global CSS

**Files:**
- Create/overwrite: `src/styles/tokens.css`, `src/styles/global.css`

**Interfaces:**
- Consumes: Task 1 imports of these two files
- Produces: CSS variables `--ink`, `--cream`, `--mute`, `--mute-2`, `--line`, `--brass`, `--serif`, `--sans`, `--rail-width`; layout classes `.shell`, `.rail`, `.main`, `.section`, `.eyebrow`, `.project-grid`, `.project-card`

- [ ] **Step 1: Write `src/styles/tokens.css`**

```css
:root {
  --ink: #0b0d10;
  --cream: #ece8e1;
  --mute: #9a958c;
  --mute-2: #b8b3aa;
  --line: #2a2d32;
  --brass: #c9a227;
  --serif: "Instrument Serif", Georgia, serif;
  --sans: "DM Sans", system-ui, sans-serif;
  --rail-width: 240px;
  --space: 1.5rem;
}
```

- [ ] **Step 2: Write `src/styles/global.css`**

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--ink);
  color: var(--cream);
  font-family: var(--sans);
  font-size: 1rem;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

a:hover {
  color: var(--brass);
}

.shell {
  display: flex;
  min-height: 100vh;
}

.rail {
  position: sticky;
  top: 0;
  width: var(--rail-width);
  flex-shrink: 0;
  height: 100vh;
  padding: 2rem 1.5rem;
  border-right: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.rail-name {
  font-family: var(--serif);
  font-size: 2rem;
  line-height: 1.05;
  font-weight: 400;
  margin: 0;
}

.rail-role {
  margin: 0.75rem 0 0;
  font-size: 0.7rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--brass);
}

.rail-nav {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 2.5rem;
}

.rail-nav a {
  font-size: 0.7rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--mute);
}

.rail-nav a.is-active {
  color: var(--cream);
}

.rail-footer {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: var(--mute);
}

.main {
  flex: 1;
  padding: 3rem 3.5rem 6rem;
  max-width: 52rem;
}

.section {
  padding: 2.5rem 0;
  border-top: 1px solid var(--line);
}

.section:first-child {
  border-top: none;
  padding-top: 0;
}

.eyebrow {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--brass);
  margin: 0 0 0.75rem;
}

.headline {
  font-family: var(--serif);
  font-size: 2.4rem;
  line-height: 1.15;
  font-weight: 400;
  margin: 0 0 1rem;
}

.lede {
  color: var(--mute-2);
  max-width: 36rem;
  margin: 0;
}

.about {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.5rem;
  align-items: start;
}

.about img {
  width: 100%;
  display: block;
  filter: grayscale(0.2);
}

.experience-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 0.75rem;
}

.experience-period {
  color: var(--mute);
  white-space: nowrap;
}

.skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 1.25rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.75rem;
}

.project-card {
  border: 1px solid var(--line);
  padding: 1rem;
  transition: transform 160ms ease, border-color 160ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: var(--brass);
}

.project-card h3 {
  font-family: var(--serif);
  font-size: 1.2rem;
  font-weight: 400;
  margin: 0 0 0.4rem;
}

.project-card p {
  margin: 0 0 0.75rem;
  color: var(--mute-2);
  font-size: 0.9rem;
}

.project-card a {
  font-size: 0.7rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brass);
}

@media (max-width: 800px) {
  .shell {
    flex-direction: column;
  }

  .rail {
    position: sticky;
    top: 0;
    width: 100%;
    height: auto;
    border-right: none;
    border-bottom: 1px solid var(--line);
    background: var(--ink);
    z-index: 10;
  }

  .rail-nav {
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .main {
    padding: 2rem 1.25rem 4rem;
  }

  .headline {
    font-size: 1.8rem;
  }

  .about {
    grid-template-columns: 1fr;
  }

  .project-grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: Verify App still builds**

Run: `npm run build`  
Expected: success.

- [ ] **Step 4: Commit**

```
git add src/styles/tokens.css src/styles/global.css
git commit -m "style: add editorial dark tokens and layout CSS"
```

---

### Task 3: Content modules

**Files:**
- Create: `src/content/profile.js`, `src/content/experience.js`, `src/content/skills.js`, `src/content/projects.js`

**Interfaces:**
- Consumes: `import.meta.env.BASE_URL` for public assets
- Produces:
  - `profile`: `{ firstName, lastName, role, headline, lede, bio, photoSrc, photoAlt, resumeHref, linkedin, github, email }`
  - `navItems`: `[{ id, label }, ...]` with ids `about`, `experience`, `skills`, `projects`
  - `experience`: `[{ company, role, period, summary }, ...]`
  - `skills`: `string[]`
  - `projects`: `[{ title, description, repoUrl }, ...]` (six items)

- [ ] **Step 1: Write `src/content/profile.js`**

```js
const base = import.meta.env.BASE_URL;

export const profile = {
  firstName: 'Danish',
  lastName: 'Agarwal',
  role: 'Frontend Engineer 2',
  headline: 'Software developer building clear, fast product UI.',
  lede: 'ConnectWise · React, JavaScript, Python, SQL · IT engineering, D.Y. Patil (CGPA 8.54).',
  bio: 'I am a software developer with experience in React, JavaScript, Python, and SQL. I studied IT engineering at D.Y. Patil University (CGPA 8.54) and currently work at ConnectWise as a Frontend Engineer 2. I like learning new tools and shipping in a fast-paced product environment.',
  photoSrc: `${base}pic.jpg`,
  photoAlt: 'Portrait of Danish Agarwal',
  resumeHref: `${base}Danish_Agarwal's_Resume.pdf`,
  linkedin: 'https://www.linkedin.com/in/danishagarwal/',
  github: 'https://github.com/danishagarwal',
  email: 'danishagarwal9@gmail.com'
};

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' }
];
```

- [ ] **Step 2: Write `src/content/experience.js`**

```js
export const experience = [
  {
    company: 'ConnectWise',
    role: 'Frontend Engineer 2',
    period: 'Present',
    summary:
      'Building product UI in React and shipping features in a fast-paced environment.'
  }
];
```

- [ ] **Step 3: Write `src/content/skills.js`**

```js
export const skills = ['React', 'JavaScript', 'Python', 'SQL', 'CSS'];
```

- [ ] **Step 4: Write `src/content/projects.js`**

```js
export const projects = [
  {
    title: 'NetflixGPT',
    description:
      'A Netflix clone with GPT search so people can find movies with prompts like “Bollywood funny movies.”',
    repoUrl: 'https://github.com/danishagarwal/Netflix-Gpt'
  },
  {
    title: "Dan's Food Town",
    description:
      'Swiggy-like app built with a custom React setup, using Parcel instead of webpack.',
    repoUrl: 'https://github.com/danishagarwal/ReactJS/tree/master/Coding'
  },
  {
    title: 'Team Management',
    description:
      'Admin portal to create, read, update, and delete teams, backed by Flask.',
    repoUrl: 'https://github.com/danishagarwal/Manage-Teams'
  },
  {
    title: 'YouTube',
    description:
      'YouTube clone with debounced search and Redux for sidebar state.',
    repoUrl: 'https://github.com/danishagarwal/Youtube'
  },
  {
    title: 'NotesJS',
    description: 'Notes app in plain JavaScript: create and delete notes.',
    repoUrl: 'https://github.com/danishagarwal/NotesJS'
  },
  {
    title: 'Corona Cases',
    description: 'Python program to track coronavirus cases by country.',
    repoUrl: 'https://github.com/danishagarwal/Corona-Cases-Info'
  }
];
```

- [ ] **Step 5: Commit**

```
git add src/content
git commit -m "content: add profile, experience, skills, and projects data"
```

---

### Task 4: Rail, sections, App, active nav

**Files:**
- Create: `src/layout/Rail.jsx`, `src/sections/Intro.jsx`, `src/sections/About.jsx`, `src/sections/Experience.jsx`, `src/sections/Skills.jsx`, `src/sections/Projects.jsx`
- Overwrite: `src/App.jsx`

**Interfaces:**
- Consumes: `profile`, `navItems`, `experience`, `skills`, `projects` from Task 3; CSS classes from Task 2
- Produces: full page. `Rail` props: `{ profile, navItems, activeId }`. Section roots use ids `intro`, `about`, `experience`, `skills`, `projects`. Active rail link uses class `is-active`.

- [ ] **Step 1: Write `src/layout/Rail.jsx`**

```jsx
export default function Rail({ profile, navItems, activeId }) {
  return (
    <aside className="rail">
      <div>
        <h1 className="rail-name">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>
        <p className="rail-role">{profile.role}</p>
        <nav className="rail-nav" aria-label="Sections">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'is-active' : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="rail-footer">
        <a href={profile.resumeHref} download>
          Resume
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </aside>
  );
}
```

- [ ] **Step 2: Write section components**

`src/sections/Intro.jsx`:

```jsx
export default function Intro({ profile }) {
  return (
    <section className="section" id="intro">
      <p className="eyebrow">Intro</p>
      <h2 className="headline">{profile.headline}</h2>
      <p className="lede">{profile.lede}</p>
    </section>
  );
}
```

`src/sections/About.jsx`:

```jsx
export default function About({ profile }) {
  return (
    <section className="section" id="about">
      <p className="eyebrow">About</p>
      <div className="about">
        <img src={profile.photoSrc} alt={profile.photoAlt} />
        <p>{profile.bio}</p>
      </div>
    </section>
  );
}
```

`src/sections/Experience.jsx`:

```jsx
export default function Experience({ items }) {
  return (
    <section className="section" id="experience">
      <p className="eyebrow">Experience</p>
      {items.map((job) => (
        <article key={`${job.company}-${job.role}`}>
          <div className="experience-row">
            <strong>
              {job.company} — {job.role}
            </strong>
            <span className="experience-period">{job.period}</span>
          </div>
          <p className="lede">{job.summary}</p>
        </article>
      ))}
    </section>
  );
}
```

`src/sections/Skills.jsx`:

```jsx
export default function Skills({ items }) {
  return (
    <section className="section" id="skills">
      <p className="eyebrow">Skills</p>
      <ul className="skills">
        {items.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
```

`src/sections/Projects.jsx`:

```jsx
export default function Projects({ items }) {
  return (
    <section className="section" id="projects">
      <p className="eyebrow">Projects</p>
      <div className="project-grid">
        {items.map((project) => (
          <article className="project-card" key={project.repoUrl}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.repoUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write `src/App.jsx` with Intersection Observer**

```jsx
import { useEffect, useState } from 'react';
import Rail from './layout/Rail.jsx';
import Intro from './sections/Intro.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import { navItems, profile } from './content/profile.js';
import { experience } from './content/experience.js';
import { skills } from './content/skills.js';
import { projects } from './content/projects.js';

export default function App() {
  const [activeId, setActiveId] = useState('about');

  useEffect(() => {
    const ids = navItems.map((item) => item.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: '-20% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="shell">
      <Rail profile={profile} navItems={navItems} activeId={activeId} />
      <main className="main">
        <Intro profile={profile} />
        <About profile={profile} />
        <Experience items={experience} />
        <Skills items={skills} />
        <Projects items={projects} />
      </main>
    </div>
  );
}
```

- [ ] **Step 4: Verify**

Run:

```
npm run build
npm run preview
```

Expected: preview serves the site. Check desktop rail, mobile top bar (narrow the window), all six project cards, resume link, LinkedIn/GitHub/email, portrait `alt`, no light-mode control.

- [ ] **Step 5: Commit**

```
git add src/App.jsx src/layout src/sections
git commit -m "feat: add editorial rail layout and portfolio sections"
```

---

### Task 5: GitHub Pages workflow and README

**Files:**
- Create: `.github/workflows/pages.yml`
- Overwrite: `README.md`

**Interfaces:**
- Consumes: `npm run build` output in `dist/`
- Produces: workflow that publishes Pages from `dist`; README with install/dev/build

- [ ] **Step 1: Write `.github/workflows/pages.yml`**

```yaml
name: Deploy GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Write `README.md`**

Use this exact file body:

~~~~markdown
# Danish Agarwal

Personal site: https://danishagarwal.github.io/personal-website/

## Local

    npm install
    npm run dev

## Build

    npm run build
    npm run preview

GitHub Pages is deployed from `dist/` via `.github/workflows/pages.yml` on push to `main`. In the repo Settings → Pages, set Source to **GitHub Actions**.
~~~~

- [ ] **Step 3: Verify local build one last time**

Run: `npm run build`  
Expected: `dist/index.html` and hashed assets; asset paths prefixed with `/personal-website/`.

- [ ] **Step 4: Commit**

```
git add .github/workflows/pages.yml README.md
git commit -m "ci: deploy Vite dist to GitHub Pages"
```

---

## Spec coverage (self-review)

| Spec item | Task |
| --------- | ---- |
| Vite + React JS, no Tailwind/UI kit | 1 |
| `base: '/personal-website/'` | 1 |
| Tokens ink/cream/mute/line/brass | 2 |
| Serif + sans | 1 fonts, 2 tokens |
| Rail + main, mobile top bar | 2, 4 |
| Intro, about, experience, skills, projects | 4 |
| Contact in rail (resume, LinkedIn, GitHub, email) | 4 |
| Dark only | 2 (no toggle) |
| Content data files | 3 |
| Six existing projects | 3 |
| ConnectWise experience seed | 3 |
| Intersection Observer active nav | 4 |
| External `target`/`rel` | 4 |
| Portrait alt | 3, 4 |
| Resume filename | 3 |
| Delete old CSS/JS | 1 |
| README | 5 |
| `.gitignore` including `.superpowers/` | 1 |
| GitHub Pages deploy | 5 |
| No test suite | verification via `npm run build` |
