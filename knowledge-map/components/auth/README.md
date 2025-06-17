# Authentication Components

The authentication system in OpenShift Console is divided between backend (Go) and frontend (JavaScript) components. It implements OAuth2-based authentication with OpenID Connect and supports various identity providers.

## Backend Components

### [Authenticator](./Authenticator.md)
Main backend component responsible for OAuth2 authentication flows.

### [SessionStore](./SessionStore.md)
Manages user sessions on the backend.

### [LoginState](./LoginState.md)
Represents the state of a user's login session.

## Frontend Components

### [AuthService](./AuthService.md)
Frontend service for handling authentication-related functions.

### [OAuthPage](./OAuthPage.md)
Frontend component for rendering OAuth configuration.

## Authentication Flows

The authentication system follows these key flows:

1. [User Login Flow](../../flows/authentication-flow.md)
2. [Token Refresh Flow](../../flows/token-refresh-flow.md)
3. [User Logout Flow](../../flows/logout-flow.md)

## Related External Components

OpenShift Console integrates with several external authentication components:

- `oauth-server`: Handles token issuance and validation
- `oauth-apiserver`: Provides OAuth-related API endpoints
- `cluster-authentication-operator`: Manages cluster authentication configuration
