# Subarray sum equals k

**Topic:** [Prefix sum problems](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Given an integer array `nums` and an integer `k`, return the **number of non-empty contiguous subarrays** whose sum is exactly `k`.

The array may contain **negative** numbers and zeros.

## Examples

**Example 1**

- Input: `nums = [1, 2, 3]`, `k = 3`
- Output: `2`
- Explanation: `[3]` and `[1, 2]`.

**Example 2**

- Input: `nums = [1, -1, 0]`, `k = 0`
- Output: `3`
- Explanation: List every contiguous subarray and its sum: `[1] → 1`, `[-1] → -1`, `[0] → 0`, `[1, -1] → 0`, `[-1, 0] → -1`, `[1, -1, 0] → 0`. Exactly **three** of those sums equal `0`: the subarrays `[0]`, `[1, -1]`, and `[1, -1, 0]`.

## Approach (beginner friendly)

Let `prefix[j]` be the sum from `nums[0]` to `nums[j]` inclusive. The sum of subarray `nums[i..j]` equals `prefix[j] - prefix[i - 1]`.

You want `prefix[j] - prefix[i - 1] == k`, i.e. `prefix[i - 1] == prefix[j] - k`.

As you scan left to right, keep a running sum `cur` (this is `prefix[j]`). In a hash map, store **how many times** each earlier prefix value appeared. Add `count[cur - k]` to the answer, then increment `count[cur]`.

Initialize `count[0] = 1` so subarrays starting at index `0` are counted correctly.

## Solution (Python)

```python
from collections import defaultdict


def subarray_sum(nums: list[int], k: int) -> int:
    counts: defaultdict[int, int] = defaultdict(int)
    counts[0] = 1
    cur = 0
    ans = 0

    for x in nums:
        cur += x
        ans += counts[cur - k]
        counts[cur] += 1

    return ans


assert subarray_sum([1, 2, 3], 3) == 2
assert subarray_sum([1, -1, 0], 0) == 3
```

## Complexity

- **Time:** `O(n)` — one pass.
- **Space:** `O(n)` for the map in the worst case (many distinct prefix sums).
