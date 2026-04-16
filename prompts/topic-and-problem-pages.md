# Prompt template: pattern topic + interview problems

**Audience:** AI coding agents (Cursor, ChatGPT, etc.). This file is **not** part of the published MkDocs site—site content lives under `docs/`.

Copy everything inside the **Prompt** fence into your tool. Fill the bracketed slots before sending.

## Prompt

```text
You are helping maintain an MkDocs site for coding interview prep (Material theme). Site Markdown lives under `docs/`. Prompt templates for agents live under `prompts/` at the repo root (do not add them under `docs/`).

### A) New or updated PATTERN TOPIC page (theory)

Path convention: `docs/code-patterns/<slug>.md` (kebab-case slug).

For the topic titled: "<TOPIC_TITLE>" with slug "<SLUG>", write or revise a concise pattern page that matches the house style of sibling pages:

1. **The idea in one sentence** — plain English.
2. **Why interviewers like it** — complexity and when it wins (time/space intuition, no heavy math unless needed).
3. **When it helps / when it does not** — bullet checklist the reader can scan.
4. **How to use it** — short numbered steps (the mental algorithm).
5. **Pitfalls** — 3–6 bullets of common mistakes.
6. **Mini or worked example** — tiny trace the reader can follow by hand.
7. **After you solve** — what to say in a debrief (2–4 bullets).
8. **Internal links** — relate to other site pages using relative paths, e.g. `../concept-library/contiguous-segment.md`, `two-pointer.md`, `../problems/<topic-folder>/index.md` as appropriate.
9. **Tone** — beginner-friendly, interview-oriented, no filler; headings similar to existing `docs/code-patterns/*.md` files.

Also update `docs/code-patterns/index.md` to list the topic if it is new, and add a final section:

## Practice problems
Link to `../problems/<topic-folder>/index.md` for the matching problem set.

### B) New PROBLEM SET (practice pages)

Under `docs/problems/<topic-folder>/` (kebab-case folder per pattern):

1. Ensure `docs/problems/<topic-folder>/index.md` exists: table of 5 problems with one-line “idea” blurbs and links to each problem file.
2. Add **exactly five** separate Markdown files (one problem per file). Filenames: kebab-case, descriptive.

Each problem page MUST contain, in order:

- Title (H1)
- **Topic** link to `index.md` in the same folder + **Pattern** link to `../../code-patterns/<matching-pattern>.md`
- ## Problem — precise statement; note constraints interviewers care about
- ## Examples — 1–2 examples with input, output, short explanation
- ## Approach (beginner friendly) — intuition before code
- ## Solution (Python) — correct, readable, with `assert` self-checks where easy
- ## Complexity — time and space with brief justification

Problem selection criteria:

- Prefer problems that **commonly appear** in interviews.
- Cover **distinct templates** within the pattern.

### C) Site wiring

1. Update `mkdocs.yml` `nav`:
   - Under **Problems**, nest topic folder index + the five problem pages (or at minimum the topic index).
   - If a new pattern topic was added, include `docs/code-patterns/<slug>.md` under **Code patterns**.
2. Bidirectional navigation:
   - Pattern page → problems index for that topic (section at bottom).
   - Each problem page → pattern page + topic problems index.
3. Update `docs/problems/index.md` so the hub lists the new pattern row and pattern-note link.

Do **not** add `prompts/` to `mkdocs.yml` nav.

### D) Quality bar

- No broken relative links.
- Python 3.11+ standard library only unless the repo already depends on more.
- Keep pages skimmable.

Now perform this work for: <DESCRIBE_TOPIC_AND_OR_PROBLEMS_HERE>
```

## How to reuse

1. Replace the final line with your concrete request.
2. Trim sections **A** or **B** if you only need theory or only problems.
