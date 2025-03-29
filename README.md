# Ultro Robotics Website

This repository houses the in-development redesigned website for Ultro Robotics! Our legacy codebase is preserved character-for-character but is divided into two places: CSS and assets [here](/public/old/) and HTML [here](/src/pages/old/). This makes it publicly accessible at <https://ultro.browning.edu/old>.

Our website uses the [Astro](https://astro.build/) web framework, as well as [Tailwind CSS](https://tailwindcss.com/) and [daisyUI](https://daisyui.com/) for styling.

## Project Structure

```text
/
├── public/
│   ├── old/
│   │   └── { old Ultro website assets }
│   └── { non-processed public assets }
├── src/
│   ├── assets/
│   │   └── { buildtime-processed assets }
│   ├── components/
│   │   └── { custom components used }
│   ├── layouts/
│   │   └── { base layouts used across different types of pages }
│   ├── pages/
│   │   ├── old/
│   │   │   └── { old Ultro website HTML }
│   │   └── { individual pages }
│   └── styles/
│       └── { global css properties, tailwind/daisyui config }
└── package.json
```

## License

### Code
The code in this repository is licensed under the GNU General Public License v3.0 or later (GPL-3.0-or-later). See the [LICENSE](LICENSE) file for details.

### Assets & Content
The image assets in this repository, located under `public/**` and `src/assets/*`, documentation, and/or other written content are licensed under the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0), except for third-party assets hosted in `src/assets/sponsors`. See the [LICENSE-CC-BY-SA-4.0](LICENSE-CC-BY-SA-4.0) file for details.

## Copyright
Copyright © Ultro Robotics

# TODO
- [ ] finish building content pages
- [ ] convert navbar to use CSS Transitions instead of JS
- [ ] footer
- [ ] replace logos with transparent SVG assets
- [ ] mobile support
- [ ] View Transition API
- [ ] accessibility: respect reduced motion, etc..
- [ ] ~~get it backwards compatible enough to run on a 2DS~~
