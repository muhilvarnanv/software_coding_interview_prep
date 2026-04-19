# Diameter of binary tree

**Topic:** [Trees](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

The **diameter** is the number of **edges** on the longest path between any two nodes (path may or may not pass through the root). Return that length.

## Examples

**Example 1**

- Input: `1 / 2 3 / 4 5`
- Output: `3`
- Explanation: Longest path is `4 → 2 → 5` (or mirror), which uses three edges.

**Example 2**

- Input: `[1, 2]`
- Output: `1`
- Explanation: The only path between `1` and `2` has one edge.

## Approach (beginner friendly)

Post-order compute **height** of each subtree. At a node, a candidate diameter uses `left_height + right_height` edges through that node. Track the global max while returning height upward.

## Solution (Python)

```python
class TreeNode:
    def __init__(self, val: int = 0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def diameter_of_binary_tree(root: TreeNode | None) -> int:
    best = 0

    def height(n: TreeNode | None) -> int:
        nonlocal best
        if not n:
            return 0
        lh = height(n.left)
        rh = height(n.right)
        best = max(best, lh + rh)
        return 1 + max(lh, rh)

    height(root)
    return best


r = TreeNode(1, TreeNode(2, TreeNode(4), TreeNode(5)), TreeNode(3))
assert diameter_of_binary_tree(r) == 3
assert diameter_of_binary_tree(TreeNode(1, TreeNode(2))) == 1
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(h)` stack.
