# Subsequence

## The idea in one sentence

A **subsequence** is what you get when you walk through an array or string **from left to right**, **keep** some elements, and **skip** others—as many skips as you want—but you **never reorder** the pieces you keep. Their relative order must match the original.

You can think of it as **deleting some characters** (or positions) and reading what is left. You do **not** have to take a single unbroken block.

---

## Subsequence vs contiguous segment

- **[Contiguous segment](contiguous-segment.md)** — you pick `left` and `right` and take **every** index between them. No gaps.
- **Subsequence** — you pick a **rising list of indices** `i₁ < i₂ < i₃ < …` and take those elements only. Gaps between chosen indices are allowed.

Every contiguous segment **is** a subsequence (take the whole block, skip nothing outside it—but you still only took consecutive indices). **Not** every subsequence is a contiguous segment (for example skipping the middle).

---

## Subsequence vs “substring”

In many interview problems, **substring** means a **contiguous** piece of a string (same idea as a contiguous subarray). A **subsequence** of a string is looser: same “pick in order, skip allowed” rule as for arrays.

If the statement says **“subsequence”** explicitly, assume **gaps are allowed** unless it defines the word differently.

---

## Small example

Original: `[10, 20, 30, 40, 50]` (indices `0`–`4`).

| What you keep (by indices) | Result | Valid subsequence? |
|----------------------------|--------|-------------------|
| `0, 1, 2` | `[10, 20, 30]` | **Yes** — also a contiguous segment. |
| `0, 2, 4` | `[10, 30, 50]` | **Yes** — you skipped `20` and `40`; order preserved. |
| `4, 2` | — | **No** — `50` before `30` breaks left-to-right order of picks. |

---

## Typical problem shapes (names only)

These are **not** sliding-window problems in the usual sense, because the answer is **not** one fixed window on the line:

- **Longest increasing subsequence** — skip freely; longest strictly increasing pick in order (often **O(n log n)** techniques).
- **Is `s` a subsequence of `t`?** — one pass with two pointers is common.
- **Distinct subsequences / edit-style DP** — heavier dynamic programming when counting or optimizing over many ways to pick.

---

## Where you'll see this in these notes

- **[Contiguous segment](contiguous-segment.md)** — side-by-side contrast with subsequences.
- **[Sliding window](../code-patterns/sliding-window.md)** — when the answer is **not** one contiguous block, sliding window is usually the wrong first tool; problem statements that say **subsequence** are a clue.
- **[Two pointers](../code-patterns/two-pointer.md)** — “is subsequence” checks still use two pointers, but on **two sequences** or **two cursors**, not always a single sliding window over one array.
