# Reverse bits

**Topic:** [Bit manipulation problems](index.md) · **Pattern:** [Bit manipulation](../../code-patterns/bit-manipulation.md)

## Problem

Reverse bits of a given **32-bit unsigned** integer.

## Examples

**Example 1**

- Input: `n = 43261596` (binary `00000010100101000001111010011100`)
- Output: `964176192` (binary `00111001011110000010100101000000`)
- Explanation: Reversing bits mirrors the 32-bit pattern left-to-right, so the high bit of the input becomes the low bit of the output (and vice versa), which turns that specific bit pattern into `964176192`.

For tests below, use small numbers and masks to keep the example readable.

## Approach (beginner friendly)

Treat the integer as 32 bits. Read from the **least significant** side and push into the result from the **most significant** side of the answer: `result = (result << 1) | (n & 1)`, then `n >>= 1`, repeat 32 times.

## Solution (Python)

```python
def reverse_bits(n: int) -> int:
    result = 0
    for _ in range(32):
        result = (result << 1) | (n & 1)
        n >>= 1
    return result


# 43261596 is a known LeetCode example
assert reverse_bits(43261596) == 964176192
```

## Complexity

- **Time:** `O(1)` — fixed 32 iterations.
- **Space:** `O(1)`.
