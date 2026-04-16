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
2. In the repo on GitHub: **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions** (not “Deploy from a branch” for this workflow).
3. Edit `mkdocs.yml` and replace `YOUR_USERNAME` in `site_url` with your GitHub username (and fix the repo name in the path if different).
4. Push to `main`; the **Deploy MkDocs to GitHub Pages** workflow should run and publish the site.

## Adding pages

1. Add a Markdown file under `docs/` (mirror folders for clarity).
2. Add an entry under `nav:` in `mkdocs.yml` so it appears in the sidebar.

## License

Your content—add a `LICENSE` if you want this repo public.
