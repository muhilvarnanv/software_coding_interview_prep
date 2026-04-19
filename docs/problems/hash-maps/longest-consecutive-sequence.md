# Longest consecutive sequence

**Topic:** [Hash maps](index.md) · **Pattern:** [Frequency maps](../../hash-tables/frequency-maps.md)

## Problem

Given an unsorted array of integers, return the length of the **longest run** of consecutive integers (values differ by `1`, duplicates do not extend length).

## Examples

**Example 1**

- Input: `nums = [100, 4, 200, 1, 3, 2]`
- Output: `4`
- Explanation: `1, 2, 3, 4` is a consecutive chain of length `4`. No longer chain exists.

**Example 2**

- Input: `nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]`
- Output: `9`
- Explanation: `0` through `8` all appear, so the longest consecutive stretch has length `9`.

## Approach (beginner friendly)

Put all numbers in a **set**. Only start counting from `x` if `x - 1` is **not** in the set (otherwise you are in the middle of a run). From each start, walk `x+1, x+2, ...` while present.

## Solution (Python)

```python
def longest_consecutive(nums: list[int]) -> int:
    s = set(nums)
    best = 0
    for x in s:
        if x - 1 in s:
            continue
        y = x
        while y + 1 in s:
            y += 1
        best = max(best, y - x + 1)
    return best


assert longest_consecutive([100, 4, 200, 1, 3, 2]) == 4
assert longest_consecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]) == 9
```

## Complexity

- **Time:** `O(n)` — each number is visited a constant number of times across all walks.
- **Space:** `O(n)` for the set.
