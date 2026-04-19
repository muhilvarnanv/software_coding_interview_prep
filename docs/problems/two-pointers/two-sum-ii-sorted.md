# Two Sum II — input array is sorted

**Topic:** [Two pointers problems](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Given a **1-indexed** integer array `numbers` that is sorted in **non-decreasing** order and an integer `target`, return the **1-indexed** pair `[i, j]` with `i < j` such that `numbers[i] + numbers[j] == target`. It is guaranteed that exactly one solution exists.

## Examples

**Example 1**

- Input: `numbers = [2, 7, 11, 15]`, `target = 9`
- Output: `[1, 2]`
- Explanation: `numbers[1] + numbers[2] == 2 + 7 == 9`.

**Example 2**

- Input: `numbers = [2, 3, 4]`, `target = 6`
- Output: `[1, 3]`
- Explanation: `numbers[1] + numbers[3]` in 1-based wording is `2 + 4 = 6` (indices `0` and `2` in 0-based code, returned as `[1, 3]`).

## Approach (beginner friendly)

Put one pointer at the **start** (small values) and one at the **end** (large values). Look at the sum:

- If the sum is **too small**, you need a larger value → move the **left** pointer right.
- If the sum is **too large**, move the **right** pointer left.

Sorted order is what makes this rule safe: you never skip the only possible pairing because each move is the smallest possible adjustment in the needed direction.

## Solution (Python)

```python
def two_sum_sorted(numbers: list[int], target: int) -> list[int]:
    left, right = 0, len(numbers) - 1

    while left < right:
        s = numbers[left] + numbers[right]
        if s == target:
            return [left + 1, right + 1]  # 1-indexed
        if s < target:
            left += 1
        else:
            right -= 1

    return []  # guaranteed one solution in problem statement


assert two_sum_sorted([2, 7, 11, 15], 9) == [1, 2]
assert two_sum_sorted([2, 3, 4], 6) == [1, 3]
```

## Complexity

- **Time:** `O(n)` — each pointer moves at most `n` steps.
- **Space:** `O(1)`.
