# Frequency maps

A **frequency map** records how many times each key appears. It turns “how many / which appeared twice” into O(1) expected lookups after one O(n) build pass.

## Pattern

1. Scan input once.
2. For each element `x`, do `count[x] += 1` (or `setdefault` / `get` idiom).
3. Answer questions using `count`.

## Complexity

- **Time**: O(n) for the scan (plus O(k) to iterate keys if needed, often k ≤ n).
- **Space**: O(k) distinct keys.

## Mini example (conceptual)

- **Anagram check**: two strings are anagrams if character counts match—two frequency maps or one map and second pass subtracting.

Extend this page with 2–3 problem names you personally keep mixing up, and the one-line map invariant that fixes them.
