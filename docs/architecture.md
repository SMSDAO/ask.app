# Architecture

## Overview

ask.app is a full-stack arbitrage platform built on a modern Node.js/Express backend with a Next.js frontend, blockchain integration via Base/Sepolia RPC, and a Python-based AI adaptive learning service.

## Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js (React), Tailwind CSS, Neo-Glow Design System |
| Backend API | Node.js / Express |
| AI Service | Python / FastAPI |
| Blockchain | Base / Sepolia via public RPC |
| Database | PostgreSQL (configurable via `DATABASE_URL`) |
| Auth | JWT + bcrypt, RBAC |
| CI/CD | GitHub Actions |
| Package Manager | npm |

## Module Map

```
ask.app/
├── truthApi.js              # Express main API (status, health, metrics)
├── scripts/
│   └── truthApi.js          # Code-generation API (port 3005)
├── backend/
│   └── adaptive_learning.py # FastAPI adaptive learning router (port 8001)
├── deploy/
│   └── install.sh           # Startup script
├── .github/
│   └── workflows/
│       ├── ci.yml           # Lint, test, build
│       ├── release.yml      # Release on tag push
│       └── security.yml     # Dependency audit + secret scanning
├── docs/                    # Project documentation
└── .env.example             # Environment variable template
```

## API Routes

### Main API (`truthApi.js`, port 3000)

| Method | Path | Description |
|---|---|---|
| GET | `/status` | API status check |
| GET | `/health` | Health check with uptime |
| GET | `/metrics` | Runtime metrics (memory, uptime) |

### Code-Gen API (`scripts/truthApi.js`, port 3005)

| Method | Path | Description |
|---|---|---|
| POST | `/generate-code` | Generate code snippet for a given language and task |

### AI Service (`backend/adaptive_learning.py`, port 8001)

| Method | Path | Description |
|---|---|---|
| POST | `/learn` | Submit user interaction data for adaptive learning |

## Data Flow

```
Client → Next.js Frontend
           ↓
    Express API (port 3000)
           ↓
    Code-Gen API (port 3005) ←→ AI Service (port 8001)
           ↓
    PostgreSQL Database
           ↓
    Base/Sepolia RPC (blockchain reads)
```

## Security Architecture

- JWT access tokens (short-lived, 15 min)
- JWT refresh tokens (7 days, stored securely)
- bcrypt password hashing (12 rounds)
- RBAC roles: Admin, Developer, User, Auditor
- Helmet.js security headers
- Rate limiting per IP
- Input validation on all endpoints
- CSRF protection on state-changing routes
