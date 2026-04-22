# The Codex Case Study

## Summary

The Codex is a visual, interactive encyclopaedia of human technology. It maps technologies from primitive survival foundations to computing and AI as a directed dependency graph.

The project has two serious use cases:

- Collapse recovery: preserve enough knowledge to rebuild practical civilisation from primitive starting points.
- Space settlement: explain how to reproduce tools, materials, energy systems, medicine, computing, and eventually AI away from Earth supply chains.

## What It Demonstrates

- Product thinking around a non-trivial problem.
- React, TypeScript, Vite, and PWA engineering.
- Structured JSON data modelling and validation.
- Offline-first design.
- Search, filtering, graph navigation, and planner workflows.
- Obsidian export for local knowledge management.
- Serious documentation standards and open-source contribution structure.

## Current Features

- 80 structured technology entries.
- Interactive technology tree.
- Technology detail pages with components, build steps, materials, media, history, and verification metadata.
- Survival and space modes.
- Pathfinder for prerequisite chains.
- Planner for starting scenarios and target goals.
- Status dashboard for coverage, maturity, hazards, media, and capability readiness.
- Starter media generation and AI-generated concept media.
- Obsidian vault export.

## Engineering Notes

The data model is intentionally strict. Every technology entry has identity, prerequisites, unlocks, documentary content, raw materials, build steps, history, media, and verification metadata.

The architecture separates content from the interface, so contributors can improve technology entries without understanding the React application.

## Next Improvements

- Deploy live.
- Add screenshots and a short demo video.
- Add printable manuals.
- Add stronger citation workflows.
- Add real photographs and diagrams.
- Add user-editable planner inventory.
- Add expert review queues.

## Repository

https://github.com/00000star/Civilizationx
