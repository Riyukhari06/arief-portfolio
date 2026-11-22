# Arief Riyukhari — Portfolio

A single-page, responsive portfolio built with **React + TypeScript + Vite +
Tailwind CSS**, designed to deploy cleanly to **GitHub Pages**.

## Stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS 3
- `gh-pages` for one-command deployment

## Project structure

```
arief-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf            # ← add your own resume PDF here
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Contact.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── package.json
└── README.md
```

## 1. Local setup

Requires Node.js 18+ and npm.

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check + production build (outputs to ./dist)
npm run build

# preview the production build locally
npm run preview
```

## 2. Customize before deploying

- **Profile photo**: `Hero.tsx` currently uses an initials placeholder
  (`AR`) instead of a photo. Swap the placeholder `<div>` for an `<img>` tag
  pointing at a photo placed in `public/`.
- **Resume**: drop your PDF at `public/resume.pdf` — the "Download Resume"
  button in `Contact.tsx` already links to `/resume.pdf`.
- **Contact form**: the form currently opens the visitor's email client via
  a `mailto:` link (no backend required). If you'd rather receive
  submissions directly, swap `handleSubmit` in `Contact.tsx` for a call to
  a form service (e.g. Formspree) or your own API/Cloudflare Worker
  endpoint.
- **Links**: update the GitHub, LinkedIn, and email addresses in
  `Contact.tsx`, and the "View Project" links in `Projects.tsx`.

## 3. Deploy to GitHub Pages

This repo is set up to deploy via the `gh-pages` npm package, which pushes
the built `dist/` folder to a `gh-pages` branch that GitHub Pages serves
from.

### One-time setup

1. Create a GitHub repository (e.g. `arief-portfolio`) and push this
   project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/Riyukhari06/arief-portfolio.git
   git push -u origin main
   ```

2. Set the Vite `base` path in `vite.config.ts` to match your repository
   name **exactly**:

   ```ts
   export default defineConfig({
     plugins: [react()],
     base: '/arief-portfolio/', // must match your repo name
   })
   ```

   > If you're deploying to a user/organization page instead (a repo named
   > `Riyukhari06.github.io`), set `base: '/'` instead.

3. Update `homepage` in `package.json` to match your GitHub Pages URL:

   ```json
   "homepage": "https://Riyukhari06.github.io/arief-portfolio"
   ```

### Deploy

```bash
npm run deploy
```

This runs `predeploy` (`npm run build`) automatically, then publishes the
`dist/` folder to the `gh-pages` branch via the `gh-pages` package.

### Enable Pages in GitHub settings

1. Go to your repo → **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a
   branch**.
3. Select the **`gh-pages`** branch and **`/ (root)`** folder, then save.
4. Your site will be live at the `homepage` URL within a minute or two.

Re-run `npm run deploy` any time you want to publish new changes.

## Design notes

- Palette: indigo primary (`#4F46E5`) on white/neutral-gray, with a small
  amber accent used sparingly for the "edge computing" status chip in the
  hero.
- Type: **Space Grotesk** for display/headings, **Inter** for body copy,
  **JetBrains Mono** for labels, tags, and technical details — reinforcing
  the full-stack/edge-computing identity throughout the page.
- Motion is intentionally restrained: a typewriter effect in the hero, a
  fade-up on load, and subtle hover states on cards and buttons. Reduced-
  motion preferences are respected globally via `prefers-reduced-motion`.
- All interactive elements have a visible focus state for keyboard
  navigation.
