# Prefix sum — practice problems

**Pattern overview:** [Prefix sum](../../code-patterns/prefix-sum.md) · **All problems:** [Problems hub](../index.md)

These five cover the prefix array trick, prefix + hash map for subarray targets, balance of left/right sums, modulo pairing, and prefix/suffix products.

| # | Problem | Idea in one line |
|---|---------|------------------|
| 1 | [Range sum query — immutable](range-sum-query-immutable.md) | Build `prefix[i]` once; range is one subtraction. |
| 2 | [Subarray sum equals k](subarray-sum-equals-k.md) | Count `(current_prefix - k)` seen before in a map. |
| 3 | [Find pivot index](find-pivot-index.md) | Total sum minus left equals right using a running left sum. |
| 4 | [Subarrays divisible by k](subarray-sums-divisible-by-k.md) | Prefix remainder map: `(cur - target) % k` pairing. |
| 5 | [Product of array except self](product-of-array-except-self.md) | Prefix products × suffix products without division. |
