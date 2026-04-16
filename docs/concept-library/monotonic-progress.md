# Monotonic progress

## The idea in one sentence

**Monotonic progress** here means: as your algorithm runs, your **indices or window edges mostly move one way** along the array or string—for example, they **only move forward** (or only backward along a fixed walk), instead of jumping all over the place.

That steady, one-way movement is why many [two-pointer](../code-patterns/two-pointer.md) and [sliding-window](../code-patterns/sliding-window.md#monotonic-progress) solutions can scan the whole input in **linear time**—about **one pass per position**, not revisiting the same index many times without a good reason.

---

## Beginner picture

Imagine **`left`** and **`right`** marking a window:

- **`right`** steps forward through the array.
- When you need to fix the window, you move **`left`** forward too—you usually **do not** move `left` backward to an earlier index.

So the whole window **drifts forward** through the data. Each array cell might enter and leave the window a **small fixed number of times** (often once or twice). That is the simple idea behind “**O(n)** total steps” for these patterns.

**Note:** this use of “monotonic” is about **how your pointers move**, not about whether each **number** in the array is bigger than the previous (that is a different math meaning). Here it means **monotone scanning**: the algorithm’s **position** on the line keeps progressing in one direction.

---

## Why interviewers mention it

When pointers (or window edges) **never wander backward** without a bound, you can argue: “each index is processed a constant number of times, so the whole thing is linear.” That argument shows up a lot in solutions that use **[contiguous segments](contiguous-segment.md)** and sliding windows.

You do not have to say the word **amortized** out loud as a beginner; it just means “**spread out** over the whole run, each step is cheap enough that the total stays linear.”

---

## Typical picture

- **Sliding window / two pointers:** `right` walks forward; when you shrink, `left` walks forward too. The active window slides along one **[contiguous segment](contiguous-segment.md)** of the input.

---

## Where you'll see this in these notes

- **[Sliding window — when it fits](../code-patterns/sliding-window.md#monotonic-progress)** — one-way movement of the window edges as a sign the pattern applies.
