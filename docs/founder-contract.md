# Founder Contract

## Development Principles

- Build only what is needed to prove the waiting-item loop.
- Prefer clear scaffolds and replaceable placeholders over premature systems.
- Keep code understandable for a small team moving quickly in Codespaces.
- Bias toward shipping something reviewable instead of building hidden complexity.

## Scope Discipline

If scope expands, cut supporting features before expanding the core loop. The first things to cut are polish work, secondary views, advanced settings, tagging systems, and any speculative automation.

## Decision-Making

Decisions should be made by checking whether the change strengthens the core workflow:

1. capture incoming information
2. extract or review a waiting item
3. decide when to check again
4. mark the outcome

If a proposal does not improve one of those steps, it should be deferred.

## Feature Gate

No feature should be added unless it directly supports the core waiting-item loop.

## Truthfulness

Do not make false AI promises. If extraction is placeholder-only, say so. If a workflow still needs human review, keep that visible in the product and in documentation.

## Portability

Avoid region-specific lock-in in language, assumptions, or platform choices unless real user validation proves it is necessary.

## Validation Before Complexity

Do not add complex integrations before users validate that the core waiting workflow is valuable on its own.
