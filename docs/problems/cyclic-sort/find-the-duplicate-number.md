# Find the duplicate number

**Topic:** [Cyclic sort problems](index.md) · **Pattern:** [Cyclic sort](../../code-patterns/cyclic-sort.md)

## Problem

Given an array `nums` containing `n + 1` integers where each integer is in `[1, n]` **inclusive**, there is **exactly one** repeated number. Return that duplicate.

**Variant on this page:** mutate `nums` in place with **cyclic sort** — `O(n)` time, `O(1)` extra space. A stricter variant forbids modifying the array; **Floyd’s tortoise and hare** on index jumps solves that (see the approach note and [cycle detection](../tortoise-hare/linked-list-cycle-ii.md)).

## Examples

**Example 1**

- `nums = [1, 3, 4, 2, 2]` → `2`

**Example 2**

- `nums = [3, 1, 3, 4, 2]` → `3`

## Approach (beginner friendly)

**Cyclic sort (shown below):** each value `v` belongs at index `v - 1`. Swap `nums[i]` toward its home until `nums[i] == nums[correct]` (two equal values means the duplicate sits in the wrong slot) or it is already correct, then advance `i`. After placement, exactly one index `j` has `nums[j] != j + 1`; that **value** `nums[j]` is the duplicate.

**Read-only `O(1)` extra:** treat indices as nodes and `nums[i]` as a `next` pointer; values in `[1, n]` with `n + 1` slots force a **cycle**, and the duplicate is the cycle’s **entrance**—same idea as [linked list cycle II](../tortoise-hare/linked-list-cycle-ii.md).

## Solution (Python)

```python
def find_duplicate(nums):
    i = 0
    n = len(nums)

    # Phase 1: place elements
    while i < n:
        correct = nums[i] - 1
        if nums[i] != nums[correct]:
            nums[i], nums[correct] = nums[correct], nums[i]
        else:
            i += 1

    # Phase 2: detect duplicate
    for i in range(n):
        if nums[i] != i + 1:
            return nums[i]

    return -1


assert find_duplicate([1, 3, 4, 2, 2]) == 2
assert find_duplicate([3, 1, 3, 4, 2]) == 3
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra — the array is rearranged in place (no auxiliary structure proportional to `n`).
