# Middleware Component

The Middleware component provides a collection of HTTP middleware functions that process requests and responses in the OpenShift Console server.

## Overview

The Middleware component implements a chain of processing functions that wrap HTTP handlers to provide cross-cutting functionality such as authentication, logging, metrics, and error handling. Each middleware in the chain performs a specific function and can modify requests before they reach handlers or responses before they are sent to clients.

## Key Middleware Functions

### Authentication Middleware

User authentication processing:
- Token validation and verification
- Session validation
- Anonymous access handling
- Redirect to login for unauthenticated requests
- User context extraction and propagation
- Authorization header management
- Impersonation handling

### Logging Middleware

Request logging capabilities:
- Request method, path, and query logging
- Response status code logging
- Timing information
- User identification
- Error logging
- Access logging
- Structured logging format

### Metrics Middleware

Performance and usage metrics:
- Request count tracking
- Response time measurement
- Status code distribution
- Error rate monitoring
- Request size tracking
- Response size tracking
- Integration with Prometheus

### Security Middleware

Security-related processing:
- CSRF token validation
- Content Security Policy headers
- XSS protection headers
- Frame options headers
- HTTP Strict Transport Security
- Cache control headers
- IP filtering and validation

### Error Handling Middleware

Robust error management:
- Error catching and processing
- Standardized error responses
- Error classification
- User-friendly error messages
- Detailed logging for errors
- Developer mode error details
- Production mode safe errors

## Implementation Details

The Middleware component is implemented using:
- Go's HTTP middleware pattern
- Functional composition
- Context-based data passing
- Chainable middleware design
- Request/response wrapper functions
- HTTP handler decoration

## Middleware Chain

The server constructs a middleware chain:
```go
// Example middleware chain construction
handler = middleware.RequestID(handler)
handler = middleware.Logger(handler)
handler = middleware.Metrics(handler)
handler = middleware.RecoverPanic(handler)
handler = middleware.Authentication(handler)
handler = middleware.CSRF(handler)
handler = middleware.SecurityHeaders(handler)
```

## Custom Middleware

The system supports custom middleware:
- Route-specific middleware
- Conditional middleware application
- Feature-specific middleware
- Environment-specific middleware
- Plugin-based middleware extension
- Dynamic middleware configuration

## Context Propagation

Middleware uses request context for data:
- User information
- Authentication details
- Request metadata
- Timing information
- Tracing context
- Request-scoped values
- Cancellation signals

## Integration Points

The Middleware integrates with:
- **Server**: Primary user of middleware chain
- **Authentication System**: For auth middleware
- **Prometheus**: For metrics middleware
- **Logging System**: For logging middleware
- **Proxy**: For applying middleware to proxied requests
- **Session Management**: For user session handling

## Related Components

- [Server](./Server.md): Main HTTP server using middleware
- [Proxy](./Proxy.md): API proxy with middleware support
- [Authentication Components](../auth/README.md): User authentication
- [CertificateManager](./CertificateManager.md): TLS with security middleware
