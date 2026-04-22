# Disaster Mesh Communications

Repository: https://github.com/00000star/disaster-mesh-communications

Status: MVP built as a standalone offline-first PWA.

## Mission

Build an offline-first community coordination tool for disasters, outages, and local emergencies.

## Problem

When internet and cellular service fail, communities lose coordination. People need to track who needs help, what supplies exist, what routes are blocked, what radio channels are being used, and what tasks are already assigned.

Paper works, but it does not copy, search, sort, or synchronize easily. A local-first app can fill the gap if it is designed to work without a central server.

## MVP

- Incident dashboard.
- People and household registry.
- Supply requests and offers.
- Task board with status and owner.
- Radio/channel plan.
- Offline map notes.
- QR export for small updates.
- JSON file import/export for larger sync.
- Print mode for handoff to paper.

## Technical Plan

- Static PWA.
- IndexedDB for local storage.
- No account required for MVP.
- Data export as signed or checksumed JSON.
- Optional LAN sync later.
- Optional LoRa/mesh bridge later.

## Safety Rules

- Do not claim guaranteed rescue.
- Keep medical advice minimal and link to verified sources.
- Make stale data visible.
- Avoid exposing private household data by default.

## Portfolio Value

This project demonstrates local-first design, offline UX, data modelling, resilience thinking, and practical social value.
