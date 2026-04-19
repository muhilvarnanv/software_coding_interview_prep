# Reverse linked list

**Topic:** [Linked lists](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Reverse a singly linked list and return the new head.

## Examples

**Example 1**

- Input: `1 → 2 → 3 → 4 → 5`
- Output: `5 → 4 → 3 → 2 → 1`
- Explanation: Every `next` arrow points the opposite way, so traversal from the old tail now visits values in reverse order.

**Example 2**

- Input: `1 → 2`
- Output: `2 → 1`
- Explanation: The two nodes simply swap direction.

## Approach (beginner friendly)

Keep `prev` and `cur`. Repeatedly save `cur.next`, point `cur.next` to `prev`, then slide `prev` and `cur` forward.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def reverse_list(head: ListNode | None) -> ListNode | None:
    prev = None
    cur = head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev, cur = cur, nxt
    return prev


def to_list(head: ListNode | None) -> list[int]:
    out: list[int] = []
    while head:
        out.append(head.val)
        head = head.next
    return out


h = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
assert to_list(reverse_list(h)) == [5, 4, 3, 2, 1]

h2 = ListNode(1, ListNode(2))
assert to_list(reverse_list(h2)) == [2, 1]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
