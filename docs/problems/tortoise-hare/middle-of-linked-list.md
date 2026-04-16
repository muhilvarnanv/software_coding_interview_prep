# Middle of the linked list

**Topic:** [Tortoise and hare problems](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Given `head` of a singly linked list, return the **middle node**. If there are two middle nodes for even length, return the **second** middle (LeetCode convention).

## Examples

**Example 1**

- `1 → 2 → 3 → 4 → 5`
- Output: node with value `3`

**Example 2**

- `1 → 2 → 3 → 4 → 5 → 6`
- Output: node with value `4` (second of the two middles)

## Approach (beginner friendly)

`slow` moves 1 step, `fast` moves 2. When `fast` cannot advance, `slow` sits on the desired middle for the “second middle” rule—initialize both at `head` and advance `fast` by two while possible.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def middle_node(head: ListNode | None) -> ListNode | None:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
    return slow


def to_list(head: ListNode | None) -> list[int]:
    out: list[int] = []
    while head:
        out.append(head.val)
        head = head.next
    return out


# 1..5
h = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
assert middle_node(h).val == 3

# 1..6
h2 = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5, ListNode(6))))))
assert middle_node(h2).val == 4
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
