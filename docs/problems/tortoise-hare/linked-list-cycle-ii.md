# Linked list cycle II

**Topic:** [Tortoise and hare problems](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Given `head` of a linked list that **contains a cycle**, return the **node where the cycle begins**. If no cycle, return `None`.

## Examples

**Example 1**

- Nodes `3 → 2 → 0 → -4`, tail `-4` points back to node `2`.
- Output: the node with value `2` (identity matters, not just the value).

**Example 2**

- `1 → 2` and `2` points to `1`.
- Output: node `1`.

## Approach (beginner friendly)

Phase 1: same as [linked list cycle](linked-list-cycle.md) — find **any** meeting point inside the loop.

Phase 2: reset **one** pointer to `head`. Move **both one step** until they meet—classic Floyd proof shows they meet at the **cycle entrance**.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def detect_cycle(head: ListNode | None) -> ListNode | None:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            slow = head
            while slow is not fast:
                slow = slow.next
                fast = fast.next
            return slow
    return None


# build 3 -> 2 -> 0 -> -4 -> (back to node with 2)
n3, n2, n0, n4 = ListNode(3), ListNode(2), ListNode(0), ListNode(-4)
n3.next, n2.next, n0.next, n4.next = n2, n0, n4, n2
assert detect_cycle(n3) is n2
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
