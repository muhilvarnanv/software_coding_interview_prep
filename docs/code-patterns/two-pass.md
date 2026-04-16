# Two-pass scanning

## The idea in one sentence

You solve the problem with **two (or a few) linear scans** over the data—first pass **collects facts** (counts, prefix aggregates, “what is the last index?”), second pass **builds the answer**—instead of trying to do everything in one clever sweep.

## Why interviewers like it

Each pass is usually **O(n)** (or **O(n)** + **O(n log n)** sort when sorting is the first pass), which is easy to reason about and often **O(1) extra space** besides output or a small side table. It separates **“understand the input”** from **“emit the result,”** which mirrors how candidates should explain their plan.

**Related:** **[Prefix sum](prefix-sum.md)** is often “build once, query many”—a structural cousin. **[Two pointers](two-pointer.md)** can be a **single** pass; two-pass is when the **information you need for step 2 is not visible until after step 1**.

---

## When does two-pass help?

1. **You need a global statistic before you can judge each position** — e.g. “replace each value with the max to its right” needs to know suffix maxima.
2. **Stable grouping or filtering** — first count bucket sizes, then place elements without collisions.
3. **String or array cleanup** — first measure, then write (avoid repeated reallocations in lower-level languages; in interviews, the *idea* still shows clear thinking).

**When it is usually *not* the right tool**

- You can stream the answer in **one pass** with a deque, heap, or map—forcing two passes may be slower or messier.
- **Online** requirements (see only once, cannot store all) — two full passes may be disallowed.

---

## How to use it (step by step)

1. **Name what is missing** if you only look left-to-right once (suffix max? total frequency? last occurrence?).
2. **First pass** — compute that structure: array, hash map, or running aggregate stored for pass two.
3. **Second pass** — read the original again (or walk your structure) and produce the final answer.
4. **Check empty input** and whether pass-one results cover **edge indices** (last element, first element).

---

## Pitfalls

- **Off-by-one on “right side”** — define whether the current index is included in “right” or “left.”
- **Using O(n) memory** when the interviewer wanted **O(1)** — sometimes a **single reverse pass** replaces two passes with one trick.
- **Mutating input** during pass one so pass two cannot read the original — copy indices or values you still need.

---

## Mini example: “greatest on the right”

Array `[17, 18, 5, 4, 6, 1]`.

- Pass 1 from the **right**: build suffix maxima → helps you replace each cell with the max **strictly to its right** (LeetCode-style problem).
- Pass 2: walk left to right, read suffix table, write `-1` on the last index.

You never re-scan the whole suffix for each `i` from scratch.

---

## After you solve a problem

- What did pass one **compute**, exactly?
- Could a **reverse single pass** have merged the passes?
- What is the **time / space** of each pass separately?

---

## Practice problems

Curated problems with examples, Python solutions, and plain-language explanations: **[Two-pass — practice](../problems/two-pass/index.md)**.
