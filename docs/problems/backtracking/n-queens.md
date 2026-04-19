# N-Queens

**Topic:** [Backtracking](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Place `n` queens on an `n × n` chessboard so no two share a row, column, or diagonal. Return **all** valid boards as lists of strings (`Q` and `.`).

## Examples

**Example 1**

- Input: `n = 4`
- Output: two distinct solutions (standard four-queens boards).
- Explanation: Four queens can non-attackingly sit on `4×4` in exactly two symmetric families.

**Example 2**

- Input: `n = 1`
- Output: `[["Q"]]`
- Explanation: A single cell holds the only queen.

## Approach (beginner friendly)

Place one queen per **row**. Track occupied columns and both diagonal directions with sets. Try each column; recurse; backtrack.

## Solution (Python)

```python
def solve_n_queens(n: int) -> list[list[str]]:
    cols: set[int] = set()
    diag: set[int] = set()
    anti: set[int] = set()
    board: list[list[str]] = [["."] * n for _ in range(n)]
    out: list[list[str]] = []

    def dfs(r: int) -> None:
        if r == n:
            out.append(["".join(row) for row in board])
            return
        for c in range(n):
            if c in cols or (r - c) in diag or (r + c) in anti:
                continue
            cols.add(c)
            diag.add(r - c)
            anti.add(r + c)
            board[r][c] = "Q"
            dfs(r + 1)
            board[r][c] = "."
            cols.remove(c)
            diag.remove(r - c)
            anti.remove(r + c)

    dfs(0)
    return out


s4 = solve_n_queens(4)
assert len(s4) == 2
assert solve_n_queens(1) == [["Q"]]
```

## Complexity

- **Time:** roughly exponential in `n` (pruned search).
- **Space:** `O(n^2)` for the board plus recursion `O(n)`.
