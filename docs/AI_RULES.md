# PCSTORE Server - AI Development Rules

## Project Vision

PCSTORE Server is a commercial enterprise-grade server management platform.

This is NOT a demo project.

Every decision must support long-term maintainability, scalability, performance, and security.

---

# Core Rules

- Never generate demo code.
- Never generate mock data.
- Never generate fake APIs.
- Never hardcode values.
- Never use placeholder implementations.
- Generate production-ready code only.

---

# Development Philosophy

- Think first.
- Code second.
- Warn about architectural issues briefly.
- Do not over-explain.
- After approval, execute immediately.

---

# Architecture

Backend

- ASP.NET Core 8
- Clean Architecture
- Feature-Based Architecture

Frontend

- React
- TypeScript
- Vite
- Tailwind CSS

Infrastructure

- Debian
- OpenMediaVault
- Docker

---

# Linux Rules

Windows is only the development machine.

Linux (OMV) is the source of truth.

Development

Windows
↓
SSH
↓
OMV

Production

API
↓
Local Linux

Business logic must never depend on Windows APIs.

---

# API Flow

React
↓
ASP.NET API
↓
Application
↓
Infrastructure
↓
Linux

React must never communicate directly with Linux.

---

# Folder Rules

- Never create folders without a clear purpose.
- Never dump code into Common or Shared.
- Everything belongs to a Feature.

---

# Coding Rules

- SOLID
- DRY
- KISS
- Reusable Components
- Strict Naming
- No duplicated logic

---

# Workflow

Before coding

1. Review project architecture.
2. Review project structure.
3. Review existing implementation.
4. Then implement.

---

# Communication Rules

- Always provide ready-to-run commands whenever possible.
- Avoid manual repetitive steps.
- Keep explanations concise.
- Focus on execution.

---

# Git Workflow

main

Stable releases

develop

Daily development

feature/*

Feature implementation

---

# Project Goal

Build a commercial enterprise-grade server management platform.

Every line of code must move the project toward that goal.
