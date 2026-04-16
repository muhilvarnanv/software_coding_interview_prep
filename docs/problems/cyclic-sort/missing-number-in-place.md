# Missing number with cyclic swaps (0 … n)

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

Given an array `nums` of `n` **distinct** integers in the range `[0, n]`, return the **only** number in that range missing from the array.

This is the classic “missing number” setup; here we solve it with **in-place cyclic swaps** (no XOR), to showcase the routing pattern.

## Examples

**Example 1**

- `nums = [3, 0, 1]` → `2`

**Example 2**

- `nums = [0, 1]` → `2`

## Approach (beginner friendly)

Any value `v` with `v < n` belongs at index `v`. While `nums[i]` is out of place and the swap partner is not already correct, **swap** `nums[i]` with `nums[nums[i]]`.

After routing, either some index `i` has `nums[i] != i` (missing is `i`), or every `0..n-1` is present and the missing number is **`n`**.

## Solution (Python)

```python
def missing_number(nums: list[int]) -> int:
    n = len(nums)
    i = 0
    while i < n:
        v = nums[i]
        if v < n and nums[v] != v:
            nums[i], nums[v] = nums[v], v
        else:
            i += 1  # either already placed, or `v == n` (no home index here)

    for i in range(n):
        if nums[i] != i:
            return i
    return n


def missing_number_copy(nums: list[int]) -> int:
    return missing_number(nums.copy())


assert missing_number_copy([3, 0, 1]) == 2
assert missing_number_copy([0, 1]) == 2
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra (mutates input while solving).
