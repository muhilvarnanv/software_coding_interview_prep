# Big-O basics

Quick reference for classes you will name in almost every interview.

## Common time complexities (best to know by heart)

| Class | Typical cause | Example idea |
|-------|----------------|--------------|
| **O(1)** | Constant work | Hash map lookup, swap two variables |
| **O(log n)** | Halving the problem each step | Binary search on sorted array |
| **O(n)** | Single pass | One loop over input |
| **O(n log n)** | Divide + linear combine per level | Efficient sorts, many “sort then scan” tricks |
| **O(n²)** | Pairs / nested loops over n | Naive “all pairs” checks |
| **O(2ⁿ)** | Exhaustive subsets | Rare in interviews unless brute force is the point |

## Space complexity

- **O(1)** extra: only a few variables, maybe a couple of indices.
- **O(n)** extra: copy of input, auxiliary array same size, recursion depth in worst case (watch stack space).

## Rules of thumb when analyzing your code

1. **Sequential statements**: add dominant terms (Big-O keeps the largest).
2. **Nested loops**: often multiply if inner depends on outer index (not always—sliding window can be O(n) with two pointers).
3. **Sorting**: default comparison sort is O(n log n) time, O(1) or O(n) space depending on algorithm.

Add your own “gotchas” here as you discover them in practice problems.
