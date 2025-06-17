# OpenShift Console Knowledge Map

## Project Overview
The OpenShift console is a web application for managing OpenShift Container Platform (version 4.12) clusters. It provides a user interface for administrative and development tasks within the platform.

## Project Structure
The OpenShift console codebase is organized as follows:

- `/projects/Dropbox/_git/web-console/`: Main project directory
  - `frontend/`: Frontend code (React, TypeScript)
    - `packages/`: Contains various plugins and modules
    - `public/`: Core frontend components
  - `pkg/`: Backend code (Go)
    - `auth/`: Authentication and authorization
    - `server/`: HTTP server and API endpoints
  - `cmd/`: Application entry points

## Related Projects
- `oauth-apiserver`: `/projects/Dropbox/_git/oauth-apiserver`
- `cluster-authentication-operator`: `/projects/Dropbox/_git/cluster-authentication-operator`
- `oauth-server`: `/projects/Dropbox/_git/oauth-server`

## Key Component Groups

### Core Components
- [Application Core](./components/core/README.md)
- [Authentication Components](./components/auth/README.md)
- [Server Components](./components/server/README.md)
- [Plugin Architecture](./components/plugins/README.md)
- [User Preferences](./components/user-preferences/README.md)

### UI Components
- [Navigation Components](./components/navigation/README.md)
- [Perspective System](./components/perspectives/README.md)
- [Monitoring Components](./components/monitoring/README.md)
- [Topology View](./components/topology/README.md)
- [Kubernetes Resources](./components/k8s-resources/README.md)

### Functional Areas
- [Developer Console](./components/dev-console/README.md)
- [Administrator Console](./components/admin-console/README.md)
- [Frontend Core Components](./components/frontend-core/README.md)

## Major Flows

### Core System Flows
- [Authentication Flow](./flows/authentication-flow.md)
- [Token Refresh Flow](./flows/token-refresh-flow.md)
- [Logout Flow](./flows/logout-flow.md)
- [API Request Flow](./flows/api-request-flow.md)
- [Plugin Loading Flow](./flows/plugin-loading-flow.md)

### UI and Feature Flows
- [Navigation Resolution Flow](./flows/navigation-resolution-flow.md)
- [Monitoring Metrics Flow](./flows/monitoring-metrics-flow.md)
- [Perspective Switching Flow](./flows/perspective-switching-flow.md)

## Relationship Maps
- [Authentication Components Map](./relationships/auth-components-map.md)
- [Frontend-Backend Interaction Map](./relationships/frontend-backend-map.md)
- [Plugin System Map](./relationships/plugin-system-map.md)
- [Monitoring System Map](./relationships/monitoring-system-map.md)
