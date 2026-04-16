# Sort array by parity

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given an integer array `nums`, move all **even** integers at the beginning of the array followed by all **odd** integers.

Return **any** answer array that satisfies this condition (relative order among evens and among odds does **not** need to be preserved unless asked).

## Examples

**Example 1**

- `nums = [3, 1, 2, 4]`
- One valid output: `[2, 4, 3, 1]` or `[4, 2, 1, 3]`

**Example 2**

- `nums = [0]` → `[0]`

## Approach (beginner friendly)

**Two-pass fill into a new list** (or pre-sized output):

1. First scan: append all even values.
2. Second scan: append all odd values.

This is the clearest “two-pass scanning” story. (An in-place **two-pointer** partition is also common—mention it as an alternative.)

## Solution (Python)

```python
def sort_array_by_parity(nums: list[int]) -> list[int]:
    evens = [x for x in nums if x % 2 == 0]
    odds = [x for x in nums if x % 2 != 0]
    return evens + odds


def is_valid_partition(nums: list[int], out: list[int]) -> bool:
    seen_even = True
    for x in out:
        if x % 2 == 0:
            if not seen_even:
                return False
        else:
            seen_even = False
    return sorted(out) == sorted(nums)


out = sort_array_by_parity([3, 1, 2, 4])
assert is_valid_partition([3, 1, 2, 4], out)
assert sort_array_by_parity([0]) == [0]
```

## Complexity

- **Time:** `O(n)` — two linear scans.
- **Space:** `O(n)` for the output (or `O(1)` extra if partitioning in place with a different technique).
