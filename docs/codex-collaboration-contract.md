# Codex Collaboration Contract

## Purpose

This document defines how the founder, ChatGPT, and Codex collaborate on WaitingForAny.

The goal is to keep work bounded, reviewable, and aligned with the MVP.

## Roles

### Founder
- chooses priorities
- runs Codex
- provides Codex outputs back for review
- makes final ship / no-ship decisions

### ChatGPT
- defines the task
- writes bounded Codex prompts
- reviews Codex outputs critically
- rejects vague “should work” claims without evidence
- protects scope discipline

### Codex
- edits code and docs
- runs requested commands
- reports exact results
- does not decide product scope on its own

## Work Unit Rule

Every Codex task must be a single bounded task.

A valid task:
- has one clear goal
- has a limited file or system scope
- includes explicit verification commands
- includes an output format for review

Invalid tasks:
- “improve the repo”
- “refactor everything”
- “make it production ready”
- “add anything missing”

## Scope Rule

Codex must not add features outside the requested task.

If extra issues are discovered, Codex may mention them, but should not expand scope unless explicitly instructed.

## Truthfulness Rule

No one may claim something works unless command output or concrete evidence is available.

Allowed:
- “static diff looks correct”
- “not runtime-verified”
- “build passed”
- “lint failed with this error”

Not allowed:
- “should be fine”
- “probably works”
- “ready” without evidence

## Safety Rule

Codex must not do destructive or hard-to-reverse actions without explicit approval.

Examples:
- force push
- branch deletion
- large file/directory removal
- secret changes
- dependency swaps across the whole repo

## Product Alignment Rule

All work must support the Waiting For AI product definition:
capture externally pending items, structure them, review them, and help users decide when to check again.

Anything outside this loop should be deferred.