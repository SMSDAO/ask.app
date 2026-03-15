# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2026-03-15

### Added

- **CI/CD pipelines** — `ci.yml` (lint + test + build), `release.yml` (GitHub Release on tag), `security.yml` (dependency audit + secret scanning).
- **`package.json`** — npm project definition with `lint`, `test`, `build`, `start` scripts.
- **`eslint.config.mjs`** — ESLint v9 flat config with CommonJS globals.
- **`/docs` directory** — full documentation suite:
  - `architecture.md` — stack, module map, API routes, data flow, security architecture.
  - `deployment.md` — prerequisites, quick start, production deployment guide, service table.
  - `env-vars.md` — complete environment variable reference.
  - `user-guide.md` — end-user guide for dashboard, navigation, and API access.
  - `admin-guide.md` — admin guide for user/role management, billing, audit logs.
  - `developer-guide.md` — local setup, API reference, scripts, contributing guide.
- **`CHANGELOG.md`** — this file, following Keep-a-Changelog format.
- **Health endpoint** `GET /health` — returns uptime and timestamp.
- **Metrics endpoint** `GET /metrics` — returns memory and uptime metrics.
- **Updated `.env.example`** — comprehensive template covering server, auth, database, OAuth, logging, and rate limiting variables.
- **`docs/assets/ui/`** — directory for UI screenshots.

### Changed

- **`truthApi.js`** — added missing Express import/setup, added `/health` and `/metrics` endpoints, exported `app` for testability.
- **`README.md`** — expanded from single-line placeholder to full project description with quick start, architecture overview, API reference, and UI Preview section.
- **`ci.yml`** — fixed setup-node cache configuration; removed conditional `npm ci` guard; added `cache-dependency-path`.

### Fixed

- **CI failure** — `setup-node@v4` with `cache: 'npm'` failed because no `package-lock.json` existed. Fixed by adding `package.json`, running `npm install --package-lock-only` to generate `package-lock.json`, and setting `cache-dependency-path` in the workflow.
- **`truthApi.js`** — file was incomplete (missing `require('express')`, `express()` initialization, and `app.listen()`). Fixed by adding proper Express server setup.

### Security

- Added `security.yml` workflow with `npm audit --audit-level=high` and secret scanning.
- JWT secrets, bcrypt rounds, and rate limiting documented in `.env.example`.
- `.env` files excluded from git via `.gitignore` (checked in `security.yml`).

[Unreleased]: https://github.com/SMSDAO/ask.app/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/SMSDAO/ask.app/releases/tag/v1.0.0
