# Hash tables

A **hash table** (hash map / dictionary) gives expected **O(1)** lookup, insert, and delete for keys. In interviews it is the go-to when you need fast membership or counts.

## Typical problem signals

- “Find if there exists…” with a complement or pair condition.
- Count frequencies, detect duplicates, first unique character.
- Cache results in recursion / DP (memoization).

## Pages in this topic

- **[Frequency maps](frequency-maps.md)** — counting occurrences.

## Interview note

If your language’s map is ordered, still describe complexity as you would for a hash map unless the problem requires ordering—in that case consider **tree map** cost (often O(log n) per op).
