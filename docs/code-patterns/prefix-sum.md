# Prefix sum

## The idea in one sentence

You build a **running total** along a line: at each index you store “**sum of everything from the start up to here**.” After that one pass, the sum of **any contiguous chunk** is usually **one subtraction**—no loop over the chunk. That running-total array is the **prefix sum** (sometimes called **cumulative sum**).

This pairs naturally with **[contiguous segments](../concept-library/contiguous-segment.md)**. If the problem is about **one unbroken block** of an array, prefix sums are often in the conversation—either alone or with a **[hash map](../hash-tables/index.md)** when you need to match **targets** or **counts** (for example subarray sum equals `k` when numbers may be negative).

**Related:** **[Sliding window](sliding-window.md)** — another way to handle contiguous chunks when the rule fits grow/shrink on the line; when sums are **not** monotone (negatives), **prefix sum + map** is often the right move instead.

---

## Why not just add the range every time?

If you have an array of length `n` and someone asks “what is the sum from index `i` to `j`?” many times, **re-adding** every element between `i` and `j` each time can be **slow**—each query can cost **O(length of range)**, and ranges can be long.

With a prefix array built once in **O(n)**, each range sum is **O(1)** after you know the formula: subtract two prefix values instead of walking the whole segment.

---

## When does prefix sum help?

Ask yourself:

1. **Linear data** — usually a 1D array; sometimes a 2D grid for **rectangle** sums.
2. **The quantity is additive over a contiguous block** — sums, counts of “how many 1s,” etc. (You can treat other operations with the same *shape* of idea, but **sum** is the textbook case.)
3. **Many queries** or **many subarrays** to reason about — you want each answer fast after one preprocessing pass.
4. **“Subarray sum equals `k`” (or count of those)** with **negatives** allowed — classic **prefix sum + hash map**; a simple **[sliding window](sliding-window.md)** often fails because the sum does not grow predictably when you extend the window.

**When it is usually *not* the whole answer**

- The array **changes** after each query in arbitrary places — you may need a **segment tree** or **Fenwick tree** (different topic).
- The answer is **not** one contiguous block (see **[subsequence](../concept-library/subsequence.md)**).
- You only need **one** range and will never query again — a plain loop over that range is fine.

---

## How it works (simple picture)

**One dimension**

1. **Build** `pref` of the same length as `a` (or length `n + 1` with a leading `0`—both styles are common; pick one and stay consistent).
2. **Typical choice:** `pref[0] = a[0]`, and for `i > 0`: `pref[i] = pref[i - 1] + a[i]`.
3. **Range sum** from index `i` to `j` **inclusive** (0-based):  
   `sum(i, j) = pref[j] - pref[i - 1]`, treating `pref[-1]` as **0** when `i == 0`.

**Leading-zero style (many templates use this)**

- Let `pref[0] = 0`, and `pref[k] = a[0] + … + a[k - 1]` for `k >= 1` (so `pref` has length `n + 1`).
- Then sum of `a[i]` through `a[j]` inclusive is **`pref[j + 1] - pref[i]`** — no special case for `i == 0`.

**Extra memory:** **O(n)** for the prefix array (or **O(1)** if you only need a running total while scanning once—but then you lose fast random range queries).

---

## Quick examples: “Is this prefix sum?”

1. **Many questions:** “What is the sum of `a[l..r]`?” on a **fixed** array.  
   **Yes** — build prefix once; answer each query in constant time.

2. **One pass story:** “Return an array where output[i] = sum of `a[0..i]`.”  
   **Yes** — that *is* building the prefix sum.

3. **Target with negatives:** “Count subarrays with sum exactly `k`.”  
   **Usually yes** — use cumulative sums and a map from **prefix value → how often we have seen it**; for each position, look up how many earlier prefixes differ from the current prefix by `k`. (Same family as “two sum” on a running prefix.)

4. **All positive, shortest subarray with sum ≥ `S`.**  
   **Often [sliding window](sliding-window.md)** first — not the main prefix-sum story.

5. **2D matrix, sum inside an axis-aligned rectangle many times.**  
   **Yes** — **2D prefix** (four corners and inclusion–exclusion); build once, each query **O(1)**.

---

## Prefix alone vs prefix + hash map

| Setup | What you store | Typical question |
|--------|----------------|------------------|
| **Prefix array only** | `pref[i]` = sum from start to `i` | Range sums; “sum of first `k` elements”; building running totals |
| **Prefix + map** | Current prefix as you scan; map counts past prefixes | “Subarray sum = `k`”, “longest subarray with sum `0`”, “number of subarrays divisible by `k`” (with care for modulo) |

**Simple cue:** if the problem only asks **sums of ranges** → prefix array. If it asks **how many subarrays** match a sum condition (especially with **negatives**) → think **prefix + map**.

---

## Worked example: range sums with a leading zero

**Array:** `a = [3, -2, 4, 1]`

Build `pref` with length `n + 1`, `pref[0] = 0`:

| `k` | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| `pref[k]` | 0 | 3 | 1 | 5 | 6 |

Meaning: `pref[k]` = sum of `a[0]` … `a[k - 1]`.

**Query:** sum of `a[1..2]` (that is `-2 + 4 = 2`).

Formula: `pref[3] - pref[1] = 5 - 3 = 2`.

**Query:** sum of `a[0..3]` (whole array).

`pref[4] - pref[0] = 6 - 0 = 6`.

No “if `i == 0`” branch when you use the extra leading zero—that is why interview templates like it.

---

## Mini example: subarray sum equals `k` (idea only)

**Array:** `[1, 2, 3]`, **k = 3**. Subarrays with sum `3`: `[3]`, `[1, 2]` → count **2**.

Scan left to right; keep a running **prefix sum** `cur`. If `cur - k` appeared before as a prefix, those positions start a valid subarray ending here. A map stores **how many times** each prefix value has been seen; initialize with `{0: 1}` so subarrays starting at index `0` are counted.

You do not need to memorize the map update order in this note—only the **picture**: **current prefix** and **“have we seen prefix equal to `cur - k`?”**

---

## After you solve a problem

Write down in simple terms:

- Did I need **only range sums** (prefix array) or **pairing prefixes with a target** (prefix + map)?
- Did I use **leading zero** or not—and is my `i..j` formula consistent with that choice?

That is enough to explain your approach cleanly in an interview.

---

## Practice problems

Curated problems with examples, Python solutions, and plain-language explanations: **[Prefix sum — practice](../problems/prefix-sum/index.md)**.
