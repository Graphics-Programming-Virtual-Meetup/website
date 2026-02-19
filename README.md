# README

Website for Graphics Programming Virtual Meetup. See it live at [gpvm.org](https://gpvm.org/).

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## Project Structure

Below is the rough folder structure of the repository

```text
/
├── public/ # assets not require preprocessing (e.g. favicon)
├── src
│   ├── layouts # Defines UI structures shared by one or more pages
│   ├── pages # Pages routes
│   └── styles # Global CSS styles
└── package.json
```
