# Developer Guide

## Overview

This guide covers local development, API usage, and contributing to ask.app.

## Local Setup

```bash
# 1. Clone repository
git clone https://github.com/SMSDAO/ask.app.git
cd ask.app

# 2. Install Node.js dependencies
npm ci

# 3. Install Python dependencies (for AI service)
pip install fastapi uvicorn

# 4. Configure environment
cp .env.example .env
# Edit .env — set DATABASE_URL, JWT_SECRET, JWT_REFRESH_SECRET

# 5. Start services
node truthApi.js            # Main API on :3000
node scripts/truthApi.js    # Code-gen API on :3005
uvicorn backend.adaptive_learning:router --port 8001  # AI service
```

## Project Structure

```
ask.app/
├── truthApi.js              # Main Express API
├── scripts/truthApi.js      # Code-gen API
├── backend/
│   └── adaptive_learning.py # FastAPI AI service
├── deploy/install.sh        # Service startup script
├── docs/                    # Documentation
├── .github/workflows/       # CI/CD
├── package.json
├── .env.example
└── eslint.config.mjs
```

## API Reference

### GET /health

Returns service health status.

```json
{
  "status": "ok",
  "uptime": 123.45,
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### GET /metrics

Returns runtime metrics.

```json
{
  "uptime": 123.45,
  "memory": { "rss": 12345, "heapUsed": 6789 },
  "timestamp": "2025-01-01T00:00:00.000Z"
}
```

### GET /status

```
✅ Truth API is running!
```

### POST /generate-code (port 3005)

```json
// Request
{ "language": "JavaScript", "task": "sort an array" }

// Response
{ "result": "// Code for sort an array in JavaScript\nfunction example() { return true; }" }
```

### POST /learn (port 8001)

```json
// Request
{ "user_id": "abc123", "action": "query", "data": {} }

// Response
{ "status": "learning", "input": { "user_id": "abc123", "action": "query" } }
```

## Scripts

| Script | Description |
|---|---|
| `npm run lint` | Run ESLint across all JS files |
| `npm test` | Run Jest unit tests |
| `npm run build` | Build step (placeholder for production bundling) |
| `npm start` | Start main API |
| `npm run start:scripts` | Start code-gen API |

## Contributing

1. Fork the repository.
2. Create a feature branch: `git checkout -b feat/my-feature`.
3. Make your changes and ensure `npm run lint` and `npm test` pass.
4. Open a pull request against `main`.

## CI/CD

All PRs trigger the `ci.yml` workflow:
- ESLint (zero warnings)
- Jest tests (must pass)
- Build step

Merges to `main` also run `security.yml` (dependency audit + secret scan).

Tags matching `v*.*.*` trigger `release.yml` to create a GitHub Release.
