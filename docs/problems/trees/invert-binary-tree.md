# Invert binary tree

**Topic:** [Trees](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Swap every node’s left and right subtrees so the tree mirrors left-right. Return the new root.

## Examples

**Example 1**

- Input: root of `4 / 2 7 / 1 3 6 9`
- Output: mirrored tree `4 / 7 2 / 9 6 3 1`
- Explanation: Each level’s children swap sides, so `2` and `7` trade places, and so do their descendants.

**Example 2**

- Input: `root = [2, 1, 3]`
- Output: `[2, 3, 1]`
- Explanation: Children `1` and `3` swap under `2`.

## Approach (beginner friendly)

DFS: at each node, recursively invert children, then swap the two child pointers (order can be swap-first then recurse—either works if consistent).

## Solution (Python)

```python
class TreeNode:
    def __init__(self, val: int = 0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def invert_tree(root: TreeNode | None) -> TreeNode | None:
    if not root:
        return None
    invert_tree(root.left)
    invert_tree(root.right)
    root.left, root.right = root.right, root.left
    return root


def preorder(root: TreeNode | None) -> list[int]:
    if not root:
        return []
    return [root.val] + preorder(root.left) + preorder(root.right)


r = TreeNode(2, TreeNode(1), TreeNode(3))
invert_tree(r)
assert preorder(r) == [2, 3, 1]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(h)` recursion stack (`h` = height).
