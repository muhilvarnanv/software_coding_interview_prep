# Rotting oranges

**Topic:** [Graphs](index.md) · **Pattern:** [Big-O and traversal depth](../../time-space-complexity/big-o.md)

## Problem

In a grid, `2` = rotten orange, `1` = fresh, `0` = empty. Every minute, any fresh orange **4-directionally adjacent** to a rotten one becomes rotten. Return minutes until no fresh orange remains, or `-1` if impossible.

## Examples

**Example 1**

- Input: `[[2,1,1],[1,1,0],[0,1,1]]`
- Output: `4`
- Explanation: Rot spreads wave by wave; it takes four full minutes for the last fresh cell to touch rot.

**Example 2**

- Input: `[[2,1,1],[0,1,1],[1,0,1]]`
- Output: `-1`
- Explanation: A fresh orange in the bottom-left is **walled off** by zeros, so rot never reaches it.

## Approach (beginner friendly)

**Multi-source BFS:** enqueue all rotten cells with time `0`. Pop level by level, rotting neighbors and tracking the maximum time. After BFS, if any `1` remains, return `-1`.

## Solution (Python)

```python
from collections import deque


def oranges_rotting(grid: list[list[int]]) -> int:
    rows, cols = len(grid), len(grid[0])
    q = deque()
    fresh = 0
    for r in range(rows):
        for c in range(cols):
            if grid[r][c] == 2:
                q.append((r, c, 0))
            elif grid[r][c] == 1:
                fresh += 1

    t = 0
    while q:
        r, c, t = q.popleft()
        for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nr, nc = r + dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols and grid[nr][nc] == 1:
                grid[nr][nc] = 2
                fresh -= 1
                q.append((nr, nc, t + 1))

    return t if fresh == 0 else -1


g1 = [[2, 1, 1], [1, 1, 0], [0, 1, 1]]
assert oranges_rotting([row[:] for row in g1]) == 4

g2 = [[2, 1, 1], [0, 1, 1], [1, 0, 1]]
assert oranges_rotting([row[:] for row in g2]) == -1
```

## Complexity

- **Time:** `O(rows * cols)`.
- **Space:** `O(rows * cols)` for the queue.
