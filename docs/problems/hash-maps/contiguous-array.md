# Contiguous array

**Topic:** [Hash maps](index.md) · **Pattern:** [Frequency maps](../../hash-tables/frequency-maps.md)

## Problem

Given a binary array `nums` (`0` and `1` only), return the length of the **longest** contiguous subarray with an **equal** number of `0`s and `1`s.

## Examples

**Example 1**

- Input: `nums = [0, 1]`
- Output: `2`
- Explanation: The whole array has one `0` and one `1`, so its length `2` is valid.

**Example 2**

- Input: `nums = [0, 1, 0]`
- Output: `2`
- Explanation: Either `[0, 1]` or `[1, 0]` balances; you cannot span all three because counts would be `2` vs `1`.

## Approach (beginner friendly)

Turn `0` into `-1` and track the **running sum**. If the sum returns to a value you saw before, the slice **between** those positions has equal `0` and `1` counts. Store the **first index** of each sum in a map; maximize `current_index - first_index`.

## Solution (Python)

```python
def find_max_length(nums: list[int]) -> int:
    first: dict[int, int] = {0: -1}
    bal = 0
    best = 0
    for i, x in enumerate(nums):
        bal += 1 if x == 1 else -1
        if bal in first:
            best = max(best, i - first[bal])
        else:
            first[bal] = i
    return best


assert find_max_length([0, 1]) == 2
assert find_max_length([0, 1, 0]) == 2
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)` for the map.
