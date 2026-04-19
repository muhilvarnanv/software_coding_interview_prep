# Find pivot index

**Topic:** [Prefix sum problems](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Given an integer array `nums`, return the **smallest index** `p` such that the sum of all numbers **strictly to the left** of `p` equals the sum of all numbers **strictly to the right** of `p`. If no such index exists, return `-1`.

## Examples

**Example 1**

- Input: `nums = [1, 7, 3, 6, 5, 6]`
- Output: `3`
- Explanation: Left sum of index `3` is `1 + 7 + 3 = 11`; right sum is `5 + 6 = 11`.

**Example 2**

- Input: `nums = [1, 2, 3]`
- Output: `-1`
- Explanation: At index `0` the right side sums to `5`, not `0`. At index `1` left is `1` and right is `3`. At index `2` left is `3` and right is `0`. No index balances, so return `-1`.

## Approach (beginner friendly)

Let `total` be the sum of the whole array. As you scan `p` from left to right, keep `left_sum`, the sum of elements before `p`.

The right sum is `total - left_sum - nums[p]`. You want those sides to match, which is the same as checking **`2 * left_sum + nums[p] == total`**.

No extra prefix array is required—just one pass after computing `total`.

## Solution (Python)

```python
def pivot_index(nums: list[int]) -> int:
    total = sum(nums)
    left_sum = 0

    for i, x in enumerate(nums):
        if 2 * left_sum + x == total:
            return i
        left_sum += x

    return -1


assert pivot_index([1, 7, 3, 6, 5, 6]) == 3
assert pivot_index([1, 2, 3]) == -1
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
