# First missing positive

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

Given an unsorted integer array `nums`, return the **smallest positive** integer that is **not present** in `nums`.

You must run in **O(n)** time and use **O(1)** extra space (modify the input if needed).

## Examples

**Example 1**

- `nums = [1, 2, 0]` → `3`

**Example 2**

- `nums = [3, 4, -1, 1]` → `2`

**Example 3**

- `nums = [7, 8, 9, 11, 12]` → `1`

## Approach (beginner friendly)

Ignore non-positive numbers and numbers larger than `n` — they cannot be the answer for an array of length `n`.

For each index `i`, **swap** `nums[i]` to index `nums[i] - 1` while `nums[i]` is in `[1, n]` and not already correct (`nums[nums[i]-1] != nums[i]`). This routes each value to its “mailbox.”

A final scan: first `i` where `nums[i] != i + 1` means `i + 1` is missing; if all match, answer is `n + 1`.

## Solution (Python)

```python
def first_missing_positive(nums: list[int]) -> int:
    n = len(nums)
    i = 0
    while i < n:
        v = nums[i]
        if 1 <= v <= n and nums[v - 1] != v:
            nums[i], nums[v - 1] = nums[v - 1], v
        else:
            i += 1

    for i in range(n):
        if nums[i] != i + 1:
            return i + 1
    return n + 1


assert first_missing_positive([1, 2, 0]) == 3
assert first_missing_positive([3, 4, -1, 1]) == 2
assert first_missing_positive([7, 8, 9, 11, 12]) == 1
```

## Complexity

- **Time:** `O(n)` — each swap places at least one element correctly; each index is involved finitely many times.
- **Space:** `O(1)`.
