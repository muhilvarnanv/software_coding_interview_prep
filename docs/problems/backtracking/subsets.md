# Subsets

**Topic:** [Backtracking](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given a list of **distinct** integers, return the **power set**—all subsets, including empty set (order inside the outer list may vary).

## Examples

**Example 1**

- Input: `[1, 2, 3]`
- Output: `[[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]` (order may vary)
- Explanation: Every combination of presence/absence across three elements appears exactly once.

**Example 2**

- Input: `[0]`
- Output: `[[], [0]]`
- Explanation: Either omit `0` or include it.

## Approach (beginner friendly)

DFS with index `i`: branch **without** `nums[i]` (just recurse) and **with** `nums[i]` (append then recurse, then pop).

## Solution (Python)

```python
def subsets(nums: list[int]) -> list[list[int]]:
    out: list[list[int]] = []
    path: list[int] = []

    def dfs(i: int) -> None:
        if i == len(nums):
            out.append(path.copy())
            return
        dfs(i + 1)
        path.append(nums[i])
        dfs(i + 1)
        path.pop()

    dfs(0)
    return out


def norm(x: list[list[int]]) -> set[tuple[int, ...]]:
    return {tuple(sorted(s)) for s in x}


assert norm(subsets([1, 2, 3])) == norm([[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]])
assert norm(subsets([0])) == norm([[], [0]])
```

## Complexity

- **Time:** `O(n * 2^n)` for output size.
- **Space:** `O(n)` recursion path.
