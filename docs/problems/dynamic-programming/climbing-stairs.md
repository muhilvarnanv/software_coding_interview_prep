# Climbing stairs

**Topic:** [Dynamic programming](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

You can climb `1` or `2` steps at a time. How many distinct ways reach step `n`?

## Examples

**Example 1**

- Input: `n = 3`
- Output: `3`
- Explanation: Sequences are `1+1+1`, `1+2`, `2+1` — three ways.

**Example 2**

- Input: `n = 5`
- Output: `8`
- Explanation: This follows the Fibonacci recurrence starting from `ways(1)=1`, `ways(2)=2`.

## Approach (beginner friendly)

`ways(n) = ways(n-1) + ways(n-2)` because your last hop is either size `1` or size `2`. Compute bottom-up with two variables.

## Solution (Python)

```python
def climb_stairs(n: int) -> int:
    if n <= 2:
        return n
    a, b = 1, 2
    for _ in range(3, n + 1):
        a, b = b, a + b
    return b


assert climb_stairs(3) == 3
assert climb_stairs(5) == 8
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
