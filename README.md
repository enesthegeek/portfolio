# Enes Soyturk — Portfolio

Personal portfolio website built with React and Vite. It covers who I am, what I can build, and the kind of work I'm looking for — from reactor physics simulations to production web apps.

Live site: [enesthegeek.github.io/portfolio](https://enesthegeek.github.io/portfolio) *(update link once deployed)*

---

## What's inside

The site is a single-page app with the following sections:

- **Hero** — quick intro with availability status and social links
- **About** — background, what I do, and why the nuclear + software combination actually makes sense
- **Skills** — grouped by domain: frontend, backend, scientific Python, nuclear simulation tools, and infrastructure
- **Projects** — four highlighted projects ranging from a neutron flux dashboard to a SaaS finance app
- **Process** — how I approach a project from first conversation to delivery
- **Contact** — ways to reach me

Sections animate in as you scroll, and there's a dark/light theme toggle in the nav.

---

## Tech stack

| Layer | Tools |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Animations | CSS transitions + custom `useInView` hook |
| Theming | Custom `useTheme` hook with `data-theme` attribute |
| Linting | ESLint with react-hooks and react-refresh plugins |

No UI library, no CSS framework — everything is hand-written CSS to keep the bundle small and the design fully controlled.

---

## Getting started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

Node 18+ is recommended.

---

## Project structure

```
src/
  components/    # one file per section (Hero, About, Skills, ...)
  hooks/         # useInView (scroll animation), useTheme (dark/light)
  App.jsx        # layout shell — assembles all sections
  App.css        # all styles
  index.css      # css reset and variables
```

---

## Contact

If you want to work together or just have a question, reach out through the contact form on the site or find me on LinkedIn and GitHub — links are in the footer.
