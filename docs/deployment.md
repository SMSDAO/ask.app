# Deployment Guide

## Prerequisites

- Node.js >= 20
- Python >= 3.10
- PostgreSQL >= 14
- npm >= 10

## Quick Start

```bash
# 1. Clone and install
git clone https://github.com/SMSDAO/ask.app.git
cd ask.app
npm ci

# 2. Configure environment
cp .env.example .env
# Edit .env with your values

# 3. Start all services
bash deploy/install.sh
```

## Environment Setup

See [env-vars.md](env-vars.md) for all required environment variables.

## Services

| Service | Port | Start Command |
|---|---|---|
| Main API | 3000 | `node truthApi.js` |
| Code-Gen API | 3005 | `node scripts/truthApi.js` |
| AI Service | 8001 | `uvicorn adaptive_learning:router --host 0.0.0.0 --port 8001` |

## Production Deployment

### Docker (Recommended)

```bash
# Build and start all services
docker compose up -d
```

### Manual

```bash
# Install Node.js dependencies
npm ci --omit=dev

# Install Python dependencies
pip install fastapi uvicorn

# Start services with process manager (e.g., PM2)
pm2 start truthApi.js --name "ask-api"
pm2 start "node scripts/truthApi.js" --name "code-gen"
pm2 start "uvicorn backend.adaptive_learning:router --host 0.0.0.0 --port 8001" \
  --name "ai-service" --interpreter python3
```

## CI/CD

GitHub Actions workflows handle:
- **ci.yml**: Triggered on push/PR — lint, test, build
- **release.yml**: Triggered on tag push — build, test, create GitHub Release
- **security.yml**: Triggered on push/schedule — dependency audit, secret scanning

## Database

```bash
# Run migrations (when database layer is configured)
npm run db:migrate

# Seed initial data
npm run db:seed
```
