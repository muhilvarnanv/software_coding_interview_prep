# Minimum size subarray sum

**Topic:** [Sliding window problems](index.md) · **Pattern:** [Sliding window](../../code-patterns/sliding-window.md)

## Problem

Given an array `nums` of **positive** integers and a positive integer `target`, find the **smallest length** of a contiguous subarray whose sum is **greater than or equal to** `target`. If no such subarray exists, return `0`.

## Examples

**Example 1**

- Input: `nums = [2, 3, 1, 2, 4, 3]`, `target = 7`
- Output: `2`
- Explanation: `[4, 3]` has sum `7` and length `2` (longer windows also reach `7`, but none are shorter than `2`).

**Example 2**

- Input: `nums = [1, 1, 1, 1, 1, 1, 1, 1]`, `target = 11`
- Output: `0`

## Approach (beginner friendly)

Because all numbers are **positive**, when you extend the window to the right the sum **only grows**, and when you shrink from the left the sum **only shrinks**. That monotone behavior is perfect for sliding window.

Algorithm:

1. Grow `right`, adding to `current_sum`, until `current_sum >= target` (or `right` reaches the end).
2. While valid, record the length and try to **shrink** from `left` to find a shorter valid window.
3. Move `right` again.

This is the classic **shortest window** template.

## Solution (Python)

```python
def min_subarray_len(target: int, nums: list[int]) -> int:
    n = len(nums)
    left = 0
    current_sum = 0
    best = n + 1  # "infinity" for min length

    for right in range(n):
        current_sum += nums[right]

        while current_sum >= target:
            best = min(best, right - left + 1)
            current_sum -= nums[left]
            left += 1

    return 0 if best == n + 1 else best


assert min_subarray_len(7, [2, 3, 1, 2, 4, 3]) == 2
assert min_subarray_len(11, [1, 1, 1, 1, 1, 1, 1, 1]) == 0
```

## Complexity

- **Time:** `O(n)` — each element is added and removed at most once.
- **Space:** `O(1)`.
