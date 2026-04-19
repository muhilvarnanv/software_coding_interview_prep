# Find all duplicates in an array

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

Given an integer array `nums` of length `n` where each `nums[i]` is in `[1, n]`, every integer in the array appears **once or twice**. Return a list of all integers that appear **twice** (order does not matter).

You may mutate the input.

## Examples

**Example 1**

- `nums = [4, 3, 2, 7, 8, 2, 3, 1]` → `[2, 3]` (or `[3, 2]`)
- Explanation: Values `2` and `3` each appear twice; every other value in `1..8` appears once.

**Example 2**

- `nums = [1, 1, 2]` → `[1]`
- Explanation: `1` is duplicated while `2` appears only once, so only `1` belongs in the answer list.

## Approach (beginner friendly)

Same routing idea as [find all numbers disappeared](find-all-numbers-disappeared.md): value `v` belongs at index `v - 1`. Swap until `nums[i]` matches its slot-mate or is blocked by an equal value (duplicate). After one pass, any index `j` with `nums[j] != j + 1` holds a **duplicate** at `nums[j]` (there may be several such indices).

## Solution (Python)

```python
def find_all_duplicates(nums: list[int]) -> list[int]:
    i = 0
    n = len(nums)
    while i < n:
        correct = nums[i] - 1
        if nums[i] != nums[correct]:
            nums[i], nums[correct] = nums[correct], nums[i]
        else:
            i += 1

    return [nums[j] for j in range(n) if nums[j] != j + 1]


def find_all_duplicates_copy(nums: list[int]) -> list[int]:
    return find_all_duplicates(nums.copy())


out = find_all_duplicates_copy([4, 3, 2, 7, 8, 2, 3, 1])
assert sorted(out) == [2, 3]
assert find_all_duplicates_copy([1, 1, 2]) == [1]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra besides the output list (input is mutated in the in-place version).
