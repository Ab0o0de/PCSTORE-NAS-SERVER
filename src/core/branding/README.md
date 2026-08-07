# PCSTORE Server Branding Engine

## Overview

The Branding Engine is the single source of truth for the application's visual identity, branding assets, typography, configuration, and theme values.

Every component, layout, page, and feature must consume branding data from this module.

---

# Folder Structure

```
branding/
│
├── Brand.ts
├── Colors.ts
├── Logos.ts
├── Icons.ts
├── Images.ts
├── Typography.ts
├── Config.ts
├── Theme.ts
├── index.ts
└── README.md
```

---

# Purpose of Each File

## Brand.ts

Contains:

- Company Name
- Product Name
- Description
- Version
- Copyright
- Support Information
- Default Language

---

## Colors.ts

Central color palette.

Contains:

- Primary
- Secondary
- Accent
- Semantic
- Background
- Surface
- Border
- Text
- Sidebar
- Topbar
- Status
- Hover
- Focus
- Disabled

---

## Logos.ts

Contains all application logos.

Examples:

- Main Logo
- Mini Logo
- Sidebar Logo
- Login Logo
- Splash Logo
- Favicon

---

## Icons.ts

Central icon registry.

Application components should never import icon libraries directly.

Always use:

```ts
import { Icons } from "@/core/branding";
```

---

## Images.ts

Contains all application image assets.

Examples:

- Login Background
- Empty State
- Server Placeholder
- Default Avatar

---

## Typography.ts

Contains design tokens.

Includes:

- Font Families
- Font Sizes
- Font Weights
- Line Heights
- Border Radius
- Spacing
- Shadows
- Animation
- Transition

---

## Config.ts

Contains application configuration.

Examples:

- API URL
- Environment
- Timezone
- Language
- Debug Mode

---

## Theme.ts

Combines every branding module into one object.

```ts
Theme.Brand
Theme.Colors
Theme.Images
Theme.Logos
Theme.Config
Theme.Typography
Theme.Icons
```

---

## index.ts

Single entry point.

Import everything from:

```ts
import { Theme } from "@/core/branding";
```

---

# Usage

Example:

```ts
import { Theme } from "@/core/branding";

const company = Theme.Brand.Company