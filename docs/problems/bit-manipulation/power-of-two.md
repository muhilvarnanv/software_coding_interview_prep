# Power of two

**Topic:** [Bit manipulation problems](index.md) · **Pattern:** [Bit manipulation](../../code-patterns/bit-manipulation.md)

## Problem

Given an integer `n`, return `True` if it is a **power of two** (there exists `k >= 0` such that `n == 2^k`), else `False`.

## Examples

**Example 1**

- `n = 1` → `True` (`2^0`)

**Example 2**

- `n = 16` → `True`

**Example 3**

- `n = 3` → `False`

## Approach (beginner friendly)

Positive powers of two have **exactly one** `1` bit in binary. Clearing the lowest set bit with `n & (n - 1)` removes that bit; if the result is `0`, the original was a power of two (and `n > 0`).

## Solution (Python)

```python
def is_power_of_two(n: int) -> bool:
    return n > 0 and (n & (n - 1)) == 0


assert is_power_of_two(1) is True
assert is_power_of_two(16) is True
assert is_power_of_two(3) is False
```

## Complexity

- **Time:** `O(1)`.
- **Space:** `O(1)`.
