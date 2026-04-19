# Binary tree level order traversal

**Topic:** [Trees](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Return values **level by level**, left to right, as a list of lists.

## Examples

**Example 1**

- Input: `3 / 9 20 / null null 15 7`
- Output: `[[3], [9, 20], [15, 7]]`
- Explanation: Level `0` is just `3`; level `1` is `9` then `20`; level `2` is `15` then `7`.

**Example 2**

- Input: `[1]`
- Output: `[[1]]`
- Explanation: Only the root exists, so one level with one value.

## Approach (beginner friendly)

BFS with a queue. Track the **size of the current level** before dequeuing that many nodes; push their children for the next round.

## Solution (Python)

```python
from collections import deque


class TreeNode:
    def __init__(self, val: int = 0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def level_order(root: TreeNode | None) -> list[list[int]]:
    if not root:
        return []
    out: list[list[int]] = []
    q = deque([root])
    while q:
        level: list[int] = []
        for _ in range(len(q)):
            n = q.popleft()
            level.append(n.val)
            if n.left:
                q.append(n.left)
            if n.right:
                q.append(n.right)
        out.append(level)
    return out


r = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
assert level_order(r) == [[3], [9, 20], [15, 7]]
assert level_order(TreeNode(1)) == [[1]]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)` for the queue at the widest level.
