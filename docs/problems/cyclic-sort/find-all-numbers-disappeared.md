# Find all numbers disappeared in an array

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

Given an array `nums` of `n` integers where `nums[i]` is in `[1, n]`, return an array of all the integers in `[1, n]` that do **not** appear in `nums`.

Could you do it without extra space and in `O(n)` runtime? (Marking indices in-place is the usual trick.)

## Examples

**Example 1**

- `nums = [4, 3, 2, 7, 8, 2, 3, 1]`
- Output: `[5, 6]` (order may vary)

**Example 2**

- `nums = [1, 1]` → `[2]`

## Approach (beginner friendly)

For each value `x`, mark index `x - 1` as “seen” by flipping the sign negative (or adding `n`). Numbers whose slots stay positive never had a visitor.

**Two conceptual passes:** one to mark, one to collect missing indices.

## Solution (Python)

```python
def find_disappeared_numbers(nums: list[int]) -> list[int]:
    n = len(nums)
    for x in nums:
        i = abs(x) - 1
        nums[i] = -abs(nums[i])

    return [i + 1 for i in range(n) if nums[i] > 0]


def find_disappeared_numbers_copy(nums: list[int]) -> list[int]:
    """Non-mutating wrapper for tests."""
    return find_disappeared_numbers(nums.copy())


out = find_disappeared_numbers_copy([4, 3, 2, 7, 8, 2, 3, 1])
assert sorted(out) == [5, 6]
assert find_disappeared_numbers_copy([1, 1]) == [2]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra besides the output list (input is mutated in the in-place version).
