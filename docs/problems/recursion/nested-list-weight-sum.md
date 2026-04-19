# Nested list weight sum

**Topic:** [Recursion](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

A nested list mixes integers and lists. **Depth** `1` is the outermost list. The **weight** of an integer is its value times its depth. Return the sum of weights for all integers.

## Examples

**Example 1**

- Input: `[[1, 1], 2, [1, 1]]`
- Output: `10`
- Explanation: Depth-`1` has `2` → `2*1=2`. Each `1` inside nested lists sits at depth `2` → four copies of `1*2=8`. Total `2+8=10`.

**Example 2**

- Input: `[1, [4, [6]]]`
- Output: `27`
- Explanation: `1` at depth `1`; `4` at depth `2`; `6` at depth `3` → `1 + 8 + 18 = 27`.

## Approach (beginner friendly)

DFS: when you see an int, add `value * depth`; when you see a list, recurse with `depth + 1`.

## Solution (Python)

```python
def depth_sum(nested: list) -> int:
    def dfs(arr: list, depth: int) -> int:
        total = 0
        for x in arr:
            if isinstance(x, int):
                total += x * depth
            else:
                total += dfs(x, depth + 1)
        return total

    return dfs(nested, 1)


assert depth_sum([[1, 1], 2, [1, 1]]) == 10
assert depth_sum([1, [4, [6]]]) == 27
```

## Complexity

- **Time:** `O(N)` for `N` total integers and sublists visited.
- **Space:** `O(D)` recursion depth `D`.
