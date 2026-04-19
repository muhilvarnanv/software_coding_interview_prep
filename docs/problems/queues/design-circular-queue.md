# Design circular queue

**Topic:** [Queues](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Design a fixed-size queue with `enQueue`, `deQueue`, `Front`, `Rear`, `isEmpty`, `isFull` in `O(1)` time using an array.

## Examples

**Example 1**

- Capacity `3`, enqueue `1,2,3`, then enqueue `4` while full → failure or `False`.
- Explanation: Three slots are occupied; a fourth enqueue cannot fit until a dequeue frees space.

**Example 2**

- After dequeuing once from a full size-`3` queue `[1,2,3]`, enqueue `4` succeeds and rear becomes `4`.
- Explanation: Circular indexing wraps the freed slot at the head.

## Approach (beginner friendly)

Keep `head` and `size`. `tail = (head + size - 1) % cap` when non-empty. Increment `head` modulo capacity on dequeue; increment `tail` on enqueue.

## Solution (Python)

```python
class MyCircularQueue:
    def __init__(self, k: int) -> None:
        self.buf = [0] * k
        self.cap = k
        self.head = 0
        self.size = 0

    def en_queue(self, value: int) -> bool:
        if self.is_full():
            return False
        tail = (self.head + self.size) % self.cap
        self.buf[tail] = value
        self.size += 1
        return True

    def de_queue(self) -> bool:
        if self.is_empty():
            return False
        self.head = (self.head + 1) % self.cap
        self.size -= 1
        return True

    def front(self) -> int:
        return -1 if self.is_empty() else self.buf[self.head]

    def rear(self) -> int:
        if self.is_empty():
            return -1
        tail = (self.head + self.size - 1) % self.cap
        return self.buf[tail]

    def is_empty(self) -> bool:
        return self.size == 0

    def is_full(self) -> bool:
        return self.size == self.cap


q = MyCircularQueue(3)
assert q.en_queue(1) and q.en_queue(2) and q.en_queue(3)
assert not q.en_queue(4)
assert q.rear() == 3 and q.is_full()
assert q.de_queue() and q.en_queue(4) and q.rear() == 4
```

## Complexity

- **Time:** `O(1)` per operation.
- **Space:** `O(k)` for the buffer.
