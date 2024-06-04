# MF Doom Tribute Site

## Getting started
This project was bootstrapped with Next.js. Please, read the docs to get up to speed with how pages, routing, server-side functions and more works.

### Run development environment
`yarn dev` or `npm run dev` - starts the development environment with auto reloading and all that good stuff.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Scripts
Besides the development script, there are many more scripts set up:

* `build` - Creates build
* `export` - Creates export
* `deploy` - Creates build and export
* `eslint` - Runs ESLint for all TypeScript files
* `stylelint` - Runs Stylelint for all SCSS files

### Tech stack
#### Next.js
Next Boilerplate uses [Next.js](https://nextjs.org/)  to
* provide SSR and SSG [React.js](https://reactjs.org/). Pages are automatically optimised to deliver the best experience.
* handle routing
* generate builds
* and more

#### TypeScript
This project uses [TypeScript](https://www.typescriptlang.org/) for static checking and documentation. You can view the Typescript config in [./tsconfig.json](./tsconfig.json).

#### Husky, ESLint, StyleLint and LintStaged
This project uses Husky to automatically run ESLint, Stylelint, LintStaged and the test suite for every commit. This is done by using the `precommit` script found in `package.json`. Never run `--no-verify` as you don't want to ignore these settings. If you have an issue with the config, please update the config file of that linter accordingly.

#### GSAP
This project uses GSAP, an animation library, to handle fancy animations on the website. These are mainly tied into the scroll plugin of GSAP to animate based on the scroll position. 
