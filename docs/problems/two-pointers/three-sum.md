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
- Explanation: Sorting helps skip duplicates. One triple uses two `-1`s with `2` to reach `0`; another uses `-1, 0, 1`. No other unique triples sum to `0`.

**Example 2**

- Input: `nums = [0, 1, 1]`
- Output: `[]`
- Explanation: You need three different positions. The only way to sum to `0` would need a negative number to balance the `1`s, but there is no negative value here, so no triplet works.

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
    result = []

    for i in range(len(nums)):
        # Skip duplicates for i
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        left = i + 1
        right = len(nums) - 1

        while left < right:
            total = nums[i] + nums[left] + nums[right]

            if total < 0:
                left += 1
            elif total > 0:
                right -= 1
            else:
                result.append([nums[i], nums[left], nums[right]])

                # Skip duplicates for left & right
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1

                left += 1
                right -= 1

    return result


def normalize(triplets: list[list[int]]) -> set[tuple[int, int, int]]:
    return {tuple(sorted(t)) for t in triplets}


assert normalize(three_sum([-1, 0, 1, 2, -1, -4])) == normalize([[-1, -1, 2], [-1, 0, 1]])
assert three_sum([0, 1, 1]) == []
```

## Complexity

- **Time:** `O(n^2)` — sorting is `O(n log n)`, then each of the `n` outer steps does a linear two-pointer scan; the `n^2` term wins.
- **Space:** `O(1)` extra besides the output list (the sort may use `O(log n)` stack space inside the sort implementation).
