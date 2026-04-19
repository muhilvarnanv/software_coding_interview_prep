# House robber

**Topic:** [Dynamic programming](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Non-negative money in a line of houses. You cannot rob two **adjacent** houses. Maximize the total money robbed.

## Examples

**Example 1**

- Input: `[1, 2, 3, 1]`
- Output: `4`
- Explanation: Rob houses `0` and `2` (`1 + 3`); skipping neighbors beats robbing `2` and `3` only (`3+1=4` same here) — optimal is `4`.

**Example 2**

- Input: `[2, 7, 9, 3, 1]`
- Output: `12`
- Explanation: Best is `2 + 9 + 1 = 12`, skipping adjacent high values where needed.

## Approach (beginner friendly)

Let `take` be best score **including** current house; `skip` best **excluding** it. Update `take = nums[i] + prev_skip`, `skip = max(prev_take, prev_skip)` each step.

## Solution (Python)

```python
def rob(nums: list[int]) -> int:
    take = skip = 0
    for x in nums:
        take, skip = x + skip, max(take, skip)
    return max(take, skip)


assert rob([1, 2, 3, 1]) == 4
assert rob([2, 7, 9, 3, 1]) == 12
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
