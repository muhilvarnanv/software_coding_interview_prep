# Range sum query — immutable

**Topic:** [Prefix sum problems](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Design a class that wraps an integer array `nums` and supports:

- `sumRange(left, right)` → sum of elements `nums[left]` through `nums[right]` **inclusive**.

The array does **not** change after construction.

## Examples

**Example 1**

- `nums = [-2, 0, 3, -5, 2, -1]`
- `sumRange(0, 2)` → `1` (because `-2 + 0 + 3`)
- `sumRange(2, 5)` → `-1`
- `sumRange(0, 5)` → `-3`

Why these answers:

- `sumRange(0, 2)` adds `nums[0]` through `nums[2]`: `-2 + 0 + 3 = 1`.
- `sumRange(2, 5)` adds `3 + (-5) + 2 + (-1) = -1`.
- `sumRange(0, 5)` adds every element in the array, which totals `-3`.

## Approach (beginner friendly)

A range sum is “everything up to `right`” minus “everything before `left`.”

Build a **prefix sum** array `pref` where `pref[i]` is the sum of `nums[0]` … `nums[i - 1]`, with `pref[0] = 0` (the “leading zero” trick). Then **`sumRange(left, right) = pref[right + 1] - pref[left]`**—subtract the sum before `left` from the sum through `right`.

One subtraction per query after `O(n)` preprocessing.

## Solution (Python)

```python
class NumArray:
    def __init__(self, nums: list[int]):
        self.pref = [0] * (len(nums) + 1)
        for i, x in enumerate(nums):
            self.pref[i + 1] = self.pref[i] + x

    def sum_range(self, left: int, right: int) -> int:
        return self.pref[right + 1] - self.pref[left]


na = NumArray([-2, 0, 3, -5, 2, -1])
assert na.sum_range(0, 2) == 1
assert na.sum_range(2, 5) == -1
assert na.sum_range(0, 5) == -3
```

## Complexity

- **Build:** `O(n)` time, `O(n)` space for `pref`.
- **Each query:** `O(1)` time, `O(1)` extra space per call.
