# Admin Guide

## Overview

The Admin role has full access to the platform, including user management, billing, audit logs, and configuration.

## Admin Dashboard

Access the **Admin Dashboard** via the **Admin** tab in the navigation bar.

### Sections

| Section | Description |
|---|---|
| System Overview | Real-time health, API status, and service uptime |
| User Management | Create, edit, deactivate users |
| Role Management | Assign roles (Admin, Developer, User, Auditor) |
| Permission Management | Grant or revoke specific permissions per user/role |
| Billing Controls | View and manage subscription plans and usage billing |
| API Monitoring | Live API request rates, error rates, and latency |
| Audit Logs | Full activity log for all users and admin actions |
| Configuration | Platform-wide settings, feature flags, environment overrides |

## User Management

### Creating a User

1. Go to **Admin → User Management**.
2. Click **Create User**.
3. Fill in: email, display name, and initial role.
4. The user will receive an email with a temporary password.

### Assigning Roles

1. Find the user in the **User Management** table.
2. Click **Edit**.
3. Select the desired role from the **Role** dropdown.
4. Click **Save**.

### RBAC Roles

| Role | Description |
|---|---|
| **Admin** | Full access to all features and settings |
| **Developer** | API access, developer tools, read access to admin panels |
| **User** | Standard access to personal dashboard and features |
| **Auditor** | Read-only access to audit logs and reports |

## Billing

The **Billing Controls** panel allows admins to:

- View per-user usage and costs
- Set usage limits and quotas
- Manage subscription tiers
- Export billing reports

## Audit Logs

All user and admin actions are logged with:
- Timestamp
- Actor (user who performed the action)
- Action type
- Target resource
- IP address

Logs can be filtered and exported from **Admin → Audit Logs**.

## Security

- Change JWT secrets regularly in production.
- Review audit logs weekly for anomalies.
- Use the **Security** workflow to scan for dependency vulnerabilities.
- Keep `BCRYPT_ROUNDS` at 12 or higher.
