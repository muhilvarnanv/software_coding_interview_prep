# Find minimum in rotated sorted array

**Topic:** [Arrays](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

An array was sorted ascending, then **rotated** at an unknown cut point. All values are **distinct**. Return the minimum element.

## Examples

**Example 1**

- Input: `nums = [3, 4, 5, 1, 2]`
- Output: `1`
- Explanation: The sorted order was `[1, 2, 3, 4, 5]`; after rotation the smallest value `1` sits in the middle chunk, and it is still the global minimum.

**Example 2**

- Input: `nums = [4, 5, 6, 7, 0, 1, 2]`
- Output: `0`
- Explanation: The rotation placed `0` in the array; every other number is larger, so `0` is the answer.

## Approach (beginner friendly)

Binary search: compare `nums[mid]` to `nums[right]`. If `nums[mid] > nums[right]`, the smallest value must live strictly to the **right** of `mid` (the rotation “kink” is there). Otherwise the minimum is at `mid` or to its left.

## Solution (Python)

```python
def find_min(nums: list[int]) -> int:
    left, right = 0, len(nums) - 1
    while left < right:
        mid = (left + right) // 2
        if nums[mid] > nums[right]:
            left = mid + 1
        else:
            right = mid
    return nums[left]


assert find_min([3, 4, 5, 1, 2]) == 1
assert find_min([4, 5, 6, 7, 0, 1, 2]) == 0
```

## Complexity

- **Time:** `O(log n)`.
- **Space:** `O(1)`.
