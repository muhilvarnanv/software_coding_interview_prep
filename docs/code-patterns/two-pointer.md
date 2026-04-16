# Two pointers

## The idea in one sentence

You walk through an array or string with **two positions** (often called `left` and `right`, or `slow` and `fast`). Each step you look at what those two positions show you, then **move one or both positions** according to a simple rule. You never need to check every possible pair with nested loops if the rule is chosen well.

That is the whole pattern: **two indices, one clear rule for how they move**.

## Why interviewers like it

If each index only moves forward (or inward) in a predictable way, you usually touch each element a **fixed number of times**. That gives **linear time**—roughly one pass through the data—and **constant extra space** (no big copy of the array, just a few variables). People often call that **O(n) time** and **O(1) extra space**.

When pointers only move in one direction along the line (never jumping backward for no reason), that steady movement is related to **[monotonic progress](../concept-library/monotonic-progress.md)**. You do not need that phrase to solve problems; it is just a name for “we are not revisiting old ground in a messy way.”

**Related:** **[Sliding window](sliding-window.md)** — two pointers marking **one** **[contiguous](../concept-library/contiguous-segment.md)** window. **[Subsequence](../concept-library/subsequence.md)** problems (for example “is `s` a subsequence of `t`?”) often use **two indices on two strings**—still two pointers, but a different shape than a single sliding window. Other common uses: merges, partitions, same-direction scans.

---

## When does two pointers help?

Ask yourself:

1. **Is the data in a line?** Array, string, or two sorted lists side by side.
2. **Can I decide what to do using only two spots?** For example: “Is the sum too big or too small?” or “Should I copy this value to the write position?”
3. **Is there a simple rule for which pointer to move?** If yes, you can often avoid a slow double loop.

**Two common setups**

- **Opposite ends** — one index at the start, one at the end; they move **toward each other**. Classic when the array is **sorted** and you compare sums or check palindromes.
- **Same direction** — both start on the same side and move **along the line**; one often runs ahead (“read”) and one commits results (“write”), or you merge two sorted arrays with one finger on each.

If the array is **not** sorted and the problem needs pairs in arbitrary order, plain opposite-end two pointers may not work until you **sort first** or use another structure (like a hash set). That is normal—not every problem is a two-pointer problem.

---

## How to use it (step by step)

1. **Choose starting positions** — often `left = 0` and `right = n - 1` for opposite ends, or `slow = fast = 0` for same-direction tricks.
2. **Each iteration** — read the values at those positions, apply your rule, move **at least one** pointer.
3. **Stop** — when the pointers cross, reach the end, or you have the answer you need.

**Beginner intuition:** imagine checking every pair with two nested loops—that can be **quadratic** (many steps). Two pointers is the version where you **do not** revisit useless pairs because each move throws away work you know you do not need.

---

## Quick examples: “Is this two pointers?”

1. **Sorted array:** “Is there a pair that sums to `target`?”  
   **Yes** — opposite ends; sum too small → move the left pointer right; sum too large → move the right pointer left.

2. **Unsorted array:** same pair-sum question, cannot sort.  
   **Not the classic template** — you lose the “which way to move” rule unless you sort (then use opposite ends) or use a **hash set** for complements.

3. **Sorted array, in place:** remove duplicates so each value appears once.  
   **Yes** — one pointer **reads** every cell; one pointer **writes** the next unique value. Same direction.

4. **Two sorted arrays:** merge into one sorted list.  
   **Yes** — one index per array; each step take the smaller front element and advance that index.

5. **“Count pairs” with no order and no clear move rule.**  
   **Often no** — you may need a different approach. Always check whether sorting or another structure gives you a forced next step.

---

## Opposite ends vs same direction

Both use two indices on a line. The **shape** of the walk is different.

### Opposite ends (meet in the middle)

- Pointers start at **both ends** and move **inward**.
- Works best when **order** tells you what to do (very often a **sorted** array).
- Examples: two-sum on sorted data, palindrome check, some “two ends toward center” problems.
- Extra memory: usually just a few variables (**O(1)**).

Picture **closing a gap**: each step you rule out a big part of what is left.

### Same direction (chase or read–write)

- Both pointers move **the same way** along the array (often left to right).
- One pointer explores; the other keeps track of where to **write** or **partition**.
- Examples: remove duplicates in place, move zeros, merge from two cursors, Dutch flag–style partitioning.

Picture **typing and a cursor**: one hand reads ahead, the other commits the “clean” prefix.

| | Opposite ends | Same direction |
|---|----------------|----------------|
| **Typical start** | `0` and `n - 1` | Often both at `0`, different jobs |
| **How they move** | Toward each other until done | Forward together, different roles |
| **Typical data** | Sorted or symmetric checks | In-place edits, dedupe, merge |
| **Watch out for** | Off-by-one when they cross | Overwriting before you are done reading |

**Simple cue:** “**sorted** / **pair from two ends** / **palindrome**” → think opposite ends. “**in place** / **remove or compact** / **merge two lines**” → think same direction.

---

## Worked example: opposite ends

**Setup:** sorted array, find **any** two **different** positions whose values sum to `target`.

**Array:** `[1, 2, 4, 6, 10]`, `target = 8` → we want `2 + 6`.

| Step | `left` | `right` | Sum | What we do |
|------|--------|---------|-----|------------|
| 1 | 0 (`1`) | 4 (`10`) | 11 | Too big → move `right` left |
| 2 | 0 (`1`) | 3 (`6`) | 7 | Too small → move `left` right |
| 3 | 1 (`2`) | 3 (`6`) | 8 | Found it |

**Answer:** indices `(1, 3)`.

Each pointer moves at most along the array once → **linear time**, **constant extra space**.

---

## Mini example: same direction

**Remove duplicates** from sorted `[0, 0, 1, 1, 1, 2, 2, 3]` **in place**. Keep the first copy of each value.

- `write` = index of the last unique value we have written.
- `read` scans the whole array. Whenever `a[read]` is a **new** value compared to `a[write]`, we advance `write` and copy.

After one pass, the prefix ending at `write` is `[0, 1, 2, 3]`. Length is `write + 1`.

---

## After you solve a problem

In your own words, note:

- **Geometry:** opposite ends or same direction?
- **The rule:** what exactly made you move `left` or `right`?
- **Sorting:** did sorted order (or another invariant) give you that rule?

That is enough to explain your solution clearly in an interview.
