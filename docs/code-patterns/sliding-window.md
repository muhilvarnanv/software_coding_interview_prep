# Sliding window

## The idea in one sentence

You care about a **continuous chunk** of an array or string—no gaps, just **one block** from index `left` to index `right`. You slide that block along the line: add the new element on the right, sometimes remove elements from the left, and **update your answer** (longest valid chunk, shortest valid chunk, max sum in a chunk of size `k`, and so on).

That chunk is the **window**. The two edges are **two pointers**—same family as [two pointers](two-pointer.md), focused on **one contiguous segment**.

**Contiguous** means “unbroken”: neighbors only. See **[contiguous segment](../concept-library/contiguous-segment.md)** if you want a short formal note.

---

## Why not just try every window?

Trying every possible window from scratch can be **slow** (often many windows × recomputing each window). Sliding window means: when the window moves by **one** step, you **adjust** your running total or counts in **constant time** instead of recomputing the whole window.

If each index enters and leaves the window only a **bounded** number of times, the whole algorithm is usually **linear**—**O(n)**—with **small extra memory** (a running sum, a few counters, or a small frequency map).

---

## When does sliding window help?

Check these:

1. **Linear data** — array or string in order.
2. **The answer is about one unbroken piece** — a subarray or substring, not “pick any elements anywhere” (that is closer to a **[subsequence](../concept-library/subsequence.md)**).
3. **You can tell when the window is valid or invalid** with a rule you can update as you add/remove one element at a time.
4. <span id="monotonic-progress"></span>Often, as you grow the window on the **right**, you only need to move the **left** edge forward (never backward) to fix violations or tighten the window. That one-way movement is what **[monotonic progress](../concept-library/monotonic-progress.md)** refers to—you can still solve problems without memorizing the term.

**Common storylines**

- **Longest** valid window — stretch `right`; when invalid, move `left` until valid again; track the best length.
- **Shortest** valid window — stretch until valid; then move `left` while still valid to make it shorter; repeat.
- **Fixed length `k`** — window always has `k` items; slide one step: drop the leftmost, add the new rightmost.

**When it is usually *not* the right tool**

- The answer is **not** one contiguous block (for example, **[subsequence](../concept-library/subsequence.md)** problems).
- The window rule breaks when you have **negatives** in a sum problem—classic “sum exactly `T`” with negatives often needs **prefix sums** and a hash map, not a simple grow/shrink window.

---

## How it works (simple loop picture)

Keep **`left`** and **`right`** (sometimes called `start` / `end`):

1. **Grow** — move `right` forward, include `a[right]`, update what you track (sum, counts, “have we seen all required letters?”, etc.).
2. **Shrink** — while the window breaks your rule (or while you are optimizing “shortest”), move `left` forward and undo what `a[left]` contributed.
3. **Record** — whenever the window is in a state you care about, update your best answer.

**Extra memory:** often a few numbers or a small map (**O(1)** or **O(alphabet)**). For “min or max inside every fixed window of size `k`” in linear total time, people sometimes use a **deque**—a more advanced variant; many problems only need sum or counts.

---

## Quick examples: “Is this sliding window?”

1. **Positive numbers only:** shortest subarray with sum **at least** `S`.  
   **Yes** — expand until sum ≥ `S`, then shrink from the left while sum stays ≥ `S` to hunt the shortest piece.

2. **String of letters:** longest substring with **at most** `k` distinct characters.  
   **Yes** — variable window; when you have too many distinct letters, move `left` until you are legal again.

3. **Numbers:** maximum sum among every subarray of **exactly** length `k`.  
   **Yes** — fixed window: each step subtract the outgoing left element and add the incoming right element.

4. **Numbers may be negative:** count subarrays with sum **exactly** `T`.  
   **Usually not** the simple two-pointer window—sums do not grow monotonically. Use **prefix sum + hash map**.

5. **Longest increasing [subsequence](../concept-library/subsequence.md)** (skip elements, not necessarily contiguous).  
   **No** — not a single window on the line; different techniques (often **O(n log n)**).

---

## Fixed window vs variable window

### Fixed window (length always `k`)

The window always has **exactly `k`** elements. Each step: **add** at the new right, **remove** at the old left. `right - left + 1` stays `k`.

Examples: max sum of length-`k` subarrays; rolling average; max in each `k`-sized window (sometimes a deque).

Think of a **ruler of length `k`** sliding along the array.

### Variable window (length changes)

You **stretch** with `right` until a condition holds or breaks, then **pull** `left` until the window matches what you need (valid again, or as short as possible while still valid).

Examples: longest substring with at most two distinct letters; shortest subarray with sum ≥ `S`; minimum window substring that covers all characters of `t`.

Think of a **rubber band**: stretch until the rule is satisfied, then shrink from the left as far as the rule allows.

| | Fixed | Variable |
|---|--------|----------|
| **Size** | Always `k` | Grows and shrinks |
| **Typical move** | `left` and `right` step together | `right` moves every outer step; `left` moves when needed |
| **Typical question** | Best over every `k`-chunk | Longest or shortest window with property X |

**Simple cue:** problem says **“length k”** or **“every consecutive k”** → fixed. Says **“longest/shortest”** or **“at most/at least”** without fixing length → variable.

---

## Worked example: variable window

**Idea:** longest substring with **at most two distinct** characters.

**String:** `eceba`

Track how many of each character are in the current window. If distinct count goes above 2, move `left` until you are back to at most 2. Track the best length you have seen.

| Step | `right` | Char | Window (`left`…`right`) | Distinct | Max length |
|------|---------|------|-------------------------|----------|------------|
| 1 | 0 | e | `e` | 1 | 1 |
| 2 | 1 | c | `ec` | 2 | 2 |
| 3 | 2 | e | `ece` | 2 | 3 |
| 4 | 3 | b | too many distinct → shrink from left | | |
| | | | after dropping `e` then `c`: `eb` | 2 | 3 |
| 5 | 4 | a | shrink again → `ba` | 2 | 3 |

**Answer:** length **3** (for example substring `ece`).

---

## Mini example: fixed window

**Max sum of subarrays of length 3** in `[1, 4, 2, 10, 23, 3, 1, 0, 20]`:

- First window: `1 + 4 + 2 = 7`.
- Slide: subtract `1`, add `10` → `4 + 2 + 10 = 16`.
- Keep sliding; each step is one add and one subtract → **linear** total work.

---

## After you solve a problem

Write down in simple terms:

- What had to stay **true** about the window while you moved `left` and `right`?
- Was the window **fixed size** or **variable**?

That is enough to defend your approach in an interview.
