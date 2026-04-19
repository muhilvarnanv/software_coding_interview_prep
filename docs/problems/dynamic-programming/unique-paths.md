# Unique paths

**Topic:** [Dynamic programming](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Robot starts top-left of an `m × n` grid and may only move **right** or **down** to the bottom-right. How many different paths?

## Examples

**Example 1**

- Input: `m = 3`, `n = 7`
- Output: `28`
- Explanation: You need exactly `m-1` downs and `n-1` rights in any interleaving; the count is the binomial coefficient `C(m+n-2, m-1)=28`.

**Example 2**

- Input: `m = 3`, `n = 2`
- Output: `3`
- Explanation: Paths are `RRD`, `RDR`, `DRR` in move shorthand.

## Approach (beginner friendly)

`paths[i][j] = paths[i-1][j] + paths[i][j-1]` with base row/column `1`.

## Solution (Python)

```python
def unique_paths(m: int, n: int) -> int:
    row = [1] * n
    for _ in range(1, m):
        for j in range(1, n):
            row[j] += row[j - 1]
    return row[-1]


assert unique_paths(3, 7) == 28
assert unique_paths(3, 2) == 3
```

## Complexity

- **Time:** `O(m * n)`.
- **Space:** `O(n)` with one rolling row.
