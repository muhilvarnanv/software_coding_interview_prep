# Merge sorted array

**Topic:** [Two pointers problems](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

You are given two integer arrays `nums1` and `nums2`, sorted in **non-decreasing** order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

`nums1` has length `m + n`, with the last `n` positions set to placeholders (often `0`). **Merge** `nums2` into `nums1` so that `nums1` becomes sorted in non-decreasing order.

You must solve it **in place**—do not return a new array; modify `nums1`.

## Examples

**Example 1**

- Input: `nums1 = [1, 2, 3, 0, 0, 0]`, `m = 3`, `nums2 = [2, 5, 6]`, `n = 3`
- After merge: `nums1` should be `[1, 2, 2, 3, 5, 6]`

**Example 2**

- Input: `nums1 = [1]`, `m = 1`, `nums2 = []`, `n = 0`
- After merge: `[1]`

## Approach (beginner friendly)

Merging from the **front** overwrites unread elements in `nums1`. Instead, place the **largest** element at the **back** of the combined space:

- Three pointers: `i = m - 1` (last real element of `nums1`), `j = n - 1` (last of `nums2`), `k = m + n - 1` (write position).

Each step, copy the larger of `nums1[i]` and `nums2[j]` to `nums1[k]`, then decrement the source and `k`.

If `nums2` finishes first, the remaining `nums1` prefix is already in place. If `nums1` finishes first, flush the rest of `nums2`.

## Solution (Python)

```python
def merge(nums1: list[int], m: int, nums2: list[int], n: int) -> None:
    i, j, k = m - 1, n - 1, m + n - 1

    while j >= 0:
        if i >= 0 and nums1[i] > nums2[j]:
            nums1[k] = nums1[i]
            i -= 1
        else:
            nums1[k] = nums2[j]
            j -= 1
        k -= 1


a = [1, 2, 3, 0, 0, 0]
merge(a, 3, [2, 5, 6], 3)
assert a == [1, 2, 2, 3, 5, 6]

b = [1]
merge(b, 1, [], 0)
assert b == [1]
```

## Complexity

- **Time:** `O(m + n)` — each element is written once.
- **Space:** `O(1)` extra variables.
