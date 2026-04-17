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

## Walkthrough: bitwise operators “explained” (with `12` and `10`)

This section is the **slow, integer-first** version of what many tutorials call “bitwise operators explained” (same spirit as a back-and-forth walkthrough, e.g. [ChatGPT — Bitwise Operators Explained](https://chatgpt.com/share/69e21fc5-4578-8321-a57b-2416dfa95ce8)). The interview notes above stay terse; here we line bits up like on paper.

**Setup.** Take **`12`** and **`10`**. In binary (four bits is enough here):

- `12` → `1100`
- `10` → `1010`

Read each column from **left → right** as **8’s place, 4’s place, 2’s place, 1’s place** (powers of two). That is why `1100` is `8 + 4 = 12`.

**AND (`&`) — “both must be 1”.** Output has a `1` only where **both** inputs have `1`.

```text
  1 1 0 0    (12)
& 1 0 1 0    (10)
-----------
  1 0 0 0    → 8 in decimal
```

So **`12 & 10 == 8`**. Intuition: AND is a **filter** — keep only positions where both numbers “agree” on having a 1.

**OR (`|`) — “either can be 1”.** Output has `1` if **at least one** input has `1` in that column.

```text
  1 1 0 0    (12)
| 1 0 1 0    (10)
-----------
  1 1 1 0    → 14 in decimal
```

So **`12 | 10 == 14`**.

**XOR (`^`) — “1 if they differ”.** Output `1` where the two bits **are not equal** (exclusive or).

```text
  1 1 0 0    (12)
^ 1 0 1 0    (10)
-----------
  0 1 1 0    → 6 in decimal
```

So **`12 ^ 10 == 6`**. Interview trick: **`x ^ x == 0`** and **`x ^ 0 == x`**, so XOR often **cancels pairs** and leaves the odd value out.

**NOT (`~`) — “flip every bit” (watch Python).** Conceptually you invert `0↔1` for **all** bits of a signed integer. In Python integers have **unbounded** width, so **`~12` is not a cute positive 8-bit answer** — it is **`-13`**. When you want “unsigned 8-bit NOT”, you **mask** after: **`(~12) & 0xFF` → `243`**.

**Left shift (`<<`) — move bits left, fill with zeros on the right.** Shifting by `k` is multiplying by `2 ** k` (until you overflow a fixed width in other languages).

- `12 << 2`: start `1100`, push two zeros on the right → `110000` → **`48`**.

**Right shift (`>>`) — move bits right, drop the low bits.** For non-negative `n`, `n >> k` is the same as `n // (2 ** k)` in Python.

- `12 >> 2`: `1100` → `11` → **`3`**.

**Tiny recap (same numbers):** `12 & 10 = 8`, `12 | 10 = 14`, `12 ^ 10 = 6`, `~12 = -13` (mask if you want a bounded width), `12 << 2 = 48`, `12 >> 2 = 3`.

---

## Python: core bit operators

Use two small integers and read the **decimal** results (same bits as `0b1100` and `0b1010`).

**Same pair everywhere:** `x = 12`, `y = 10`.

| Expression | Integer result | In words |
| --- | ---: | --- |
| `12 & 10` | **8** | AND: 1 only where both have a 1 |
| <code>12 &#124; 10</code> | **14** | OR: 1 if either has a 1 |
| `12 ^ 10` | **6** | XOR: 1 where bits differ |
| `~12` | **-13** | NOT in Python extends infinitely; for “8-bit style” use a mask, e.g. `(~12) & 0xFF` → **243** |
| `12 << 2` | **48** | Shift left = multiply by `4` |
| `12 >> 2` | **3** | Shift right = floor-divide by `4` (for negatives, Python rounds toward **-∞**) |

```python
x, y = 12, 10  # 0b1100, 0b1010

assert (x & y) == 8
assert (x | y) == 14
assert (x ^ y) == 6
assert ~x == -13
assert (x << 2) == 48
assert (x >> 2) == 3

# Idioms with concrete integers (check each assert mentally)
assert (26 & 1) == 0        # even → lowest bit 0
assert (27 & 1) == 1        # odd  → lowest bit 1
assert (12 & (12 - 1)) == 8 # 12 = 1100₂ → drop lowest 1 → 1000₂ = 8
assert (12 & -12) == 4      # isolate lowest 1-bit of 12 → 100₂ = 4

k = 2
n = 8                       # 1000₂
assert (n | (1 << k)) == 12 # set bit 2: 1000 | 0100 → 1100 = 12
assert (12 & ~(1 << k)) == 8  # clear bit 2 on 12 → back to 8
assert (6 ^ (1 << 1)) == 4  # flip bit 1 on 6 (110₂): 110 ^ 010 → 100 = 4
assert ((20 >> 2) & 1) == 1  # 20 = 10100₂, bit index 2 is 1
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
