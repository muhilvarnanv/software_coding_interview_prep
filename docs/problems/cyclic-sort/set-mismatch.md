# Set mismatch

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

You have a set `1..n` but one number was **duplicated** and another number is **missing**—so the array has length `n` and values are in `[1, n]`.

Return `[duplicate, missing]` in that order.

## Examples

**Example 1**

- `nums = [1, 2, 2, 4]` → `[2, 3]`
- Explanation: For length `4` you want `{1,2,3,4}`. `2` appears twice, and `3` never appears, so return `[duplicate, missing] = [2, 3]`.

**Example 2**

- `nums = [1, 1]` → `[1, 2]`
- Explanation: You should have `{1, 2}` but you have two copies of `1`, so duplicate is `1` and missing is `2`.

## Approach (beginner friendly)

Use **cyclic sort routing**: while `nums[i]` is not in its home `nums[nums[i]-1]`, swap. After routing, the slot where `nums[i] != i + 1` reveals **duplicate** (`nums[i]`) and **missing** (`i + 1`).

## Solution (Python)

```python
def find_error_nums(nums: list[int]) -> list[int]:
    n = len(nums)
    i = 0
    while i < n:
        j = nums[i] - 1
        if nums[i] != nums[j]:
            nums[i], nums[j] = nums[j], nums[i]
        else:
            i += 1

    for i in range(n):
        if nums[i] != i + 1:
            return [nums[i], i + 1]
    return []  # unreachable for valid input


def test_once(nums: list[int]) -> list[int]:
    return find_error_nums(nums.copy())


assert test_once([1, 2, 2, 4]) == [2, 3]
assert test_once([1, 1]) == [1, 2]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` besides the input copy in tests.
