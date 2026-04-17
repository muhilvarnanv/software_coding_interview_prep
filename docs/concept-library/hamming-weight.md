# Hamming weight

## The idea in one sentence

The **Hamming weight** of a nonnegative integer is **how many `1` bits appear in its binary representation**—in other words, how many positions are “on” if you write the number in base two.

People also call this **popcount** (population count), **population count**, or simply **count of set bits**.

---

## Beginner picture

Take `n = 11`. In binary, `11` is `1011`. Count the `1`s: there are **three**, so the Hamming weight is **3**.

Take `n = 128` (`10000000` in eight-bit form). Only one bit is `1`, so the Hamming weight is **1**.

The name **Hamming** comes from coding theory (Richard Hamming); in interviews you will usually just hear “**number of 1 bits**” or “**popcount**.”

---

## Why interviewers mention it

It is a small, clear bit task: you must be comfortable with **masks**, **shifts**, or the **`n & (n - 1)`** trick that clears the lowest set bit. It often appears as a warm-up next to XOR and power-of-two checks.

---

## Where you'll see this in these notes

- **[Number of 1 bits](../problems/bit-manipulation/number-of-1-bits.md)** — classic “count set bits” walkthrough.
- **[Bit manipulation pattern](../code-patterns/bit-manipulation.md)** — when you ask yourself whether the solution used XOR, masks, or **popcount**.
