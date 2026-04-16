# Software coding interview prep (static site)

Personal, free reference for coding interview rounds—patterns, complexity, and data structures. Inspired by structured prep products, but maintained as plain Markdown so you can grow it over time.

## What’s inside

- **MkDocs** + **Material for MkDocs**: write content in `docs/`, navigation is defined in `mkdocs.yml`.
- **GitHub Pages**: a workflow builds the site on push to `main` and publishes the `site/` output.

## Local preview

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
mkdocs serve
```

Open [http://127.0.0.1:8000](http://127.0.0.1:8000).

## GitHub Pages setup

1. Create a repo (e.g. `software_coding_interview_prep`) and push this project.
2. **Turn on Pages and point it at Actions** (required or deploy will fail with HTTP 404):
   - Open **Settings → Pages**.
   - Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”).
   - Save if GitHub shows a save control; wait until the setting sticks.
3. Edit `mkdocs.yml` and set **`site_url`** to `https://<your-username>.github.io/<repo-name>/` (trailing slash, repo name must match the URL path).
4. Push to `main`, or re-run the failed workflow (**Actions → workflow run → Re-run all jobs**).

### “Creating Pages deployment failed” / `HttpError: Not Found` (404)

That almost always means Pages is still using **Deploy from a branch** or Pages has not been enabled yet. Fix it in **Settings → Pages** by choosing **GitHub Actions** as the source, then trigger the workflow again.

On a **free** GitHub account, **GitHub Pages from Actions** is available for **public** repositories. Private repos need a paid feature for Pages.

### After the first successful deploy

Your site URL will be listed on the **Settings → Pages** page and in the workflow summary (the `github-pages` environment link).

## Adding pages

1. Add a Markdown file under `docs/` (mirror folders for clarity).
2. Add an entry under `nav:` in `mkdocs.yml` so it appears in the sidebar.

## License

Your content—add a `LICENSE` if you want this repo public.
