# Keys and rooms

**Topic:** [Graphs](index.md) · **Pattern:** [Big-O and traversal depth](../../time-space-complexity/big-o.md)

## Problem

There are `n` rooms labeled `0 .. n-1`. Room `i` holds a list of keys to other rooms (indices). You start in room `0`. Return `True` if you can enter **every** room at least once.

## Examples

**Example 1**

- Input: `[[1],[2],[3],[]]`
- Output: `True`
- Explanation: `0` opens `1`, which opens `2`, which opens `3`; you visit all four rooms.

**Example 2**

- Input: `[[1, 3], [3, 0, 1], [2], [0]]`
- Output: `False`
- Explanation: You can open rooms `0`, `1`, and `3`, but nobody’s key ring contains `2`, so room `2` stays locked forever.

## Approach (beginner friendly)

Rooms and keys form a **directed graph**. Run DFS or BFS from `0`, collecting visited rooms. Success means `len(visited) == n`.

## Solution (Python)

```python
def can_visit_all_rooms(rooms: list[list[int]]) -> bool:
    n = len(rooms)
    stack = [0]
    seen = {0}
    while stack:
        r = stack.pop()
        for k in rooms[r]:
            if k not in seen:
                seen.add(k)
                stack.append(k)
    return len(seen) == n


assert can_visit_all_rooms([[1], [2], [3], []]) is True
assert can_visit_all_rooms([[1, 3], [3, 0, 1], [2], [0]]) is False
```

## Complexity

- **Time:** `O(n + k)` where `k` is total keys.
- **Space:** `O(n)` for the visited set and stack.
