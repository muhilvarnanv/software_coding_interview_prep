# Arrays

Five common array problems (different from the pattern-only “sliding window / two pointers” sets elsewhere). Each page states the problem, explains **why** the sample answers look that way, then gives a short Python solution.

| Problem | Idea in one line |
|---------|------------------|
| [Best time to buy and sell stock](best-time-buy-sell-stock.md) | Track minimum price so far; best profit is max of `price - min_so_far`. |
| [Rotate array](rotate-array.md) | Reverse whole array, then reverse the two halves split at `k`. |
| [Jump game](jump-game.md) | Track farthest index reachable; fail if you step past it. |
| [Merge intervals](merge-intervals.md) | Sort by start; extend current interval or start a new one. |
| [Find minimum in rotated sorted array](find-min-rotated-sorted-array.md) | Binary search by comparing `mid` to `right`. |

**Pattern note:** [Two pointers](../../code-patterns/two-pointer.md)
