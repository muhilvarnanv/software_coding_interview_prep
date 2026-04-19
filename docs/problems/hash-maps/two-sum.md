# Two sum

**Topic:** [Hash maps](index.md) · **Pattern:** [Frequency maps](../../hash-tables/frequency-maps.md)

## Problem

Given an array of integers `nums` and an integer `target`, return **indices** `i != j` with `nums[i] + nums[j] == target`. Exactly one solution exists.

## Examples

**Example 1**

- Input: `nums = [2, 7, 11, 15]`, `target = 9`
- Output: `[0, 1]` (order may vary)
- Explanation: `nums[0] + nums[1] = 2 + 7 = 9`, which matches the target.

**Example 2**

- Input: `nums = [3, 2, 4]`, `target = 6`
- Output: `[1, 2]`
- Explanation: `2 + 4 = 6`; those values sit at indices `1` and `2`.

## Approach (beginner friendly)

Scan left to right. For each value `x`, check whether `target - x` was seen before using a hash map `value → index`. If yes, return the pair of indices; otherwise store `x` and its index.

## Solution (Python)

```python
def two_sum(nums: list[int], target: int) -> list[int]:
    seen: dict[int, int] = {}
    for i, x in enumerate(nums):
        need = target - x
        if need in seen:
            return [seen[need], i]
        seen[x] = i
    return []


assert two_sum([2, 7, 11, 15], 9) == [0, 1]
assert two_sum([3, 2, 4], 6) == [1, 2]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)` for the map.
