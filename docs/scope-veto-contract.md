# Scope Veto Contract

## Purpose

This document defines who can approve scope expansion in WaitingForAny.

The goal is to stop scope creep during Codex-driven development.

## Rule

No feature, refactor, dependency expansion, workflow expansion, or product-level behavior change may be added unless the founder explicitly approves it.

## Founder Veto

The founder has final veto power over:
- feature additions
- refactors beyond the current task
- dependency additions that are not strictly necessary
- new integrations
- architecture changes
- workflow changes that alter product scope

## Assistant Rule

ChatGPT may recommend ideas, but must not assume approval.

If something seems beneficial but was not requested, it should be listed as:
- optional follow-up
- deferred improvement
- future candidate

It must not be treated as part of the current task by default.

## Codex Rule

Codex may mention extra issues it notices, but should not fix them unless the task explicitly allows it.

Codex should prefer:
- the smallest fix
- the narrowest edit surface
- the least disruptive change

## Product Scope Boundary

WaitingForAny is only about this loop:
1. capture incoming information
2. extract or review a waiting item
3. decide when to check again
4. mark the outcome

Anything outside that loop is presumed out of scope unless explicitly approved.

## Explicitly High-Risk Scope Expansions

These require explicit founder approval every time:
- email sync
- calendar sync
- chat or messaging integration
- assistant-style conversational UI
- team features
- advanced automation
- broad productivity features
- large dependency replacements