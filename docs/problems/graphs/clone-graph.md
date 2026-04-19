# Clone graph

**Topic:** [Graphs](index.md) · **Pattern:** [Big-O and traversal depth](../../time-space-complexity/big-o.md)

## Problem

Each undirected graph node has a value and a list of **neighbors** (other `Node` objects). Return a **deep copy** of a given node and all nodes reachable from it.

## Examples

**Example 1**

- Input: adjacency list `[[2,4],[1,3],[2,4],[1,3]]` representing four nodes in a square.
- Output: a new graph with the **same shape** but different `Node` objects.
- Explanation: Copying means new objects; connections mirror the original, but mutating the copy must not change the original.

**Example 2**

- Input: `[]` (single node with no neighbors)
- Output: one new node with empty neighbor list.
- Explanation: Trivial graph clones to itself structurally.

## Approach (beginner friendly)

Map each old node to a **new** node. DFS or BFS: for each old node, ensure its clone exists, then attach clone neighbors by cloning recursively (or queueing) any unseen neighbor first.

## Solution (Python)

```python
class Node:
    def __init__(self, val: int = 0, neighbors: list["Node"] | None = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


def clone_graph(node: Node | None) -> Node | None:
    if not node:
        return None
    seen: dict[Node, Node] = {}

    def dfs(n: Node) -> Node:
        if n in seen:
            return seen[n]
        copy = Node(n.val)
        seen[n] = copy
        for nb in n.neighbors:
            copy.neighbors.append(dfs(nb))
        return copy

    return dfs(node)


# build square 1-2-3-4-1
n1, n2, n3, n4 = Node(1), Node(2), Node(3), Node(4)
n1.neighbors = [n2, n4]
n2.neighbors = [n1, n3]
n3.neighbors = [n2, n4]
n4.neighbors = [n1, n3]
c1 = clone_graph(n1)
assert c1 is not n1 and {x.val for x in c1.neighbors} == {2, 4}

solo = Node(1)
cs = clone_graph(solo)
assert cs is not solo and cs.neighbors == []
```

## Complexity

- **Time:** `O(V + E)`.
- **Space:** `O(V)` for the clone map and recursion stack.
