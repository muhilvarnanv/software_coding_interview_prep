# Largest rectangle in histogram

**Topic:** [Stacks](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Heights are non-negative integers in a histogram. Return the **largest rectangle area** formed under the bars.

## Examples

**Example 1**

- Input: `heights = [2, 1, 5, 6, 2, 3]`
- Output: `10`
- Explanation: The best rectangle spans heights `5` and `6` (width `2`, height `5`), area `10`.

**Example 2**

- Input: `heights = [2, 4]`
- Output: `4`
- Explanation: Use the full bar of height `4` (width `1`) or the width-`2` rectangle of height `2`; both give area `4`.

## Approach (beginner friendly)

Use a **monotone increasing** stack of indices. When a shorter bar appears, pop taller indices and compute area with popped height as minimum and width from new index to new stack top.

## Solution (Python)

```python
def largest_rectangle_area(heights: list[int]) -> int:
    hs = heights + [0]
    stack: list[int] = []
    best = 0
    for i, h in enumerate(hs):
        while stack and hs[stack[-1]] > h:
            height = hs[stack.pop()]
            width = i if not stack else i - stack[-1] - 1
            best = max(best, height * width)
        stack.append(i)
    return best


assert largest_rectangle_area([2, 1, 5, 6, 2, 3]) == 10
assert largest_rectangle_area([2, 4]) == 4
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)`.
