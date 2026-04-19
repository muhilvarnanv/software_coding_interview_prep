# Container with most water

**Topic:** [Two pointers problems](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i`th line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container that holds the **maximum amount of water**. Return that maximum amount.

## Examples

**Example 1**

- Input: `height = [1, 8, 6, 2, 5, 4, 8, 3, 7]`
- Output: `49`
- Explanation: Choosing indices `1` and `8` gives width `7` and height `min(8, 7) = 7` → area `49`.

**Example 2**

- Input: `height = [1, 1]`
- Output: `1`
- Explanation: You must pick the two lines, so width is `1` and water height is `min(1, 1) = 1`, so area is `1`.

## Approach (beginner friendly)

Start with the **widest** container: `left = 0`, `right = n - 1`. The area is limited by the **shorter** line (water would spill from the short side).

If you move the **taller** line inward, the width **always** shrinks and the height cannot increase beyond the still-short side—so the area can only get worse or stay impossible to beat.

So move the **shorter** line inward: you might find a taller line that compensates for lost width. Track the maximum area.

## Solution (Python)

```python
def max_area(height: list[int]) -> int:
    left, right = 0, len(height) - 1
    best = 0

    while left < right:
        h = min(height[left], height[right])
        w = right - left
        best = max(best, h * w)

        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return best


assert max_area([1, 8, 6, 2, 5, 4, 8, 3, 7]) == 49
assert max_area([1, 1]) == 1
```

## Complexity

- **Time:** `O(n)` — each pointer moves at most `n` times.
- **Space:** `O(1)`.
