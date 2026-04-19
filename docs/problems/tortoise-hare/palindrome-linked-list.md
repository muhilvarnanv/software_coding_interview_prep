# Palindrome linked list

**Topic:** [Tortoise and hare problems](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Given `head` of a singly linked list, return `True` if the values read forward equal the values read backward—i.e. the list is a **palindrome**.

Follow-up goal (common interview ask): **O(1) extra space**—do not copy the whole list to an array.

## Examples

**Example 1**

- `1 → 2 → 2 → 1` → `True`
- Explanation: Reading forward or backward gives `1, 2, 2, 1`.

**Example 2**

- `1 → 2` → `False`
- Explanation: Forward is `1, 2` but backward would be `2, 1`, so it fails the palindrome check.

## Approach (beginner friendly)

1. Use slow/fast to find the **start of the second half** (same rule as [middle](middle-of-linked-list.md)).
2. **Reverse** the second half in place.
3. Compare pointers from `head` and from the reversed half.
4. (Optional) restore the list—skipped below for brevity.

This uses tortoise–hare for the split, then pointer surgery.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def reverse(head: ListNode | None) -> ListNode | None:
    prev = None
    cur = head
    while cur:
        nxt = cur.next
        cur.next = prev
        prev, cur = cur, nxt
    return prev


def is_palindrome(head: ListNode | None) -> bool:
    if not head or not head.next:
        return True

    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next

    # `slow` is the last node of the left half; second half starts after it.
    second = slow.next
    slow.next = None

    p, q = head, reverse(second)
    while q:
        if p.val != q.val:
            return False
        p, q = p.next, q.next
    return True


h = ListNode(1, ListNode(2, ListNode(2, ListNode(1))))
assert is_palindrome(h) is True
assert is_palindrome(ListNode(1, ListNode(2))) is False
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra beyond a few pointers (mutates links; say that aloud in interviews).
