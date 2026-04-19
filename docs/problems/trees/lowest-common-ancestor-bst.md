# Lowest common ancestor of a binary search tree

**Topic:** [Trees](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

In a **BST**, find the **lowest** (deepest) node that is an ancestor of both `p` and `q`. You may assume both values exist in the tree.

## Examples

**Example 1**

- Input: BST `6 / 2 8 / 0 4 7 9` with `p = 2`, `q = 8`
- Output: node `6`
- Explanation: `6` is an ancestor of both; its children split `2` and `8` into different subtrees, so `6` is the lowest common ancestor.

**Example 2**

- Input: same tree, `p = 2`, `q = 4`
- Output: node `2`
- Explanation: `2` is an ancestor of `4` in a BST chain, so the LCA is `2` itself.

## Approach (beginner friendly)

Walk from the root. If both values are **smaller** than current, go left; if both are **larger**, go right; otherwise the current split is the LCA.

## Solution (Python)

```python
class TreeNode:
    def __init__(self, val: int = 0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def lowest_common_ancestor(
    root: TreeNode, p: TreeNode, q: TreeNode
) -> TreeNode:
    cur = root
    a, b = min(p.val, q.val), max(p.val, q.val)
    while cur:
        if cur.val < a:
            cur = cur.right
        elif cur.val > b:
            cur = cur.left
        else:
            return cur
    raise RuntimeError("unreachable")


# build small BST
n0, n2, n3, n4, n6, n7, n8, n9 = (
    TreeNode(0),
    TreeNode(2),
    TreeNode(3),
    TreeNode(4),
    TreeNode(6),
    TreeNode(7),
    TreeNode(8),
    TreeNode(9),
)
n2.left, n2.right = n0, n4
n4.left = n3
n8.left, n8.right = n7, n9
root = TreeNode(6, n2, n8)

assert lowest_common_ancestor(root, n2, n8) is root
assert lowest_common_ancestor(root, n2, n4) is n2
```

## Complexity

- **Time:** `O(h)` height of BST.
- **Space:** `O(1)`.
