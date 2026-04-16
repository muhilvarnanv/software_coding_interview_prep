# Sliding window — practice problems

**Pattern overview:** [Sliding window](../../code-patterns/sliding-window.md) · **All problems:** [Problems hub](../index.md)

These five are among the most frequently asked shapes: fixed-size window, longest/shortest valid window, and frequency-based windows.

| # | Problem | Idea in one line |
|---|---------|------------------|
| 1 | [Maximum sum of subarray of size `k`](max-sum-subarray-size-k.md) | Fixed window: add right, drop left. |
| 2 | [Longest substring without repeating characters](longest-substring-without-repeating.md) | Expand until repeat, then shrink from the left. |
| 3 | [Minimum size subarray sum](minimum-size-subarray-sum.md) | Shortest window with sum ≥ target (positive numbers). |
| 4 | [Longest repeating character after replacements](longest-repeating-character-replacement.md) | Window is valid if `length - max_freq ≤ k`. |
| 5 | [Find all anagrams in a string](find-all-anagrams-in-string.md) | Fixed window + character counts. |
