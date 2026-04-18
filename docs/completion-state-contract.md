# Completion State Contract

## Purpose

This document defines the allowed completion states for work in WaitingForAny.

The goal is to prevent vague claims like "done" when the actual evidence level is weak.

## Allowed States

### Draft
Use this when:
- there is only an idea
- there is only a prompt
- there is only an unfinished diff
- no meaningful verification has been attempted

Meaning:
The work is not ready for acceptance.

### Static Pass
Use this when:
- the code or diff looks correct on inspection
- the structure is reasonable
- but no runtime or command verification is available

Required phrase:
- "static review only"

Meaning:
The work may be promising, but it is not proven.

### Verified Pass
Use this when:
- the requested verification commands were actually run
- the requested checks passed
- the result is supported by concrete output, logs, or direct command results

Meaning:
The requested task is complete at the agreed verification level.

### Rejected
Use this when:
- the work is out of scope
- required verification failed
- the evidence is missing for the requested acceptance level
- the task introduced hidden complexity or misleading claims

Meaning:
The task is not accepted.

## Evidence Rule

Never use "Verified Pass" without concrete evidence from commands, logs, or equivalent execution results.

If evidence is partial, say so explicitly.

## Review Language

Preferred phrases:
- "static review only"
- "not runtime-verified"
- "verified for the requested commands"
- "evidence missing for a full pass"

Avoid:
- "should work"
- "probably fine"
- "basically done"