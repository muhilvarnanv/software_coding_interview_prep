# Find all numbers disappeared in an array

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

Given an array `nums` of `n` integers where `nums[i]` is in `[1, n]`, return an array of all the integers in `[1, n]` that do **not** appear in `nums`.

Could you do it without extra space and in `O(n)` runtime? **Cyclic sort** (swap each value toward index `value - 1`) is a common in-place approach; index negation is another.

## Examples

**Example 1**

- `nums = [4, 3, 2, 7, 8, 2, 3, 1]`
- Output: `[5, 6]` (order may vary)

**Example 2**

- `nums = [1, 1]` → `[2]`

## Approach (beginner friendly)

Because every element lies in `[1, n]`, value `v` “belongs” at index `v - 1`. Walk with index `i`: if `nums[i]` is not already equal to `nums[nums[i] - 1]`, **swap** `nums[i]` into its correct slot and try again (do not advance `i` until `nums[i]` is either in place or a duplicate blocked a swap). When every value that appears has been routed, each index `j` with `nums[j] != j + 1` means `j + 1` is missing.

**Two conceptual phases:** cyclic-sort placement, then one linear scan to collect `j + 1` where the slot is wrong.

## Solution (Python)

```python
def findDisappearedNumbers(nums):
    i = 0
    n = len(nums)

    while i < n:
        correct = nums[i] - 1

        # Place nums[i] at correct position
        if nums[i] != nums[correct]:
            nums[i], nums[correct] = nums[correct], nums[i]
        else:
            i += 1

    # Find missing numbers
    result = []
    for i in range(n):
        if nums[i] != i + 1:
            result.append(i + 1)

    return result


def findDisappearedNumbersCopy(nums):
    """Non-mutating wrapper for tests."""
    return findDisappearedNumbers(nums.copy())


out = findDisappearedNumbersCopy([4, 3, 2, 7, 8, 2, 3, 1])
assert sorted(out) == [5, 6]
assert findDisappearedNumbersCopy([1, 1]) == [2]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra besides the output list (input is mutated in the in-place version).
