# Course schedule

**Topic:** [Graphs](index.md) · **Pattern:** [Big-O and traversal depth](../../time-space-complexity/big-o.md)

## Problem

There are `numCourses` labeled `0 .. numCourses-1`. `prerequisites[i] = [a, b]` means you must take course `b` **before** course `a`. Return `True` if you can finish **all** courses (no impossible cycles), else `False`.

## Examples

**Example 1**

- Input: `numCourses = 2`, `prerequisites = [[1, 0]]`
- Output: `True`
- Explanation: Take course `0`, then course `1`; order exists.

**Example 2**

- Input: `numCourses = 2`, `prerequisites = [[1, 0], [0, 1]]`
- Output: `False`
- Explanation: `0` needs `1` first, but `1` needs `0` first—a cycle—so not all courses can finish.

## Approach (beginner friendly)

Model as a **directed graph**. Track **indegree** (how many prerequisites each course still needs). Put indegree-zero courses in a queue, “take” them and lower indegrees of dependents. If you finish all `numCourses`, it is possible; otherwise a cycle exists.

## Solution (Python)

```python
from collections import deque, defaultdict


def can_finish(num_courses: int, prerequisites: list[list[int]]) -> bool:
    adj: defaultdict[int, list[int]] = defaultdict(list)
    indeg = [0] * num_courses
    for a, b in prerequisites:
        adj[b].append(a)
        indeg[a] += 1

    q = deque(i for i in range(num_courses) if indeg[i] == 0)
    taken = 0
    while q:
        c = q.popleft()
        taken += 1
        for nxt in adj[c]:
            indeg[nxt] -= 1
            if indeg[nxt] == 0:
                q.append(nxt)
    return taken == num_courses


assert can_finish(2, [[1, 0]]) is True
assert can_finish(2, [[1, 0], [0, 1]]) is False
```

## Complexity

- **Time:** `O(V + E)` with `V = numCourses`, `E = len(prerequisites)`.
- **Space:** `O(V + E)` for graph and indegree arrays.
