# Subarray sums divisible by k

**Topic:** [Prefix sum problems](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Given an integer array `nums` and an integer `k`, return the number of **non-empty contiguous** subarrays whose sum is **divisible by** `k`.

## Examples

**Example 1**

- Input: `nums = [4, 5, 0, -2, -3, 1]`, `k = 5`
- Output: `7`

**Example 2**

- Input: `nums = [5]`, `k = 9`
- Output: `0`

## Approach (beginner friendly)

Work with **prefix sums** `cur` as you walk the array. A subarray ending at index `i` has sum divisible by `k` if the **difference** of two prefix sums is divisible by `k`.

In modular arithmetic, store **remainders** of prefix sums mod `k`, adjusted to be in `[0, k - 1]` for negative sums in Python using `(cur % k + k) % k`.

Let `r` be the remainder of the current prefix sum modulo `k`. Any earlier prefix with the **same** remainder forms an ending subarray whose sum is a multiple of `k`. Add `counts[r]` to the answer, then increment `counts[r]`. This is the same “difference of prefixes” picture as [subarray sum equals k](subarray-sum-equals-k.md), but keys are **remainders** instead of raw prefix values.

## Solution (Python)

```python
from collections import defaultdict


def subarrays_div_by_k(nums: list[int], k: int) -> int:
    counts: defaultdict[int, int] = defaultdict(int)
    counts[0] = 1
    cur = 0
    ans = 0

    for x in nums:
        cur += x
        r = cur % k
        ans += counts[r]
        counts[r] += 1

    return ans


assert subarrays_div_by_k([4, 5, 0, -2, -3, 1], 5) == 7
assert subarrays_div_by_k([5], 9) == 0
```

**Note:** Python’s `%` already returns a nonnegative remainder for negative `cur`, but `(cur % k + k) % k` is the portable idiom across languages—worth saying aloud in interviews.

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(k)` map size at most `k` distinct remainders.
