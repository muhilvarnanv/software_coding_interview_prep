# Intersection of two linked lists

**Topic:** [Linked lists](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Two singly linked lists may share a **common suffix** starting at some node (same node object, not just the same value). Return that intersection node, or `None` if they never join.

## Examples

**Example 1**

- List A: `4 → 1` then shares `8 → 4 → 5`. List B: `5 → 6 → 1` then joins the same `8 → 4 → 5`.
- Output: the node whose value is `8` (the merge point).
- Explanation: After different prefixes, both pointers walk onto the **same** chain of nodes, so the first shared node is `8`.

**Example 2**

- List A: `2 → 6 → 4`, List B: `1 → 5` with no shared node object.
- Output: `None`
- Explanation: The lists never point to the same node object, so there is no intersection.

## Approach (beginner friendly)

Run two pointers, one on each list. When a pointer hits the end, **restart it on the other list’s head**. Each pointer walks `lenA + lenB` steps total, so they meet at the merge point (or both become `None` together).

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def get_intersection_node(
    head_a: ListNode | None, head_b: ListNode | None
) -> ListNode | None:
    a, b = head_a, head_b
    while a is not b:
        a = a.next if a else head_b
        b = b.next if b else head_a
    return a


# common tail
shared = ListNode(8, ListNode(4, ListNode(5)))
la = ListNode(4, ListNode(1, shared))
lb = ListNode(5, ListNode(6, ListNode(1, shared)))
assert get_intersection_node(la, lb) is shared

x = ListNode(2, ListNode(6, ListNode(4)))
y = ListNode(1, ListNode(5))
assert get_intersection_node(x, y) is None
```

## Complexity

- **Time:** `O(n + m)`.
- **Space:** `O(1)`.
