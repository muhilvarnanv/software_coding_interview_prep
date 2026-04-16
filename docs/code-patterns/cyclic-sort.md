# Cyclic sort

## The idea in one sentence

If numbers should live in **specific slots** (for example value `v` belongs at index `v-1` for `1..n`), you **walk the array** and repeatedly **swap** each out-of-place number into its home index until the scan can move on—like sorting by “routing mail to the right mailbox” in **O(n)** swaps.

## Why interviewers like it

For permutations missing/extra values, cyclic sort gives a **linear-time**, **O(1) extra space** story that is easy to draw on a whiteboard. It pairs nicely with “**index as hash key**” intuition.

**Related:** **[Tortoise and hare](tortoise-hare.md)** can solve **[find the duplicate](../problems/cyclic-sort/find-the-duplicate-number.md)** by walking indices as a graph—different mechanism, same “structure in a permutation” vibe. **[Hash tables](../hash-tables/index.md)** are the usual alternative when `O(n)` space is fine.

---

## When does cyclic sort help?

1. **Numbers are bounded** and align with indices (often `1..n` inside length `n`, or `0..n-1` variants).
2. **Duplicates / missing** detection in those bounded families.
3. **In-place** requirement makes a hash map feel “too easy” or disallowed.

**When it is usually *not* the right tool**

- Values are **arbitrary** large or not injective to indices — you cannot “route to slot.”
- You must preserve **relative order** of non-key elements — swaps destroy stability.

---

## How to use it (step by step)

1. **Define home index** for value `x` — e.g. `index = x - 1` when values are `1..n`.
2. **Scan `i` from `0` to `n-1`.** While `nums[i]` is not already correct for position `i`, **swap** `nums[i]` to `nums[target]` where `target` is the home index of `nums[i]`.
3. **Guard swaps** — if the value at `nums[i]` already equals `nums[target]` (duplicate), break to avoid an infinite loop.
4. After placement, **one more linear scan** often finds missing, duplicate, or first wrong slot.

---

## Pitfalls

- **Infinite swap loops** when duplicates exist — detect “swap would not change state.”
- **Off-by-one** between `0..n-1` values vs `1..n` values — write `home` on the board once and stick to it.
- **Forgetting the final verification pass** — placement loop alone may not print the answer.

---

## Mini example

Array `[3, 1, 2]` with values `1..3` should become `[1, 2, 3]`.

- At index `0`, value `3` belongs at index `2` → swap → `[2, 1, 3]`.
- Value `2` at index `0` belongs at index `1` → swap → `[1, 2, 3]`.
- Scan completes; array sorted **in place** with only swaps.

---

## After you solve a problem

- What is the **home index formula**?
- How did I **break** on duplicates?
- What does the **second scan** read off the array?

---

## Practice problems

Curated problems with examples, Python solutions, and plain-language explanations: **[Cyclic sort — practice](../problems/cyclic-sort/index.md)**.
