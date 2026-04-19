# Missing number (XOR)

**Topic:** [Bit manipulation problems](index.md) · **Pattern:** [Bit manipulation](../../code-patterns/bit-manipulation.md)

## Problem

Given an array `nums` containing `n` **distinct** numbers taken from `0, 1, ..., n`, find the one number in that range that is **missing** from the array.

## Examples

**Example 1**

- `nums = [3, 0, 1]` → `2`
- Explanation: The array should contain each number from `0` to `3` once, but `2` is absent, so `2` is the missing value.

**Example 2**

- `nums = [0, 1]` → `2`
- Explanation: With two slots you expect `0` and `1`, but the full range is `0..2`, so the missing label is `2`.

## Approach (beginner friendly)

XOR all indices `0..n-1` and all values in `nums`, **and** include `n` as an extra index candidate (since exactly one value from `0..n` is absent, there are `n` slots and `n+1` possible numbers—classic formulation XORs numbers `0..n` against indices).

Simpler template: `xor_all = 0`; for `i, v` in enumerate(nums): `xor_all ^= i ^ v`; then `xor_all ^= len(nums)` (which stands in for `n`).

Every present number cancels with its index except the missing value.

## Solution (Python)

```python
def missing_number(nums: list[int]) -> int:
    x = len(nums)
    for i, v in enumerate(nums):
        x ^= i ^ v
    return x


assert missing_number([3, 0, 1]) == 2
assert missing_number([0, 1]) == 2
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
