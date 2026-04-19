# Linked list cycle

**Topic:** [Tortoise and hare problems](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Given `head` of a linked list, determine if the list contains a **cycle**. A cycle exists if some node can be reached again by continuously following `next`.

Return `True` if there is a cycle, else `False`.

## Examples

**Example 1**

- List `3 → 2 → 0 → -4` and the tail links back to the node with value `2`.
- Output: `True`
- Explanation: If you keep following `next`, you never reach the end—you loop through `2 → 0 → -4 → 2 → …`—so a cycle exists.

**Example 2**

- List `1 → 2 → None`
- Output: `False`
- Explanation: You walk `1`, then `2`, then run out of links, so the list ends and there is no cycle.

## Approach (beginner friendly)

Use **slow** (1 step) and **fast** (2 steps). If there is a cycle, fast eventually enters the loop and **catches up** to slow inside the loop. If there is no cycle, fast reaches `None`.

**O(1) space** — no set of visited nodes.

## Solution (Python)

```python
class ListNode:
    def __init__(self, val: int = 0, next=None):
        self.val = val
        self.next = next


def has_cycle(head: ListNode | None) -> bool:
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False


# tiny cycle
a = ListNode(1)
b = ListNode(2)
a.next = b
b.next = a
assert has_cycle(a) is True

# no cycle
x = ListNode(1)
x.next = ListNode(2)
assert has_cycle(x) is False
```

## Complexity

- **Time:** `O(n)` — pointers traverse at most a few laps of the list tail.
- **Space:** `O(1)`.
