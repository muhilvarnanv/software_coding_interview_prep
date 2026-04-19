# Combination sum

**Topic:** [Backtracking](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given **distinct** positive candidates and a `target`, return all combinations where chosen numbers **sum** to `target`. You may reuse the same candidate unlimited times. Combinations are unique by multiset (order of picking does not create new answers—fix ascending index usage).

## Examples

**Example 1**

- Input: `candidates = [2, 3, 6, 7]`, `target = 7`
- Output: `[[2, 2, 3], [7]]`
- Explanation: `2+2+3=7` and `7=7`; no other multiset hits exactly `7`.

**Example 2**

- Input: `candidates = [2, 3, 5]`, `target = 8`
- Output: `[[2, 2, 2, 2], [2, 3, 3], [3, 5]]`
- Explanation: Three different multisets sum to `8`.

## Approach (beginner friendly)

Sort for clarity. DFS from `start` index: try taking `candidates[i]` again at the same index (reuse) or move to `i+1` after finishing deeper calls.

## Solution (Python)

```python
def combination_sum(candidates: list[int], target: int) -> list[list[int]]:
    candidates.sort()
    out: list[list[int]] = []
    path: list[int] = []

    def dfs(start: int, remain: int) -> None:
        if remain == 0:
            out.append(path.copy())
            return
        for i in range(start, len(candidates)):
            x = candidates[i]
            if x > remain:
                break
            path.append(x)
            dfs(i, remain - x)
            path.pop()

    dfs(0, target)
    return out


def norm(ans: list[list[int]]) -> set[tuple[int, ...]]:
    return {tuple(sorted(t)) for t in ans}


assert norm(combination_sum([2, 3, 6, 7], 7)) == {(2, 2, 3), (7,)}
assert norm(combination_sum([2, 3, 5], 8)) == {(2, 2, 2, 2), (2, 3, 3), (3, 5)}
```

## Complexity

- **Time:** exponential in worst case.
- **Space:** `O(target / min)` recursion depth in the worst case.
