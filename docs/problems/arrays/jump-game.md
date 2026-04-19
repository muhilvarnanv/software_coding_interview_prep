# Jump game

**Topic:** [Arrays](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Start at index `0`. From index `i` you may jump forward up to `nums[i]` steps (any positive jump length up to that limit). Values are non-negative. Return whether you can reach the **last** index.

## Examples

**Example 1**

- Input: `nums = [2, 3, 1, 1, 4]`
- Output: `True`
- Explanation: Jump from `0` to `1` (allowed because `nums[0] = 2`). From `1` you can reach index `4` in one jump because `nums[1] = 3` and the gap is `3`.

**Example 2**

- Input: `nums = [3, 2, 1, 0, 4]`
- Output: `False`
- Explanation: You can reach index `3`, but `nums[3] = 0` traps you there; you never reach index `4`.

## Approach (beginner friendly)

Track the **farthest index** you can still touch. Scan `i` from `0`. If `i` is ever greater than that farthest reach, you cannot stand on `i`, so return `False`. Otherwise update farthest with `i + nums[i]`.

## Solution (Python)

```python
def can_jump(nums: list[int]) -> bool:
    reach = 0
    for i, x in enumerate(nums):
        if i > reach:
            return False
        reach = max(reach, i + x)
    return True


assert can_jump([2, 3, 1, 1, 4]) is True
assert can_jump([3, 2, 1, 0, 4]) is False
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
