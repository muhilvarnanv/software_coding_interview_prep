# Sliding window

A **sliding window** is a contiguous segment of a sequence (array or string) whose **left and right boundaries move** as you scan. Instead of recomputing everything for each segment, you **update in O(1)** what changes when the window shifts: drop what leaves, add what enters.

Across the whole input this often yields **O(n)** time instead of **O(n × window size)** or **O(n²)** from rebuilding each window naively.

## When to use it

Sliding window fits when:

1. **Linear data** — array, string, or ordered stream.
2. **Contiguous subarray or substring** — the answer is about a **continuous** chunk.
3. **A goal on the window** — sum ≤ k, exactly k distinct characters, contains all required letters, max length under a constraint, etc.
4. <span id="monotonic-progress"></span>**[Monotonic progress](../concept-library/monotonic-progress.md)** — as you extend the right edge, you can often **shrink from the left** when the window is invalid or to optimize (for example, shortest valid window).

**Typical shapes**

- **Longest** subarray or substring satisfying a condition — expand `right`, shrink `left` while keeping validity (or restore it).
- **Shortest** subarray that satisfies a condition — expand until valid, then shrink while still valid.
- **Fixed size** — max or min over every window of length `k`.

It is a weaker match when the answer is **not** contiguous, or when the problem depends on **non-local** structure that breaks a single left-to-right scan with two pointers.

## How it works (two pointers)

Keep **`left`** and **`right`** (or `start` / `end`):

1. **Grow** — advance `right`, include the new element, update aggregates (sum, counts, flags).
2. **Shrink** — while the window is **invalid** (or while tightening for “shortest”), advance `left` and undo that element’s contribution.
3. **Record** — whenever the window is in a state you care about, update the answer (max length, min length, count, best sum, etc.).

Extra space is usually **O(1)** or **O(alphabet)** — running sum, frequency map, or a deque when you need the min/max **inside** each fixed window in linear time.

**Mental model:** brute force over all substrings is often **O(n²)** or worse; sliding window visits each boundary a bounded number of times → **O(n)** for many problems.

## Sliding window or not? (five shapes)

Use these as a quick **pattern sniff test**. The “no” cases are still solvable—just not with the usual grow-or-shrink window template.

1. **Positive integers only.** Find the **shortest contiguous** subarray whose sum is **at least** `S`.  
   **Sliding window:** **Yes** — expand `right` until the sum is large enough, then shrink `left` while the sum stays ≥ `S`; with all positives, shrinking always helps you hunt the shortest window.

2. **A string of letters.** Find the **longest contiguous** substring that contains **at most** `k` distinct characters.  
   **Sliding window:** **Yes** — variable window with counts; shrink from the left when distinct characters exceed `k`.

3. **An array of numbers.** Find the **maximum sum** among every contiguous subarray of **exactly** length `k`.  
   **Sliding window:** **Yes** — fixed-size window: add the new right element, drop the old left element each step.

4. **An array that may include negative numbers.** Count how many **contiguous** subarrays have sum **exactly** `T`.  
   **Sliding window:** **No** (for the classic two-pointer window) — prefix sums jump non-monotonically when negatives exist, so “expand/shrink while sum ≤ target” does not give a clean window rule the way it does for all-positive “at least `S`” problems. Prefer **prefix sum + hash map**.

5. **An array of numbers (in given order).** Find the **length of the longest strictly increasing subsequence**—you may skip elements, but you **cannot reorder**; the result need **not** be one contiguous block.  
   **Sliding window:** **No** — the answer is not “one window” over the line; it is a subsequence problem (typically **O(n log n)** with patience-sort / binary search style DP, not grow-shrink on a single segment).

---

## Fixed window vs variable window

Both use two pointers and local updates. The difference is whether length is **fixed** up front or **driven by a rule**.

### Fixed window

The window always has **exactly `k` elements** (or you need every consecutive block of length `k`).

- **`left` and `right`** move in lockstep: each step **add** at `right`, **remove** at `left`, with `right - left + 1 = k`.
- **Examples:** max sum of subarrays of length `k`; rolling average; max in each window of size `k` (sometimes a **deque** for min/max in O(n) total).
- **Space:** often **O(1)**, or **O(k)** for a deque.

Think of a **ruler of length `k`** sliding along the array.

### Variable (varying) window

Length is **not** fixed. You **stretch** with `right` until a condition holds or breaks, then **pull** `left` until the window is valid again (or as far as needed for “shortest” or “longest”).

- **`right`** usually moves every step; **`left`** moves only when needed.
- **Examples:** longest substring with at most two distinct characters; shortest subarray with sum ≥ `S`; minimum window substring covering all of `t`.
- **Amortized** time is still **O(n)** for many templates because each index is entered and left the window a bounded number of times.

Think of a **rubber band**: stretch until the rule is satisfied, then shrink from the left until it barely holds (or breaks and you stretch again).

| | Fixed | Variable |
|---|--------|----------|
| **Size** | Always `k` | Changes with the rule |
| **Moves** | `left` and `right` step together | `right` advances; `left` on demand |
| **Typical answer** | Best over all windows of size `k` | Longest/shortest window satisfying X |
| **Update** | Drop `a[left]`, add `a[right]` | While invalid (or optimizing), drop from `left` |

**Quick cue:** the statement says **“length k”** or **“every consecutive k”** → fixed. It says **“longest/shortest”** or **“at most/at least”** without fixing length → variable.

---

## Worked example (variable window)

**Problem (idea):** longest substring with **at most two distinct** characters.

**String:** `eceba`

Track counts of characters in the current window; if distinct count > 2, move `left` until distinct count ≤ 2. Track max window length.

| Step | `right` | Char | Action | Window (`left`…`right`) | Distinct | Max length |
|------|---------|------|--------|-------------------------|----------|------------|
| 1 | 0 | e | start | `e` | 1 | 1 |
| 2 | 1 | c | valid | `ec` | 2 | 2 |
| 3 | 2 | e | valid | `ece` | 2 | 3 |
| 4 | 3 | b | 3 distinct → shrink | shrink from left | | |
| | | | remove index 0 (`e`) | `ceb` | 3 | |
| | | | remove index 1 (`c`) | `eb` | 2 | 3 |
| 5 | 4 | a | 3 distinct → shrink | remove index 2 (`e`) | `ba` | 2 | 3 |

**Result:** length **3** (substring `ece`).

Each index is visited by `left` and `right` a constant number of times → **O(n)** time; **O(1)** or **O(Σ)** space for counts (small alphabet).

---

## Fixed-window micro-example

**Max sum of subarrays of length 3** in `[1, 4, 2, 10, 23, 3, 1, 0, 20]`:

- First window: `1 + 4 + 2 = 7`.
- Slide: subtract `1`, add `10` → `4 + 2 + 10 = 16`.
- Repeat; each step is one add and one subtract → **O(n)**.

---

## What to add next

After you solve a problem with this template, note the **invariant** (what stays true as `left` and `right` move) and whether your window was **fixed** or **variable**. That vocabulary is easy to defend in an interview.
