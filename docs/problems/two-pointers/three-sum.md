# 3Sum

**Topic:** [Two pointers problems](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Given an integer array `nums`, return all **unique triplets** `[nums[i], nums[j], nums[k]]` such that:

- `i`, `j`, `k` are pairwise distinct indices, and
- `nums[i] + nums[j] + nums[k] == 0`.

The order of triplets and the order inside a triplet do not matter, but you must **not** output duplicates (same multiset of three values more than once).

## Examples

**Example 1**

- Input: `nums = [-1, 0, 1, 2, -1, -4]`
- Output: `[[-1, -1, 2], [-1, 0, 1]]` (order may vary)

**Example 2**

- Input: `nums = [0, 1, 1]`
- Output: `[]`

## Approach (beginner friendly)

Brute force tries all triplets → `O(n^3)` and is messy to dedupe.

Better plan:

1. **Sort** the array. Sorting costs `O(n log n)` but unlocks two pointers.
2. Fix the **first** index `i` from left to right. Skip duplicate `nums[i]` values so you do not rebuild the same triplet.
3. For each `i`, search for pairs `(left, right)` with `left = i + 1`, `right = n - 1` such that `nums[i] + nums[left] + nums[right] == 0` — this is **Two Sum II** on the rest of the array with target `-nums[i]`.
4. When you find a hit, move `left` and `right` inward, **skipping duplicates** to avoid repeated triplets.

Overall time is `O(n^2)` after the sort.

## Solution (Python)

```python
def three_sum(nums: list[int]) -> list[list[int]]:
    nums.sort()
    n = len(nums)
    out: list[list[int]] = []

    for i in range(n):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        target = -nums[i]
        left, right = i + 1, n - 1

        while left < right:
            s = nums[left] + nums[right]
            if s == target:
                out.append([nums[i], nums[left], nums[right]])
                left += 1
                right -= 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while left < right and nums[right] == nums[right + 1]:
                    right -= 1
            elif s < target:
                left += 1
            else:
                right -= 1

    return out


def normalize(triplets: list[list[int]]) -> set[tuple[int, int, int]]:
    return {tuple(sorted(t)) for t in triplets}


assert normalize(three_sum([-1, 0, 1, 2, -1, -4])) == normalize([[-1, -1, 2], [-1, 0, 1]])
assert three_sum([0, 1, 1]) == []
```

## Complexity

- **Time:** `O(n^2)` after `O(n log n)` sort (sort dominated by `n^2` for large `n` in Big-O notation: strictly `O(n^2)` if you say sort is preprocessing).
- **Space:** `O(1)` extra besides the output list (sort may use `O(log n)` stack depending on implementation).
