# Authenticator

**Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth.go`

## Purpose
The Authenticator is the core backend component that manages the OAuth2 authentication flow. It handles token acquisition, token validation, and user session management.

## Interfaces

### NewAuthenticator(ctx context.Context, c *Config) (*Authenticator, error)
Creates a new Authenticator instance with the specified configuration.

**Parameters:**
- `ctx`: Context for timeout and cancellation
- `c`: Configuration settings for the authenticator

**Returns:** Authenticator instance and potential error

### Authenticate(r *http.Request) (*User, error)
Authenticates a request using cookies or other authentication methods.

**Parameters:**
- `r`: HTTP request to authenticate

**Returns:** User object if authentication successful, error otherwise

### LoginFunc(w http.ResponseWriter, r *http.Request)
Redirects the user to the OAuth provider for authentication.

**Parameters:**
- `w`: HTTP response writer
- `r`: HTTP request

### CallbackFunc(fn func(loginInfo LoginJSON, successURL string, w http.ResponseWriter)) func(w http.ResponseWriter, r *http.Request)
Handles OAuth2 callbacks and processes the authentication code/token exchange.

**Parameters:**
- `fn`: Function to call with login information on success

**Returns:** HTTP handler function for OAuth callbacks

### LogoutFunc(w http.ResponseWriter, r *http.Request)
Logs out the user by cleaning up session cookies.

**Parameters:**
- `w`: HTTP response writer
- `r`: HTTP request

## Configuration Properties
- `IssuerURL`: OAuth2 issuer URL
- `RedirectURL`: Callback URL after authentication
- `ClientID`: OAuth2 client ID
- `ClientSecret`: OAuth2 client secret
- `Scope`: OAuth2 scopes to request
- `SuccessURL`: URL to redirect on successful authentication
- `ErrorURL`: URL to redirect on authentication errors
- `CookiePath`: Path for session cookies
- `SecureCookies`: Whether to set secure flag on cookies
- `CookieDomain`: Domain for session cookies

## Dependencies
- **Imports:**
  - `go-oidc`: OpenID Connect library
  - `oauth2`: OAuth2 implementation
  - `http`: HTTP server and client functionality
  - `crypto`: Cryptographic operations for token security

- **Imported By:**
  - `server.go`: Uses authenticator for protecting API endpoints
  - `session.go`: For session management

## Authentication Methods
The Authenticator supports multiple authentication sources:
- `AuthSourceTectonic`: Generic OAuth2/OIDC provider
- `AuthSourceOpenShift`: OpenShift-specific OAuth server

## Implementation Notes
- Automatically retries connecting to identity provider
- Caches HTTP clients for performance
- Supports custom CA certificates for secure connections
- Uses CSRF tokens to prevent cross-site request forgery
- Handles session timeouts and token expiration
