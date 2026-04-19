# Merge k sorted lists

**Topic:** [Heaps](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given `k` sorted linked lists, merge them into one sorted linked list.

## Examples

**Example 1**

- Input: `[1→4→5, 1→3→4, 2→6]`
- Output: `1→1→2→3→4→4→5→6`
- Explanation: Always pick the smallest current head; the heap tracks which list supplies the next smallest value.

**Example 2**

- Input: `[]` or `[[]]`
- Output: empty list
- Explanation: No nodes exist to merge.

## Approach (beginner friendly)

Use a **min-heap** keyed by node value (tie-break with list index). Pop the smallest, append it to the result, push that node’s `next` if any.

## Solution (Python)

```python
import heapq


class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def merge_k_lists(lists: list[ListNode | None]) -> ListNode | None:
    heap: list[tuple[int, int, ListNode]] = []
    for i, node in enumerate(lists):
        if node:
            heapq.heappush(heap, (node.val, i, node))

    dummy = ListNode()
    tail = dummy
    while heap:
        _, i, node = heapq.heappop(heap)
        tail.next = node
        tail = tail.next
        if node.next:
            heapq.heappush(heap, (node.next.val, i, node.next))
    return dummy.next


def to_list(head: ListNode | None) -> list[int]:
    out: list[int] = []
    while head:
        out.append(head.val)
        head = head.next
    return out


a = ListNode(1, ListNode(4, ListNode(5)))
b = ListNode(1, ListNode(3, ListNode(4)))
c = ListNode(2, ListNode(6))
assert to_list(merge_k_lists([a, b, c])) == [1, 1, 2, 3, 4, 4, 5, 6]
assert merge_k_lists([]) is None
```

## Complexity

- **Time:** `O(n log k)` where `n` is total nodes, `k` lists.
- **Space:** `O(k)` for the heap.
