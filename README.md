# Subhankar Biswas — Data Engineering Portfolio

A responsive React + Vite + Tailwind CSS portfolio for showcasing data engineering, analytics, AI/ML, NLP and research projects.

## Stack

- React + Vite
- Tailwind CSS v4
- Lucide React
- GitHub Pages-ready static build

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Personalize before publishing

1. Replace `public/resume.pdf` with your latest CV. The repository includes a `.gitkeep` placeholder because the PDF itself is intentionally not included.
2. Update the LinkedIn URL in `src/components/Navbar.jsx`, `src/components/Hero.jsx`, and `src/components/Footer.jsx`.
3. Update the email address in `src/components/Footer.jsx`.
4. Review every GitHub URL in `src/data/projects.js` and replace placeholder profile links with the exact repository where applicable.
5. Replace or add project screenshots under `public/projects/` if desired.
6. Update education/experience dates and verified professional experience before publication.

## GitHub Pages

This project uses `base: './'` in `vite.config.js`, which keeps asset paths compatible with a repository project page.

### Option A — build locally and publish `dist`

```bash
npm install
npm run build
```

Then publish the generated `dist/` directory through GitHub Pages.

### Option B — GitHub Actions

Create `.github/workflows/deploy.yml` using the workflow supplied in this repository. Push to `main`, then enable GitHub Pages with **GitHub Actions** as the source in repository Settings → Pages.

Your project URL will normally be:

`https://YOUR_USERNAME.github.io/subhankar-portfolio/`

## Notes

- The portfolio does not invent employment history; the Experience section clearly separates project experience from professional employment.
- Project descriptions are based on the projects previously discussed, but repository URLs should be verified before publishing.
