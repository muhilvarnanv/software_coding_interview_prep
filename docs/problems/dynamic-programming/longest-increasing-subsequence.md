# Longest increasing subsequence

**Topic:** [Dynamic programming](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Return the length of the **longest strictly increasing** subsequence (not necessarily contiguous).

## Examples

**Example 1**

- Input: `[10, 9, 2, 5, 3, 7, 101, 18]`
- Output: `4`
- Explanation: One longest subsequence is `2, 3, 7, 101` (length `4`).

**Example 2**

- Input: `[0, 1, 0, 3, 2, 3]`
- Output: `4`
- Explanation: For example `0, 1, 2, 3` at appropriate indices forms an increasing subsequence of length `4`.

## Approach (beginner friendly)

`dp[i]` = LIS length **ending** at `i`. For each `j < i` with `nums[j] < nums[i]`, `dp[i] = max(dp[i], dp[j] + 1)`. Answer is `max(dp)`.

## Solution (Python)

```python
def length_of_lis(nums: list[int]) -> int:
    if not nums:
        return 0
    n = len(nums)
    dp = [1] * n
    for i in range(1, n):
        for j in range(i):
            if nums[j] < nums[i]:
                dp[i] = max(dp[i], dp[j] + 1)
    return max(dp)


assert length_of_lis([10, 9, 2, 5, 3, 7, 101, 18]) == 4
assert length_of_lis([0, 1, 0, 3, 2, 3]) == 4
```

## Complexity

- **Time:** `O(n^2)`.
- **Space:** `O(n)`.
