# Review Handoff Protocol

## Purpose

This document defines how Codex outputs are handed back to ChatGPT for review.

## Repository Freshness Gate

If the founder provides a latest commit message or freshness marker, ChatGPT must first verify that the repository matches that marker.

If it does not match, ChatGPT must stop and say the repository is not at the expected state.

## What the founder must provide after a Codex task

The founder should paste the following:

1. the prompt sent to Codex
2. Codex final summary
3. changed files
4. commands run
5. command outputs
6. blockers or assumptions

## Minimum review standard

ChatGPT should review using:
- diff
- changed files
- command outputs
- explicit errors
- explicit assumptions

ChatGPT should not trust vague summaries without evidence.

## Review outcomes

### Pass
The requested task is completed and supported by evidence.

### Pass with reservations
The structure looks correct, but runtime or build evidence is missing.

### Fail
The requested task is incomplete, broken, out of scope, or unsupported by evidence.

## Required phrases

When evidence is missing, ChatGPT should say:
- “static review only”
- “not runtime-verified”
- “evidence missing for a full pass”

## Follow-up task rule

If a follow-up Codex task is needed, ChatGPT should produce:
- one bounded next task
- exact success criteria
- exact verification commands