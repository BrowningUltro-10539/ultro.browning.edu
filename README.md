# Ultro Robotics Website

This repository houses the in-development redesigned website for Ultro Robotics! Our legacy codebase can be found [here](/public/old/).

Our website uses the [Astro](https://astro.build/) web framework, as well as [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/) for styling.

## Project Structure

```text
/
├── public/
│   └── { non-processed public assets }
├── src/
│   ├── assets/
│   │   └── { buildtime-processed assets }
│   ├── components/
│   │   └── { custom components used }
│   ├── layouts/
│   │   └── { base layouts used across different types of pages }
│   ├── pages/
│   │   └── { individual pages }
│   └── styles/
│       └── { global css properties, tailwind/daisyui config }
└── package.json
```
# TODO
- [ ] finish building content pages
- [ ] convert navbar to use CSS Transitions instead of JS
- [ ] footer
- [ ] replace logos with transparent SVG assets
- [ ] mobile support
- [ ] View Transition API
- [ ] accessibility: respect reduced motion, etc..
- [ ] ~~get it backwards compatible enough to run on a 2DS~~
