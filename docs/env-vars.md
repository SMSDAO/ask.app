# Environment Variables

All environment variables should be set in a `.env` file based on `.env.example`.

## Server

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port for the main Express API |
| `NODE_ENV` | `development` | Node environment (`development`, `production`, `test`) |

## Public API / Blockchain

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_RPC_URL` | Yes | RPC endpoint for Base/Sepolia blockchain |
| `NEXT_PUBLIC_API_URL` | Yes | Base URL for the backend API |
| `NEXT_PUBLIC_ENV` | Yes | Application environment name shown in UI |

## Database

| Variable | Required | Description |
|---|---|---|
| `DATABASE_URL` | Yes | PostgreSQL connection string (`postgresql://user:pass@host:5432/db`) |

## Authentication

| Variable | Default | Description |
|---|---|---|
| `JWT_SECRET` | — | Secret key for signing JWT access tokens (**required in production**) |
| `JWT_REFRESH_SECRET` | — | Secret key for signing JWT refresh tokens (**required in production**) |
| `JWT_EXPIRY` | `15m` | Access token expiry |
| `JWT_REFRESH_EXPIRY` | `7d` | Refresh token expiry |
| `BCRYPT_ROUNDS` | `12` | bcrypt hashing rounds |

## OAuth (optional)

| Variable | Description |
|---|---|
| `GITHUB_CLIENT_ID` | GitHub OAuth app client ID (leave blank to disable) |
| `GITHUB_CLIENT_SECRET` | GitHub OAuth app client secret |
| `GOOGLE_CLIENT_ID` | Google OAuth app client ID (leave blank to disable) |
| `GOOGLE_CLIENT_SECRET` | Google OAuth app client secret |

## Logging

| Variable | Default | Description |
|---|---|---|
| `LOG_LEVEL` | `info` | Logging level (`debug`, `info`, `warn`, `error`) |

## Rate Limiting

| Variable | Default | Description |
|---|---|---|
| `RATE_LIMIT_WINDOW_MS` | `60000` | Rate limit window in milliseconds |
| `RATE_LIMIT_MAX` | `100` | Maximum requests per window per IP |
