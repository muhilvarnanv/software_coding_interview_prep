# Remove Nth node from end of list

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given the `head` of a linked list, remove the **nth** node from the **end** of the list and return its `head`.

`n` is guaranteed valid (`1 <= n <= length`).

## Examples

**Example 1**

- `1 → 2 → 3 → 4 → 5`, `n = 2` → remove `4`
- Output: `1 → 2 → 3 → 5`
- Explanation: Counting from the tail, the `2`nd node is the `4` node, so delete it and bridge `3` to `5`.

**Example 2**

- `1`, `n = 1` → remove the only node
- Output: `None`
- Explanation: The list has one node and you remove the first-from-end node, so the list becomes empty.

## Approach (beginner friendly)

**Pass 1:** count nodes → `length`.

**Pass 2:** the node to remove is `length - n` steps from the start (0-indexed). Stop **one node before** it so you can relink `prev.next = node.next`.

Use a **dummy** head to avoid special-casing removal of the first node.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def remove_nth_from_end(head: ListNode | None, n: int) -> ListNode | None:
    length = 0
    cur = head
    while cur:
        length += 1
        cur = cur.next

    dummy = ListNode(0, head)
    prev = dummy
    for _ in range(length - n):
        prev = prev.next

    prev.next = prev.next.next
    return dummy.next


def to_list(head: ListNode | None) -> list[int]:
    out: list[int] = []
    while head:
        out.append(head.val)
        head = head.next
    return out


h = ListNode(1, ListNode(2, ListNode(3, ListNode(4, ListNode(5)))))
assert to_list(remove_nth_from_end(h, 2)) == [1, 2, 3, 5]
assert remove_nth_from_end(ListNode(1), 1) is None
```

## Complexity

- **Time:** `O(L)` for two passes over length `L`.
- **Space:** `O(1)`.
