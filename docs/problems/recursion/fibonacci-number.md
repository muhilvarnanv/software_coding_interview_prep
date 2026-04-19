# Fibonacci number

**Topic:** [Recursion](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

`F(0)=0`, `F(1)=1`, and `F(n)=F(n-1)+F(n-2)` for `n>=2`. Return `F(n)`.

## Examples

**Example 1**

- Input: `n = 4`
- Output: `3`
- Explanation: `0,1,1,2,3` at indices `0..4`, so `F(4)=3`.

**Example 2**

- Input: `n = 7`
- Output: `13`
- Explanation: Follow the recurrence seven steps from the base cases.

## Approach (beginner friendly)

Pure recursion repeats work. **Bottom-up** with two variables is simplest: walk from `2` to `n` keeping the last two values.

## Solution (Python)

```python
def fib(n: int) -> int:
    if n < 2:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b


assert fib(4) == 3
assert fib(7) == 13
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
