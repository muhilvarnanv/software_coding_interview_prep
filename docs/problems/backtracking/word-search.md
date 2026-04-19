# Word search

**Topic:** [Backtracking](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given a 2-D grid of letters and a word, return whether the word exists by moving **up/down/left/right** through **distinct** cells (no reuse within one path).

## Examples

**Example 1**

- Board `[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]`, word `"ABCCED"`
- Output: `True`
- Explanation: A path visits letters `A→B→C→C→E→D` on the board without reusing a cell illegally.

**Example 2**

- Same board, word `"ABCB"`
- Output: `False`
- Explanation: Revisiting `B` immediately would reuse a cell before finishing the word, which is not allowed.

## Approach (beginner friendly)

DFS from each cell. Mark visited temporarily with a sentinel on the board (or a set). Backtrack by restoring the letter when leaving.

## Solution (Python)

```python
def exist(board: list[list[str]], word: str) -> bool:
    rows, cols = len(board), len(board[0])

    def dfs(r: int, c: int, k: int) -> bool:
        if k == len(word):
            return True
        if r < 0 or c < 0 or r >= rows or c >= cols or board[r][c] != word[k]:
            return False
        tmp, board[r][c] = board[r][c], "#"
        ok = (
            dfs(r + 1, c, k + 1)
            or dfs(r - 1, c, k + 1)
            or dfs(r, c + 1, k + 1)
            or dfs(r, c - 1, k + 1)
        )
        board[r][c] = tmp
        return ok

    for r in range(rows):
        for c in range(cols):
            if dfs(r, c, 0):
                return True
    return False


b = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]]
assert exist([row[:] for row in b], "ABCCED") is True
assert exist([row[:] for row in b], "ABCB") is False
```

## Complexity

- **Time:** `O(rows * cols * 4^L)` worst case (`L` = word length).
- **Space:** `O(L)` recursion stack.
