# Pow(x, n)

**Topic:** [Recursion](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Implement `x` raised to the integer power `n` in `O(log |n|)` time. Handle negative `n`.

## Examples

**Example 1**

- Input: `x = 2.0`, `n = 10`
- Output: `1024.0`
- Explanation: `2^10 = 1024`.

**Example 2**

- Input: `x = 2.0`, `n = -2`
- Output: `0.25`
- Explanation: `2^-2 = 1 / 4 = 0.25`.

## Approach (beginner friendly)

If `n` is negative, flip `x` and use `-n`. Recursively: `pow(x,n) = pow(x*x, n//2)` when `n` even; when odd multiply an extra `x`.

## Solution (Python)

```python
def my_pow(x: float, n: int) -> float:
    if n < 0:
        x = 1 / x
        n = -n

    def helper(base: float, exp: int) -> float:
        if exp == 0:
            return 1.0
        half = helper(base * base, exp // 2)
        return half * base if exp % 2 else half

    return helper(x, n)


assert abs(my_pow(2.0, 10) - 1024.0) < 1e-9
assert abs(my_pow(2.0, -2) - 0.25) < 1e-9
```

## Complexity

- **Time:** `O(log |n|)`.
- **Space:** `O(log |n|)` recursion stack.
