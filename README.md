# 📦 Parcel Starter Boilerplate

The template is a basic framework for developing static web projects using the Parcel builder.

[![Parcel](https://img.shields.io/badge/Parcel-^2.11.0-orange)](https://parceljs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-^5.3.3-blue)](https://www.typescriptlang.org/)
[![ESLint](https://img.shields.io/badge/ESLint-^8.2.0-brightgreen)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-^3.2.5-blueviolet)](https://prettier.io/)
[![PostCSS](https://img.shields.io/badge/PostCSS-^8.4.35-blue)](https://postcss.org/)
[![PostHTML](https://img.shields.io/badge/PostHTML-^0.16.6-green)](https://posthtml.org/)

## Template features

- [Parcel](https://parceljs.org/): Uses Parcel to build your project quickly and efficiently.
- ES6 & [TypeScript](https://www.typescriptlang.org/): The supports ECMAScript 6 (ES6) alongside TypeScript, providing a powerful environment for development with modern JavaScript features and static typing.
- [SCSS](https://sass-lang.com/): Eenhanced CSS, allowing the use of variables, nesting, mixins, and other features.
- [ESLint](https://eslint.org/) and [Stylelint](https://stylelint.io/): Code Quality Tools, supports to ensure code quality according best practices.
- [Prettier](https://prettier.io/): Code Formatting Tool, supports for code formatting, ensuring a consistent style.
- [PostCSS](https://postcss.org/) and [PostHTML](https://posthtml.org/): The Tools for code conversion using plugins that perform various CSS and HTML processing operations:
  - [postcss-uncss](https://github.com/uncss/postcss-uncss): Removes unused styles.
  - [posthtml-attrs-sorter](https://github.com/mrmlnc/posthtml-attrs-sorter): Sorts HTML attributes.
  - [posthtml-modules](https://github.com/posthtml/posthtml-modules): Imports and processes HTML modules.

## Features of the template structure:

    .
    ├── src                 # Source files
    │   ├── scripts         # Script files
    │   ├── styles          # Style files
    │   └── templates       # Part of HTML files
    ├── dist                # Compiled files.
    ├── assets              # Asset files
    ├── public              # Public files
    └── ...

- dist/: This directory is created only after the project is built, and each time a build is performed, the previous directory is permanently replaced.
- assets/: The build tool adds only those files specified in the code to the build from this directory.
- public/: When building a project, all contents of the this directory will be automatically copied to the root of the built project.

## Before you get started

Before you get started, it is recommended to do a little cleanup of the template from the demo data.

#### Here is the list of files you can safely delete:

- src/images/example.png
- src/scripts/modules/example.ts
- src/styles/components/example.scss
- src/templates/example.html
- assets/favicon.ico

#### Also remove all mention of example data from:

- src/scripts/main.ts
- src/styles/main.scss
- src/index.html

## Run Locally

1. Clone the repo: `git clone https://github.com/mrtoxas/parcel-starter-boilerplate`
2. Go to your project folder from your terminal: `cd parcel-starter-boilerplate`
3. Install dependencies:
   - Using npm: `npm install`
   - Using yarn: `yarn install`
4. After installation, run:
   - Using npm: `npm run start`
   - Using yarn: `yarn start`
5. It will open your browser: [http://localhost:1234](http://localhost:1234)

## Build

To build the project, run:

- Using npm: `npm run build`
- Using yarn: `yarn build`

After running the build command, the 'dist' directory will be created in the root directory of your project.

## Other scripts

To run these scripts, use `npm run script_name` or `yarn script_name`:

- `clear`: Deleting temporary files and directories.
- `fix:all`: Running scripts to fix syntax and style errors in code.
- `lint:scripts`: Checking the syntax of TypeScript files with ESLint.
- `lint:scripts:fix`: Fixing syntax errors in TypeScript files with ESLint.
- `lint:styles`: Checking the syntax of SCSS files with Stylelint.
- `lint:styles:fix`: Fixing syntax errors in SCSS files.
- `prettier:scripts`: Checking the formatting of TypeScript files with Prettier.
- `prettier:scripts:fix`: Fixing TypeScript file formatting with Prettier.
- `prettier:styles`: Checking the formatting of SCSS files with Prettier.
- `prettier:styles:fix`: Fixing SCSS file formatting with Prettier.

## Deploy to Hosting & Fork to a New Repository

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/mrtoxas/parcel-starter-boilerplate)

[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/mrtoxas/parcel-starter-boilerplate)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/mrtoxas/parcel-starter-boilerplate)
