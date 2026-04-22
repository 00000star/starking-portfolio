# Humanity-Benefit Project Pipeline

These projects are chosen because they are useful, demoable, and technically credible. They should become standalone repositories over time.

## Selection Criteria

- The project helps people solve a real problem.
- It can be demonstrated without a huge organization.
- It has enough technical depth to prove engineering skill.
- It can grow from MVP to serious tool.
- It avoids fake certainty where safety or health are involved.

## Expanded Brainstorming Context

The larger prompt is now captured in `HUMANITY_SOFTWARE_PROMPT.md`. Use it when the portfolio needs new ideas, tighter project specs, or a better build queue.

The short version:

- Build for people who are usually left out: low-resource communities, rural clinics, small schools, informal workers, caregivers, elders, disabled users, migrants, volunteers, and groups still running on paper or chat apps.
- Assume real-world constraints: offline use, old Android phones, shared devices, weak power, low bandwidth, multilingual users, low literacy, crisis stress, print handoff, privacy risk, stale information, and vendor shutdown.
- Prefer practical workflows: registries, decision trees, field guides, checklists, maps, inventories, document packs, translation cards, queues, routing, source-backed explainers, and local-first databases.
- Treat safety as a product feature: state limits, show source dates, preserve review status, keep sensitive data local, avoid false authority, and make uncertainty visible.
- Pick projects that produce portfolio evidence: a working demo, data model, tests, screenshots, case study, README, and a credible path from MVP to useful public infrastructure.

See `HUMANITY_SOFTWARE_IDEAS_100.md` for a broader catalog of 100 candidate projects.

## Priority Projects

### 1. Disaster Mesh Communications

Status: MVP built and published at https://github.com/00000star/disaster-mesh-communications

Build an offline-first incident coordination app for communities during outages.

Why it matters: disasters often break internet, power, and normal coordination. A local tool that stores tasks, supply needs, checklists, radio info, and exportable message logs can help people organize.

MVP:

- Offline incident board.
- People and location registry.
- Supply request tracker.
- Printable radio/channel sheet.
- QR/file export for handoff between devices.

### 2. Clean Water Field Guide

Status: MVP built and published at https://github.com/00000star/clean-water-field-guide

Build a mobile-first offline guide for water risk, treatment, storage, and safety.

Why it matters: waterborne disease kills quickly. A careful tool can teach safe priorities while clearly stating uncertainty and danger.

MVP:

- Treatment decision tree.
- Boiling, filtering, settling, disinfecting, and storage guidance.
- Warnings for chemical contamination and situations where simple treatment is not enough.
- Print mode.

### 3. Open Repair Atlas

Build a repair guide for practical devices: bicycles, radios, pumps, lights, small engines, and hand tools.

Why it matters: repair extends access, reduces waste, and helps communities maintain capability when replacement parts are expensive or unavailable.

MVP:

- Bicycle repair path.
- Hand pump repair path.
- Common failure library.
- Tool and part identification diagrams.

### 4. Local Food Resilience Planner

Build a planning tool for calories, crops, water, preservation, and storage.

Why it matters: food resilience is local. People need practical planning tools, not vague advice.

MVP:

- Household calorie demand calculator.
- Crop calendar.
- Storage and preservation checklist.
- Seed and water planning.

### 5. Readable Web Converter

Build a browser tool that turns messy web pages into readable, printable, accessible documents.

Why it matters: accessibility helps elders, students, low-vision readers, and people using weak devices or poor networks.

MVP:

- Clean reading view.
- Larger text and better contrast.
- Print/PDF layout.
- Citation preservation.

### 6. Home Resilience Checklist

Build a household planner for heat, outage, flooding, smoke, water interruption, and food disruption.

Why it matters: many people know risk exists but do not know what to do this week. The tool should produce an actionable 30-day plan.

MVP:

- Local risk questionnaire.
- Preparedness score.
- 30-day task plan.
- Printable household checklist.

## Neglected Software Brainstorm

These are additional projects that fit the portfolio thesis: useful software for important human needs that is often underbuilt because the audience is fragmented, low-income, offline, local, or not attractive to venture-scale SaaS.

### Mutual Aid Logistics OS

Coordinate requests, offers, inventory, volunteers, deliveries, and proof-of-handoff for small community groups.

MVP:

- Request and offer board.
- Inventory list with expiry dates.
- Volunteer task assignment.
- Delivery route notes.
- CSV/JSON export for accountability.

### Open Medical Translation Cards

Generate offline cards for symptoms, allergies, medications, chronic conditions, emergency contacts, and consent preferences across languages.

MVP:

- Plain-language medical profile builder.
- Printable and QR-shareable cards.
- Translation review workflow.
- Emergency mode with large text.

Safety rules:

- Do not diagnose.
- Do not replace clinicians.
- Mark translations as reviewed or unreviewed.

### Community Tool Library Manager

Help neighborhoods, schools, workshops, and repair groups share tools responsibly.

MVP:

- Tool catalog.
- Borrow/return tracking.
- Maintenance schedule.
- Safety notes and required training.
- Repair history.

### Low-Bandwidth School Kit

Package lessons, worksheets, teacher notes, progress records, and offline media for schools with unreliable internet.

MVP:

- Static lesson library.
- Printable worksheets.
- Teacher progress tracker.
- USB/offline distribution mode.

### Local Hazard Memory Map

Capture local knowledge about floods, outages, unsafe crossings, blocked roads, smoke zones, heat islands, and infrastructure failures.

MVP:

- Offline map notes.
- Time-stamped incident reports.
- Photo attachments.
- Exportable neighborhood risk summary.

### Plain-Language Rights Explainer

Turn complex local rules into careful, jurisdiction-aware checklists for tenants, workers, patients, and immigrants.

MVP:

- Topic-specific guided questions.
- Plain-language next steps.
- Evidence checklist.
- Referral/resource directory.

Safety rules:

- Do not claim to be legal advice.
- Cite sources.
- Show jurisdiction and last-reviewed date.

### Open Accessibility Audit Helper

Help small organizations check websites, PDFs, forms, and public information for basic accessibility failures.

MVP:

- Checklist-driven audit.
- Color contrast checker.
- Form label scanner.
- Plain-language remediation tasks.

### Offline Benefits Navigator

Help people understand what documents and steps may be needed for public benefits, aid, school support, or community services.

MVP:

- Local resource directory.
- Document checklist.
- Application step tracker.
- Exportable appointment sheet.

Safety rules:

- State that rules change.
- Require source dates.
- Avoid promising eligibility.

## Build Order

1. Deploy the portfolio.
2. Polish and deploy The Codex.
3. Build Disaster Mesh Communications.
4. Harden and deploy Clean Water Field Guide.
5. Build Obsidian AI Knowledge Engine.
6. Build Open Repair Atlas.
7. Build Mutual Aid Logistics OS.
8. Build Low-Bandwidth School Kit.

The strongest portfolio story is: preserve knowledge, coordinate during failure, keep water safe, repair what matters, and use AI responsibly.

## Donation Fit

Each public-good project should include a support link once published:

- Portfolio donate section.
- Repository funding metadata.
- README support button.
- Clear funding note explaining what donations support and what they do not guarantee.

Donation implementation is deferred until a working payment route is confirmed.
