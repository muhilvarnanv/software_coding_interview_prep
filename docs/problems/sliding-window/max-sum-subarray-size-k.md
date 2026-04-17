# Maximum sum of subarray of size k

**Topic:** [Sliding window problems](index.md) · **Pattern:** [Sliding window](../../code-patterns/sliding-window.md)

## Problem

You are given an integer array `nums` and a positive integer `k`. Return the **maximum** sum among all contiguous subarrays of **length exactly** `k`.

If `len(nums) < k`, you can return `0` (or follow your interviewer’s convention).

## Examples

**Example 1**

- Input: `nums = [1, 4, 2, 10, 23, 3, 1, 0, 20]`, `k = 3`
- Output: `36`
- Explanation: among all length-`3` contiguous subarrays, `[10, 23, 3]` has the largest sum (`10 + 23 + 3 = 36`).

**Example 2**

- Input: `nums = [5, 1, 2]`, `k = 2`
- Output: `6` (subarray `[5, 1]`)

## Approach (beginner friendly)

The slow way tries every window of length `k` and adds `k` numbers each time → lots of repeated work.

**Sliding window:** compute the sum of the first window `[0 .. k-1]`. Then for each next step: **subtract** the element that left the window (leftmost of the previous window) and **add** the new element on the right. Each slide is **O(1)** updates. One pass → **O(n)** time, **O(1)** extra space.

## Solution (Python)

```python
def max_sum_subarray(nums: list[int], k: int) -> int:
    if k == 0 or len(nums) < k:
        return 0

    window_sum = sum(nums[:k])
    best = window_sum

    for right in range(k, len(nums)):
        window_sum += nums[right] - nums[right - k]
        best = max(best, window_sum)

    return best


assert max_sum_subarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 3) == 36
assert max_sum_subarray([5, 1, 2], 2) == 6
```

## Complexity

- **Time:** `O(n)` — each index enters and leaves the window once.
- **Space:** `O(1)` — only a few integer variables.
