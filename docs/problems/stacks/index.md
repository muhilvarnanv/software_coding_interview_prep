# Stacks

| Problem | Idea in one line |
|---------|------------------|
| [Valid parentheses](valid-parentheses.md) | Push opens; on close, pop must match type. |
| [Daily temperatures](daily-temperatures.md) | Monotonic decreasing stack of indices. |
| [Largest rectangle in histogram](largest-rectangle-in-histogram.md) | For each bar, extend while taller bars sit in a stack. |
| [Min stack](min-stack.md) | Extra stack tracks mins in sync with pushes/pops. |
| [Decode string](decode-string.md) | Stack of (prefix string, repeat count) while scanning. |

**Pattern note:** [Two-pass scanning](../../code-patterns/two-pass.md)
