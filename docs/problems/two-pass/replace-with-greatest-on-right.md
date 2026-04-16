# Replace elements with greatest element on right side

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given an integer array `nums`, return an array `answer` where `answer[i]` is the **maximum** among `nums[i+1], nums[i+2], ..., nums[n-1]`. For the last element, use `-1` (no elements to the right).

## Examples

**Example 1**

- `nums = [17, 18, 5, 4, 6, 1]`
- Output: `[18, 6, 6, 6, 1, -1]`

**Example 2**

- `nums = [400]`
- Output: `[-1]`

## Approach (beginner friendly)

You cannot know “max to the right of `i`” until you have scanned **everything right of `i``.**

**Pass 1 (right to left):** track `running_max` and fill `answer[i]` as the max seen **strictly to the right** so far (before incorporating `nums[i]` into the running max for the next left index).

Alternatively: first build suffix maxima in an array, then read it—same idea, two conceptual passes.

## Solution (Python)

```python
def replace_elements(nums: list[int]) -> list[int]:
    n = len(nums)
    answer = [0] * n
    running_max = -1  # no elements to the right of last index

    for i in range(n - 1, -1, -1):
        answer[i] = running_max
        running_max = max(running_max, nums[i])

    return answer


assert replace_elements([17, 18, 5, 4, 6, 1]) == [18, 6, 6, 6, 1, -1]
assert replace_elements([400]) == [-1]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra besides the output array.
