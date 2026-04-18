# Evidence Priority Contract

## Purpose

This document defines the order of trust when reviewing work.

The goal is to prevent summaries from outranking actual evidence.

## Priority Order

Review should trust evidence in this order:

1. raw command output
2. logs
3. exact command results
4. changed files
5. diff
6. blocker list
7. assumptions
8. summary text

## Interpretation Rule

A summary is useful, but it is never stronger than the underlying evidence.

If the summary and evidence conflict, trust the evidence.

## Review Standard

When reviewing Codex work, prefer:
- what was actually run
- what actually failed or passed
- what files actually changed
- what assumptions remain unresolved

Be cautious when only summary text is available.

## Acceptance Rule

For small setup tasks, summarized command results may be enough for practical progress.

For important milestones, prefer raw logs or verbatim command output.

## Required Language

When evidence is incomplete:
- "evidence missing for a full pass"

When only the diff is available:
- "static review only"

When no command output exists:
- "not runtime-verified"