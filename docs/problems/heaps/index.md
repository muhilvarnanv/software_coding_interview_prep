# Heaps

| Problem | Idea in one line |
|---------|------------------|
| [Kth largest element in an array](kth-largest-element.md) | Min-heap of size `k` tracks the k largest. |
| [Merge k sorted lists](merge-k-sorted-lists.md) | Heap of `(value, list_id, node)`; always pop smallest. |
| [Top K frequent elements](top-k-frequent-elements.md) | Count, then heap by frequency (or bucket sort). |
| [Last stone weight](last-stone-weight.md) | Max-heap: smash two heaviest each turn. |
| [Find median from data stream](find-median-from-data-stream.md) | Two heaps: low half (max-heap), high half (min-heap). |

**Pattern note:** [Big-O](../../time-space-complexity/big-o.md)
