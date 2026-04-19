# Permutations

**Topic:** [Backtracking](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given a list of **distinct** integers, return **all** orderings (permutations).

## Examples

**Example 1**

- Input: `[1, 2, 3]`
- Output: six permutations such as `[1,2,3]`, `[1,3,2]`, … covering every order.
- Explanation: `3! = 6` arrangements of three distinct items.

**Example 2**

- Input: `[0, 1]`
- Output: `[[0, 1], [1, 0]]`
- Explanation: Two items have exactly two orderings.

## Approach (beginner friendly)

Backtrack with a `used` boolean array: at each depth pick any unused element, mark used, recurse, then unmark.

## Solution (Python)

```python
def permute(nums: list[int]) -> list[list[int]]:
    n = len(nums)
    used = [False] * n
    path: list[int] = []
    out: list[list[int]] = []

    def dfs() -> None:
        if len(path) == n:
            out.append(path.copy())
            return
        for i in range(n):
            if used[i]:
                continue
            used[i] = True
            path.append(nums[i])
            dfs()
            path.pop()
            used[i] = False

    dfs()
    return out


def norm(x: list[list[int]]) -> set[tuple[int, ...]]:
    return {tuple(p) for p in x}


assert len(permute([1, 2, 3])) == 6
assert norm(permute([0, 1])) == {(0, 1), (1, 0)}
```

## Complexity

- **Time:** `O(n! * n)`.
- **Space:** `O(n)` for path and recursion.
