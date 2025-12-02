# Portfolio Website with Auto-Documentation

This is a personal portfolio website for **bora0dev**, featuring automatic documentation generation using JSDoc and GitHub Actions.

## Live Site
[https://bora0dev.github.io/Portfolio-Website-with-Auto-Documentation/](https://bora0dev.github.io/Portfolio-Website-with-Auto-Documentation/)

## Features
- **Polished UI**: A dark-themed, responsive design with smooth hover effects.
- **Project Showcase**: Highlights "Wavebreaker" and other projects.
- **Auto-Documentation**: Automatically generates JSDoc documentation from the source code on every push to `main`.

## Local Development

To build the documentation locally, you need [Node.js](https://nodejs.org/) installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Generate documentation:**
    ```bash
    npm run doc
    ```
    The documentation will be generated in `docs/gen`.

3.  **View the site:**
    Open `index.html` in your browser.
