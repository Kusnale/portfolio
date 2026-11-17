# Shruti Kusnale — Nova-inspired Portfolio

A responsive, single-page React + Vite portfolio rebuilt from scratch with a visual direction based on the Nova Astro reference: warm off-white canvas, charcoal typography, muted sand accents, editorial spacing, organic hero image mask, large project imagery, numbered service cards, FAQ accordion and a resume-focused contact section.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- VS Code

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```
The production site is generated in `dist/`.

## Personalize the portfolio
1. Open `src/siteData.js`.
2. Replace the email, social URLs, intro, about text, skills, education and project content with accurate information.
3. Replace the sample images in `src/App.jsx` and `src/siteData.js` with your own portrait and project screenshots.
4. Put your resume PDF in `public/` and name it exactly `Shruti-Kusnale-Resume.pdf` (or change `profile.resume` in `src/siteData.js`).
5. Replace the sample project URLs with live project URLs.

## Notes
- The contact email uses a `mailto:` link. It opens the visitor's email app; it does not send messages through a backend.
- The project cards and content are sample placeholders until replaced with your actual work.
- Google Fonts and remote Unsplash images require an internet connection.
- This is an original implementation inspired by the reference's layout and visual language, not copied proprietary template source.
