# Tortoise and hare (Floyd’s cycle)

## The idea in one sentence

You move **two pointers** along the same path at **different speeds**—often called **slow** and **fast**. If the path **loops**, the fast one eventually **laps** the slow one inside the loop; if there is **no loop**, fast reaches the end first.

That collision (or clean exit) is the whole trick.

## Why interviewers like it

On a linked list, you usually get **O(n)** time and **O(1) extra space**—no hash set of visited nodes, no copying the list. Interviewers like that because it tests **invariants** (“why must they meet?”) without heavy libraries.

**Related:** **[Two pointers](two-pointer.md)** — same line, two indices, but tortoise–hare is the **same-direction, different-speed** specialization. **[Cyclic sort](cyclic-sort.md)** solves a different family (permute values into index slots), though **[find the duplicate](../problems/cyclic-sort/find-the-duplicate-number.md)** can also be solved with a **cycle on indices**—same math spirit, different story.

---

## When does tortoise and hare help?

1. **Linked list** — detect a cycle, find the **start** of a cycle, or find the **middle** node.
2. **Functional iteration** — “happy number” style: follow `f(x)` repeatedly; a cycle means “not happy.”
3. **You can define a clear next step** from each state (list `next`, or a deterministic function on integers).

**When it is usually *not* the right tool**

- You need **all** nodes in a cycle or arbitrary graph reachability → often **hash sets** or real **graph search**.
- The walk is **not** one-dimensional with a single `next` (trees with branching need a different approach).

---

## How to use it (step by step)

1. **Initialize** `slow` and `fast` at the start (often the list head). Decide whether `fast` moves **one** or **two** steps per “tick.”
2. **Advance** until `fast` is `None` (no cycle) or `slow == fast` (cycle detected).
3. **Optional — cycle start:** reset one pointer to the head; advance **both one step at a time**; they meet at the loop entrance (classic Floyd proof sketch).
4. **Optional — middle node:** move `fast` twice as fast; when `fast` reaches the end, `slow` is at the middle (for “first middle” definitions, handle even length carefully).

---

## Pitfalls

- **Off-by-one on `fast.next`** — always check `fast` and `fast.next` before dereferencing when moving two steps.
- **Confusing “meet inside loop” with “meet at entrance”** — the first collision is **somewhere** in the loop; the second phase finds the **start**.
- **Even-length middle** — clarify whether you want the left or right middle of an even-length list.
- **Applying to arrays as “index jumps”** — valid for some problems, but easy to infinite-loop if you do not prove every index is in-bounds.

---

## Mini example: cycle detection

List: `1 → 2 → 3 → 4 → 2` (back to the node with value `2`).

- `slow` moves 1 step per turn; `fast` moves 2.
- After a few turns both sit on the same node inside the loop → **cycle exists**.

If the list were `1 → 2 → 3 → None`, `fast` hits `None` first → **no cycle**.

---

## After you solve a problem

- Did I use **two speeds** or just two indices at the same speed?
- If I found the **cycle start**, did I reset to **head** and walk **both** at speed 1?
- What would break if the list were **empty** or length **1**?

---

## Practice problems

Curated problems with examples, Python solutions, and plain-language explanations: **[Tortoise and hare — practice](../problems/tortoise-hare/index.md)**.
