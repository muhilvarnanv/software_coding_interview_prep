# Add two numbers

**Topic:** [Linked lists](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Two non-empty linked lists represent two **non-negative** integers, digits stored in **reverse** order (ones digit at the head). Add the numbers and return the sum as a linked list in the same digit order.

## Examples

**Example 1**

- Input: `l1 = 2 → 4 → 3` (represents `342`), `l2 = 5 → 6 → 4` (represents `465`)
- Output: `7 → 0 → 8` (represents `807`)
- Explanation: `342 + 465 = 807`. Adding from the head: `2 + 5 = 7`, then `4 + 6 = 10` (write `0`, carry `1`), then `3 + 4 + 1 = 8`.

**Example 2**

- Input: `l1 = 0`, `l2 = 0`
- Output: `0`
- Explanation: `0 + 0 = 0`, a single node.

## Approach (beginner friendly)

Walk both lists with a **carry**. Each step: `sum = a + b + carry`, append `sum % 10`, set `carry = sum // 10`. If carry remains at the end, append one more node.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def add_two_numbers(l1: ListNode | None, l2: ListNode | None) -> ListNode | None:
    dummy = ListNode()
    tail = dummy
    carry = 0
    while l1 or l2 or carry:
        v1 = l1.val if l1 else 0
        v2 = l2.val if l2 else 0
        s = v1 + v2 + carry
        tail.next = ListNode(s % 10)
        tail = tail.next
        carry = s // 10
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next
    return dummy.next


def to_list(head: ListNode | None) -> list[int]:
    out: list[int] = []
    while head:
        out.append(head.val)
        head = head.next
    return out


a = ListNode(2, ListNode(4, ListNode(3)))
b = ListNode(5, ListNode(6, ListNode(4)))
assert to_list(add_two_numbers(a, b)) == [7, 0, 8]
assert to_list(add_two_numbers(ListNode(0), ListNode(0))) == [0]
```

## Complexity

- **Time:** `O(max(n, m))`.
- **Space:** `O(1)` extra besides the output list (output size is proportional to input).
