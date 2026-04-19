# Number of islands

**Topic:** [Graphs](index.md) · **Pattern:** [Big-O and traversal depth](../../time-space-complexity/big-o.md)

## Problem

A binary grid has `1` = land and `0` = water. Four-directionally connected land forms an **island**. Return how many islands there are.

## Examples

**Example 1**

- Input: `[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]`
- Output: `1`
- Explanation: All `1`s touch orthogonally, so they are one connected island.

**Example 2**

- Input: `[["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]`
- Output: `3`
- Explanation: Top-left block is one island, the lone `1` near the middle is another, and the two `1`s on the bottom-right form the third.

## Approach (beginner friendly)

Scan the grid. When you see a `1`, **flood** (DFS or BFS) to every reachable `1`, marking them as visited (`0` or a set). Increment the island count once per fresh `1`.

## Solution (Python)

```python
def num_islands(grid: list[list[str]]) -> int:
    if not grid:
        return 0
    rows, cols = len(grid), len(grid[0])

    def dfs(r: int, c: int) -> None:
        if r < 0 or c < 0 or r >= rows or c >= cols or grid[r][c] != "1":
            return
        grid[r][c] = "0"
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            dfs(r + dr, c + dc)

    count = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == "1":
                dfs(r, c)
                count += 1
    return count


g1 = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
]
assert num_islands([row[:] for row in g1]) == 1

g2 = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"],
]
assert num_islands([row[:] for row in g2]) == 3
```

## Complexity

- **Time:** `O(rows * cols)`.
- **Space:** `O(rows * cols)` recursion stack in the worst case (DFS); BFS queue is similar worst case.
