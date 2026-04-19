# K-th symbol in grammar

**Topic:** [Recursion](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Row `1` is `0`. Row `i` is formed from row `i-1` by replacing each `0` with `01` and each `1` with `10`. Return the `k`-th symbol (1-indexed) in row `n`.

## Examples

**Example 1**

- Input: `n = 1`, `k = 1`
- Output: `0`
- Explanation: The first row is just `0`.

**Example 2**

- Input: `n = 2`, `k = 1`
- Output: `0`
- Explanation: Row `2` is `01`; the first symbol is `0`.

## Approach (beginner friendly)

Length doubles each row. If `k` is in the **first half**, recurse to `(n-1, k)`. If in the **second half**, recurse to `(n-1, k - mid)` and **flip** the bit (`1 - parent`).

## Solution (Python)

```python
def kth_grammar(n: int, k: int) -> int:
    if n == 1:
        return 0
    mid = 1 << (n - 2)
    if k <= mid:
        return kth_grammar(n - 1, k)
    return 1 - kth_grammar(n - 1, k - mid)


assert kth_grammar(1, 1) == 0
assert kth_grammar(2, 1) == 0
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)` stack.
