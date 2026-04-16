# Product of array except self

**Topic:** [Prefix sum problems](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Given an integer array `nums`, return an array `answer` where `answer[i]` is the **product of all elements** of `nums` **except** `nums[i]`.

You must run in **linear time** and without using division (the usual interview constraint).

## Examples

**Example 1**

- Input: `nums = [1, 2, 3, 4]`
- Output: `[24, 12, 8, 6]`

**Example 2**

- Input: `nums = [-1, 1, 0, -3, 3]`
- Output: `[0, 0, 9, 0, 0]`

## Approach (beginner friendly)

Think of each `answer[i]` as:

\[
(\text{product of everything left of } i) \times (\text{product of everything right of } i)
\]

First pass: build **prefix products** left to right. Second pass: multiply by **suffix products** right to left. You can do this with one output array: store prefix products first, then update with suffix on the fly.

This is the **multiplicative** cousin of prefix sums—same “carry running aggregate along the line” idea.

## Solution (Python)

```python
def product_except_self(nums: list[int]) -> list[int]:
    n = len(nums)
    answer = [1] * n

    prefix = 1
    for i in range(n):
        answer[i] = prefix
        prefix *= nums[i]

    suffix = 1
    for i in range(n - 1, -1, -1):
        answer[i] *= suffix
        suffix *= nums[i]

    return answer


assert product_except_self([1, 2, 3, 4]) == [24, 12, 8, 6]
assert product_except_self([-1, 1, 0, -3, 3]) == [0, 0, 9, 0, 0]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra besides the output array (the output does not count toward extra space in the usual interview convention).
