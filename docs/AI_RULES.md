# PCSTORE Server - AI Development Rules

## Project

Name: PCSTORE Server

Type: Commercial Enterprise Server Management Platform

Target:
Debian
OpenMediaVault (OMV)
Linux

---

# Non-Negotiable Rules

- Never generate demo code.
- Never generate mock data.
- Never generate fake APIs.
- Never generate placeholder implementations.
- Never hardcode business values.
- Never duplicate code.
- Never break Clean Architecture.

---

# Architecture

Backend

- ASP.NET Core 8
- Clean Architecture
- Feature-Based
- Entity Framework Core
- PostgreSQL
- JWT
- Dependency Injection

Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Query
- Zustand
- React Hook Form
- Axios

---

# Linux Philosophy

Windows is ONLY for development.

Linux is the execution environment.

React
↓

ASP.NET API
↓

Application
↓

Infrastructure
↓

Linux

The frontend must never execute Linux commands directly.

---

# Performance

Always prefer:

- Low RAM usage
- Low CPU usage
- Lazy Loading
- Tree Shaking
- Code Splitting
- Reusable Components

---

# Security

Always implement:

- JWT
- RBAC
- Permission Based Authorization
- Validation
- Secure Defaults

Future:

- LDAP
- Active Directory
- SSO
- MFA

---

# Branding

Nothing is hardcoded.

Everything comes from the Branding Engine.

Including:

- Product Name
- Company Name
- Logos
- Colors
- Icons
- Images
- Version

---

# Workflow

Before writing code:

1. Review project structure.
2. Review related modules.
3. Check NOTES.md.
4. Implement.
5. Update NOTES.md if needed.

---

# Development Rule

If a feature is not needed today:

Do not implement it.

Record it inside NOTES.md.

---

# Communication Rule

Always provide ready-to-run code.

Never ask the user to manually create files.

Always generate complete implementations.

---

# Final Goal

Build an enterprise-grade commercial server management platform.

No shortcuts.

No temporary solutions.

No demo implementations.