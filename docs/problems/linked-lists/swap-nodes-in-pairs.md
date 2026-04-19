# Swap nodes in pairs

**Topic:** [Linked lists](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Swap every two adjacent nodes in a linked list **without** changing values inside nodes—relink pointers. If length is odd, leave the last node in place.

## Examples

**Example 1**

- Input: `1 → 2 → 3 → 4`
- Output: `2 → 1 → 4 → 3`
- Explanation: Swap `(1,2)` then swap `(3,4)`; order inside each pair flips.

**Example 2**

- Input: `1 → 2 → 3`
- Output: `2 → 1 → 3`
- Explanation: Only the first pair swaps; `3` has no partner, so it stays at the end.

## Approach (beginner friendly)

Use a dummy before the head. Repeatedly: let `a` be first of the pair, `b` second. Point dummy’s next to `b`, `a.next` to `b.next`, `b.next` to `a`, then move dummy to `a`.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def swap_pairs(head: ListNode | None) -> ListNode | None:
    dummy = ListNode(0, head)
    prev = dummy
    while prev.next and prev.next.next:
        a = prev.next
        b = a.next
        a.next = b.next
        b.next = a
        prev.next = b
        prev = a
    return dummy.next


def to_list(head: ListNode | None) -> list[int]:
    out: list[int] = []
    while head:
        out.append(head.val)
        head = head.next
    return out


h = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
assert to_list(swap_pairs(h)) == [2, 1, 4, 3]

h2 = ListNode(1, ListNode(2, ListNode(3)))
assert to_list(swap_pairs(h2)) == [2, 1, 3]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
