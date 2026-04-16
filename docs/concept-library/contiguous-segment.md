# Contiguous segment

## The idea in one sentence

A **contiguous segment** is a **slice of an array or string with no holes**: you pick a start index and an end index, and you take **every** element in between, in order. Nothing is skipped in the middle, and you do not shuffle the order.

People also say **contiguous subarray** (for arrays) or **contiguous substring** (for strings). Here “segment” means the same thing.

If the array is `nums` with indices `0` to `n - 1`, a segment is any range from **`left` to `right`** where `0 ≤ left ≤ right < n`. Its **length** is how many cells that is: `right - left + 1`.

---

## Why “contiguous” matters in interviews

Many problems say “subarray” or “substring” and mean **one unbroken block**. [Sliding window](../code-patterns/sliding-window.md) is built for that: your window is exactly such a block.

If the problem lets you **leave gaps** or only cares about **order but not adjacency**, you are often in **[subsequence](subsequence.md)** territory instead—different tools.

---

## Contiguous vs subsequence (easy contrast)

- **Contiguous segment:** like highlighting **one continuous** stretch in a line of text. Neighbors stay neighbors.
- **[Subsequence](subsequence.md):** you may **skip** elements, but you keep **left-to-right order**. Example: from `[1, 2, 3, 4, 5]` you can take `[1, 3, 5]`—not one segment, because `2` and `4` are missing from the middle.

A segment is **stricter**: if you take index `1` and index `3`, you **must** include index `2` as well.

---

## Small example

Array `nums = [10, 20, 30, 40, 50]` (indices `0` through `4`):

| What you pick | Values | Contiguous segment? |
|---------------|--------|---------------------|
| Indices `1` through `3` | `[20, 30, 40]` | **Yes** — indices 1, 2, 3 are next to each other. |
| Values `10`, `30`, `50` only | `[10, 30, 50]` | **No** — you skipped `20` and `40`; that is a **[subsequence](subsequence.md)**, not one segment. |
| `40` then `20` | — | **No** — wrong order for a slice of this array. |

---

## Where you'll see this in these notes

- **[Sliding window](../code-patterns/sliding-window.md)** — the window is a contiguous segment you slide along the line.
- **[Two pointers](../code-patterns/two-pointer.md)** — many setups track **one** contiguous piece (for example window ends).
- **[Arrays](../arrays/index.md)** — unless the problem says otherwise, “subarray” usually means **contiguous**.
- **[Subsequence](subsequence.md)** — when gaps are allowed; compare with this page.
