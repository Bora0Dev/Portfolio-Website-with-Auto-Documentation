# Documentation Setup

This project uses **JSDoc** to generate documentation from comments in the source code (`src/`).

## How it Works

1.  **Source Code**: The JavaScript files in `src/` (e.g., `game_utils.js`) are annotated with JSDoc comments (starting with `/**`).
2.  **Configuration**: `jsdoc.json` configures JSDoc to look into `src/` and output to `docs/gen`.
3.  **Generation**: Running `npm run doc` executes `jsdoc -c jsdoc.json`.

## GitHub Actions Workflow

The workflow is defined in `.github/workflows/pages.yml`. It runs on every push to the `main` branch.

### Steps:
1.  **Checkout**: Fetches the latest code.
2.  **Setup Node**: Installs Node.js.
3.  **Install Dependencies**: Runs `npm install` to install `jsdoc`.
4.  **Generate Documentation**: Runs `npm run doc` to generate the HTML documentation.
5.  **Upload Artifact**: Uploads the entire repository (including the newly generated `docs/gen` folder) as a GitHub Pages artifact.
6.  **Deploy**: Deploys the artifact to GitHub Pages.

## GitHub Pages Configuration

To enable GitHub Pages for this repository:
1.  Go to **Settings** > **Pages**.
2.  Under **Build and deployment**, select **GitHub Actions** as the source.
3.  The workflow will automatically handle the rest.

## Accessing Documentation
On the live site, the documentation is available at `/docs/gen/index.html`. There is a link in the main navigation bar.
