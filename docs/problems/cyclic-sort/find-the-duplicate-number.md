# Find the duplicate number

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

Given an array `nums` containing `n + 1` integers where each integer is in `[1, n]` **inclusive**, there is **exactly one** repeated number. Return that duplicate.

**Constraints (common interview version):** do **not** modify the array, use only **O(1)** extra memory. (Floyd’s cycle on indices meets this; cyclic sort swaps would modify the array.)

## Examples

**Example 1**

- `nums = [1, 3, 4, 2, 2]` → `2`

**Example 2**

- `nums = [3, 1, 3, 4, 2]` → `3`

## Approach (beginner friendly)

Treat indices as nodes and `nums[i]` as `next` pointer. Because values live in `[1, n]` for `n+1` elements, there is a **cycle**; the duplicate is the **entrance** of that cycle—same phase-2 trick as [linked list cycle II](../tortoise-hare/linked-list-cycle-ii.md).

**Alternative:** cyclic sort would place each value at `value-1` until the duplicate blocks a swap—great when mutation is allowed.

## Solution (Python)

```python
def find_duplicate(nums: list[int]) -> int:
    slow = fast = nums[0]
    while True:
        slow = nums[slow]
        fast = nums[nums[fast]]
        if slow == fast:
            break

    slow = nums[0]
    while slow != fast:
        slow = nums[slow]
        fast = nums[fast]
    return slow


assert find_duplicate([1, 3, 4, 2, 2]) == 2
assert find_duplicate([3, 1, 3, 4, 2]) == 3
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` — only pointers.
