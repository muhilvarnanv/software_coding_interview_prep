# Bit manipulation

## The idea in one sentence

You treat integers as **fixed-width bundles of bits** and use operators like **AND**, **OR**, **XOR**, **NOT**, and **shifts** to test, set, clear, or rearrange those bits in **constant time per step**.

## Why interviewers like it

Many problems have a short **O(1)-per-bit** solution that avoids extra data structures—especially **XOR cancel-out** tricks and **mask + shift** patterns. It signals comfort with how numbers are represented, which still shows up in systems-style and general coding rounds.

**Related:** **[Prefix sum](prefix-sum.md)** and **[hash maps](../hash-tables/index.md)** solve many “find missing / duplicate” stories too—bits are one more tool, not a religion.

---

## When does bit manipulation help?

1. **Parity, lowest set bit, isolating a bit** — `x & 1`, `x & -x`, masks.
2. **XOR properties** — `a ^ a = 0`, `a ^ 0 = a`, commutativity to find the **odd-one-out** or cancel pairs.
3. **Powers of two** — one hot bit checks: `n > 0 and (n & (n - 1)) == 0`.
4. **Subset enumerations** over tiny `n` — iterate masks `0 .. (1<<n)-1` (watch exponential blow-up).

**When it is usually *not* the right tool**

- The answer needs **big integers** beyond 64 bits without libraries — switch strategies.
- **Readability** matters more than micro-optimization — a hash map solution is fine if complexity matches the constraints.

---

## How to use it (step by step)

1. **Write the invariant** in words: “What should be true of bits after each step?”
2. **Choose operators** — XOR for paired cancellation; AND with mask to read one bit; OR to set bits.
3. **Mind width and sign** — Python integers are arbitrary precision; in interviews, clarify whether the input fits 32-bit signed range.
4. **Test small** — try `n = 0`, powers of two, all-ones patterns like `-1` in two’s complement languages (Python is special).

---

## Python: core bit operators

```python
x, y = 0b1100, 0b1010  # 12, 10

x & y   # AND:  bits set where both are 1  -> 0b1000 (8)
x | y   # OR:   bits set where either is 1 -> 0b1110 (14)
x ^ y   # XOR:  bits set where they differ  -> 0b0110 (6)
~x      # NOT:  flips all bits (Python: arbitrary width; often mask for fixed width)
x << 2  # left shift:  multiply by 2**2
x >> 2  # right shift: floor divide by 2**2 (sign-aware for negatives)

# Common interview idioms (unsigned-style; mask to 32 bits if needed)
x & 1              # lowest bit (parity)
x & (x - 1)        # clear lowest set bit
x & -x             # isolate lowest set bit (two’s complement trick)
x | (1 << k)       # set bit k
x & ~(1 << k)      # clear bit k
x ^ (1 << k)       # flip bit k
(x >> k) & 1       # read bit k
```

---

## Pitfalls

- **Operator precedence** — mix `&` with `==` carefully; use parentheses.
- **Infinite loops on shifts** — ensure the shift amount is not negative and eventually terminates.
- **Confusing `>>` signed vs unsigned** — languages differ; say what you assume aloud.

---

## Mini example: XOR cancel

Values `[4, 1, 2, 1, 2]` — every element appears twice except one.

XOR them all: duplicates cancel (`x^x=0`); result is **`4`**.

---

## After you solve a problem

- Which **bit identity** did I use (XOR, mask, **[Hamming weight / popcount](../concept-library/hamming-weight.md)**)?
- Would a **hash set** have been simpler at the same complexity?
- Did I respect **integer width** assumptions?

---

## Practice problems

Curated problems with examples, Python solutions, and plain-language explanations: **[Bit manipulation — practice](../problems/bit-manipulation/index.md)**.
