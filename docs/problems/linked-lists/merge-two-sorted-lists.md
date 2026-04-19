# Merge two sorted lists

**Topic:** [Linked lists](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Merge two **sorted** singly linked lists into one sorted list. Return the head of the merged list.

## Examples

**Example 1**

- Input: `1 → 2 → 4` and `1 → 3 → 4`
- Output: `1 → 1 → 2 → 3 → 4 → 4`
- Explanation: Always pick the smaller front node, like merge-sort; both `1`s appear before `2`, then `3`, then both `4`s.

**Example 2**

- Input: `None` and `0`
- Output: `0`
- Explanation: The first list is empty, so the result is just the second list.

## Approach (beginner friendly)

Use a **dummy** node. Compare the two heads; attach the smaller one and advance that list. When one list empties, attach the rest of the other.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def merge_two_lists(
    list1: ListNode | None, list2: ListNode | None
) -> ListNode | None:
    dummy = ListNode()
    tail = dummy
    a, b = list1, list2
    while a and b:
        if a.val <= b.val:
            tail.next = a
            a = a.next
        else:
            tail.next = b
            b = b.next
        tail = tail.next
    tail.next = a or b
    return dummy.next


def to_list(head: ListNode | None) -> list[int]:
    out: list[int] = []
    while head:
        out.append(head.val)
        head = head.next
    return out


l1 = ListNode(1, ListNode(2, ListNode(4)))
l2 = ListNode(1, ListNode(3, ListNode(4)))
assert to_list(merge_two_lists(l1, l2)) == [1, 1, 2, 3, 4, 4]
assert to_list(merge_two_lists(None, ListNode(0))) == [0]
```

## Complexity

- **Time:** `O(n + m)`.
- **Space:** `O(1)` extra (reuses nodes).
