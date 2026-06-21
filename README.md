# Sumit Kumar — Portfolio

A personal portfolio site built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.
Design direction: a dark, terminal/NOC-dashboard aesthetic — fitting for a backend engineer
who builds telecom network management systems. The hero includes a live-looking "system
status" panel styled after the monitoring dashboards used in network operations.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom design tokens — see `tailwind.config.ts`)
- `next/font` for self-hosted Google Fonts (JetBrains Mono + Inter)
- `lucide-react` for icons

## Running it locally (VS Code)

1. Install [Node.js 18.18+](https://nodejs.org/) (LTS recommended) if you don't have it.
2. Open this folder in VS Code.
3. Open a terminal in VS Code (`` Ctrl+` ``) and run:

   ```bash
   npm install
   npm run dev
   ```

4. Visit `http://localhost:3000` in your browser. The site hot-reloads as you edit files.

To build for production:

```bash
npm run build
npm run start
```

## Project structure

```
sumit-portfolio/
├── public/
│   ├── photo.jpg          # profile photo (used in hero + about page)
│   └── resume.pdf          # downloadable resume (linked from navbar + hero)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # root layout — fonts, metadata, navbar/footer
│   │   ├── page.tsx          # home page
│   │   ├── globals.css       # design tokens, base styles
│   │   ├── projects/page.tsx # full projects archive
│   │   ├── skills/page.tsx   # skills grouped by category
│   │   └── about/page.tsx    # bio, full experience, education, certifications
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── StatusPanel.tsx        # the "system status" signature element
│   │   ├── FeaturedProjects.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ExperienceTimeline.tsx
│   │   └── PageHeader.tsx
│   └── data/
│       ├── site.ts          # name, contact links, status panel content
│       ├── projects.ts      # all project entries
│       ├── experience.ts    # work history + education + certifications
│       └── skills.ts        # skills grouped by category
├── tailwind.config.ts        # color tokens, fonts, custom animations
├── package.json
└── tsconfig.json
```

## Customizing content

All real content lives in `src/data/` — you won't need to touch components to update text:

- **`src/data/site.ts`** — your name, title, location, email, social links, resume/photo paths, and the four rows shown in the hero's status panel.
- **`src/data/projects.ts`** — add/edit/remove project entries. Set `featured: true` on up to 3 projects to surface them on the home page.
- **`src/data/experience.ts`** — work history, education, and certifications.
- **`src/data/skills.ts`** — skill groups and the items inside each.

## Swapping the photo or resume

Replace `public/photo.jpg` and `public/resume.pdf` with your own files (keep the same
filenames, or update the paths in `src/data/site.ts`).

## Color palette

| Token | Hex | Use |
|---|---|---|
| `bg` | `#0a0e0f` | page background |
| `surface` | `#141d20` | cards |
| `elevated` | `#10171a` | hover/raised surfaces |
| `border` / `border-bright` | `#1f2c2f` / `#2c3d40` | dividers |
| `signal` | `#00ffa3` | primary accent (status "online" green) |
| `amber` | `#ffb454` | secondary accent (status "building") |
| `ink` / `muted` / `faint` | `#e7ecec` / `#8aa0a3` / `#54686b` | text hierarchy |

## Deploying

This is a standard Next.js app — deploys cleanly to Vercel, Netlify, or Railway with zero
config. For Vercel: push to GitHub, import the repo at vercel.com, and it auto-detects the
Next.js build.
# portfolio
