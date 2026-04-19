# Dynamic programming

| Problem | Idea in one line |
|---------|------------------|
| [Climbing stairs](climbing-stairs.md) | Fibonacci-style: `ways[n] = ways[n-1] + ways[n-2]`. |
| [House robber](house-robber.md) | `dp[i] = max(dp[i-1], nums[i] + dp[i-2])`. |
| [Coin change](coin-change.md) | Unbounded knapsack on sums for minimum coins. |
| [Longest increasing subsequence](longest-increasing-subsequence.md) | `dp[i]` = best length ending at `i`. |
| [Unique paths](unique-paths.md) | Grid DP: paths = sum from top and left. |

**Pattern note:** [Prefix sum](../../code-patterns/prefix-sum.md)
