# Software coding interview prep (static site)

Personal, free reference for coding interview rounds—patterns, complexity, and data structures. Inspired by structured prep products, but maintained as plain Markdown so you can grow it over time.

## What’s inside

- **MkDocs** + **Material for MkDocs**: write content in `docs/`, navigation is defined in `mkdocs.yml`.
- **GitHub Pages**: CI builds the site on push to `main` and pushes the result to the **`gh-pages`** branch (no “GitHub Actions” Pages source required).

## Local preview

You need **Node.js** (for `npm`) and **Python 3** (the script creates `.venv` and installs MkDocs there).

### npm (recommended)

```bash
npm run dev
```

Then open [http://127.0.0.1:8000](http://127.0.0.1:8000). While the server is running, edit files under `docs/` or `mkdocs.yml`; **MkDocs reloads the site and refreshes the browser** when files change (live reload is on by default for `mkdocs serve`).

| Command        | What it does |
|----------------|----------------|
| `npm run dev`  | Same as `serve` — local server with live reload |
| `npm run serve`| Alias for `dev` |
| `npm run build`| `mkdocs build --strict` (matches CI) |
| `npm run setup`| Only create `.venv` and install Python deps |

First run may take a moment while the virtualenv is created and packages install.

### Python only (no npm)

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
mkdocs serve
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000). File changes also trigger live reload here.

## GitHub Pages setup

This repo uses **[peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)**: the workflow builds with MkDocs, then **pushes only the static `site/` output to the `gh-pages` branch**. Your live site is served from that branch, which avoids the separate “GitHub Actions” Pages deployment API (the one that often returns **404 Not Found** if Pages is not wired for Actions).

1. Create a repo and push this project (default branch **`main`**).
2. **Allow the workflow to run once** (push to `main` or **Actions → Deploy MkDocs to GitHub Pages → Run workflow**). After it succeeds, the repo will have a **`gh-pages`** branch.
3. In GitHub: **Settings → Pages → Build and deployment**:
   - Set **Source** to **Deploy from a branch** (not “GitHub Actions”).
   - **Branch**: `gh-pages`, **folder**: **`/ (root)`**.
4. In `mkdocs.yml`, keep **`site_url`** as `https://<your-username>.github.io/<repo-name>/` (trailing slash; repo name must match the URL path).

Your site URL appears on **Settings → Pages** (for example `https://muhilvarnanv.github.io/software_coding_interview_prep/`).

### If you still see “Creating Pages deployment failed” (404)

That message comes from the **old** flow (`actions/deploy-pages`). After you pull the latest workflow from this repo, you should **not** see that step anymore. If Pages is still set to **GitHub Actions**, switch it to **Deploy from a branch** → **`gh-pages`** → **`/`** as above.

### Permissions

The workflow needs **`contents: write`** so GitHub Actions can push to `gh-pages`. That is already set in `.github/workflows/pages.yml`.

Public repos get Pages on the free plan; **private** repos need a GitHub feature that allows Pages on private repositories.

## Adding pages

1. Add a Markdown file under `docs/` (mirror folders for clarity).
2. Add an entry under `nav:` in `mkdocs.yml` so it appears in the sidebar.

## License

Your content—add a `LICENSE` if you want this repo public.
