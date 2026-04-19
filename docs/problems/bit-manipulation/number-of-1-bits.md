# Number of 1 bits

**Topic:** [Bit manipulation problems](index.md) · **Pattern:** [Bit manipulation](../../code-patterns/bit-manipulation.md)

## Problem

Given a positive integer `n`, return the number of **set bits** in its binary representation—that count is the **[Hamming weight](../../concept-library/hamming-weight.md)**.

## Examples

**Example 1**

- `n = 11` (binary `1011`) → `3`
- Explanation: `1011` has three `1` bits.

**Example 2**

- `n = 128` (binary `10000000`) → `1`
- Explanation: `128` is a single power of two, so its binary form has exactly one `1` bit.

## Approach (beginner friendly)

Repeatedly clear the **lowest set bit** with `n &= n - 1` until `n` becomes `0`. Each iteration removes exactly one `1`, so the loop count is the **[Hamming weight](../../concept-library/hamming-weight.md)**.

## Solution (Python)

```python
def hamming_weight(n: int) -> int:
    count = 0
    while n:
        n &= n - 1
        count += 1
    return count


assert hamming_weight(11) == 3
assert hamming_weight(128) == 1
```

## Complexity

- **Time:** `O(k)` where `k` is the number of set bits (at most bit width).
- **Space:** `O(1)`.
