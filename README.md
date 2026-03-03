# My-Portfolio

Modern Pro portfolio for Don Cornelius B, built with Next.js 15 (App Router), Tailwind CSS, and Framer Motion.

## Stack

- Next.js 15 App Router
- React 19
- Tailwind CSS
- Framer Motion
- GitHub Actions (build + GitHub Pages deploy)

## Highlights

- Deep charcoal and midnight-blue glassmorphism UI
- Hero with creative technologist positioning
- Agnostic project grid with hover tech tags
- Project Deep Dive modal with architecture diagram
- System Logs terminal-style technical overlay
- Skill matrix grouped into glass cards
- Interactive vertical journey timeline
- Tech Stack Orbit animation
- Live deployment status badge in footer

## Local Development

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production export:

```bash
npm run build
```

## Deployment

Deployment is automated via [.github/workflows/main.yml](.github/workflows/main.yml).

On every push to `main`, GitHub Actions:

1. Installs dependencies
2. Builds static export (`out/`)
3. Deploys to GitHub Pages
