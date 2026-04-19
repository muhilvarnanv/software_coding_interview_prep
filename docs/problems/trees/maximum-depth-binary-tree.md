# Maximum depth of binary tree

**Topic:** [Trees](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Return the number of nodes along the **longest** root-to-leaf path (depth counted as nodes, or edges—state convention; here we count **nodes** along the path).

## Examples

**Example 1**

- Input: `3 / 9 20 / null null 15 7`
- Output: `3`
- Explanation: Longest path is `3 → 20 → 15` (or `…→7`), length `3` nodes.

**Example 2**

- Input: `[1, null, 2]`
- Output: `2`
- Explanation: Chain `1 → 2` has depth `2`.

## Approach (beginner friendly)

Depth is `0` for empty. Otherwise `1 + max(depth(left), depth(right))`.

## Solution (Python)

```python
class TreeNode:
    def __init__(self, val: int = 0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def max_depth(root: TreeNode | None) -> int:
    if not root:
        return 0
    return 1 + max(max_depth(root.left), max_depth(root.right))


r = TreeNode(3, TreeNode(9), TreeNode(20, TreeNode(15), TreeNode(7)))
assert max_depth(r) == 3
assert max_depth(TreeNode(1, None, TreeNode(2))) == 2
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(h)` stack.
