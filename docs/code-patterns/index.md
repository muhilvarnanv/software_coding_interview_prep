# Code patterns

Interview coding rounds often reduce to a small set of **patterns** applied to different stories (arrays, strings, graphs, etc.). This section collects those patterns in one place.

## Patterns

- **[Sliding window](sliding-window.md)** — [contiguous segments](../concept-library/contiguous-segment.md) with two pointers; fixed-size vs variable-size windows. Contrast **[subsequence](../concept-library/subsequence.md)** when gaps are allowed.
- **[Prefix sum](prefix-sum.md)** — cumulative totals for fast contiguous range sums; often paired with a hash map for subarray-sum targets when the data is not sliding-window friendly.
- **[Two pointers](two-pointer.md)** — opposite ends vs same-direction scans; pairs, partitions, and merges.
- **[Tortoise and hare](tortoise-hare.md)** — two speeds on one path; cycle detection and related tricks on lists or iterated functions.
- **[Two-pass scanning](two-pass.md)** — multiple linear scans when pass one gathers what pass two needs.
- **[Bit manipulation](bit-manipulation.md)** — XOR/masks/shifts; **[Hamming weight](../concept-library/hamming-weight.md)** when you need a **popcount** / set-bit count.
- **[Cyclic sort](cyclic-sort.md)** — route each value to its index mailbox for bounded 1..n style arrays.

## Practice by pattern

- **[Problems hub](../problems/index.md)** — interview-style prompts with examples and Python walkthroughs for **[sliding window](../problems/sliding-window/index.md)**, **[two pointers](../problems/two-pointers/index.md)**, **[prefix sum](../problems/prefix-sum/index.md)**, **[tortoise and hare](../problems/tortoise-hare/index.md)**, **[two-pass](../problems/two-pass/index.md)**, **[bit manipulation](../problems/bit-manipulation/index.md)**, and **[cyclic sort](../problems/cyclic-sort/index.md)**.

## Sections

- **[Time & space complexity](../time-space-complexity/index.md)** — reasoning about cost before you code.
- **[Arrays](../arrays/index.md)** — sequential data, indices, and common techniques.
- **[Hash tables](../hash-tables/index.md)** — O(1) expected lookups and counting.

## How this section grows

For each new pattern or topic:

1. Add a short **overview** page (what problem shape fits this pattern).
2. Add **child pages** for specific techniques or templates (with complexity and one minimal example idea).

Keep pages small so they are easy to scan the night before an interview.
