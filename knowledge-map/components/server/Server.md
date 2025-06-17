# Server Component

The Server component is the main HTTP server implementation that handles incoming requests to the OpenShift Console backend.

## Overview

The Server component provides the core HTTP server functionality for the OpenShift Console, serving the frontend application, proxying API requests, managing authentication, and supporting GraphQL queries. It's implemented in Go and serves as the backend infrastructure for the entire console application.

## Key Features

### HTTP Request Handling

Comprehensive HTTP server capabilities:
- Static file serving for the frontend
- Request routing and multiplexing
- HTTP/HTTPS support
- Path-based routing
- Method-based routing
- Content type handling
- Compression support
- CORS configuration
- WebSocket connections for GraphQL subscriptions

### API Proxying

Kubernetes API proxy functionality:
- Transparent API proxying
- Authentication token passthrough
- Request transformation
- Response transformation
- WebSocket support for streaming
- Path rewriting
- Error handling and normalization

### GraphQL Support

GraphQL API capabilities:
- Schema-based API interface
- Efficient querying of Kubernetes resources
- Permission checking operations
- WebSocket subscriptions
- Error handling and formatting
- Context and header propagation

### Session Management

User session handling:
- Cookie-based session tracking
- Session creation and validation
- Session expiration and renewal
- Cross-site request forgery (CSRF) protection
- Session storage and persistence
- Session data management

### Security Features

Comprehensive security measures:
- TLS configuration and management
- HTTP security headers
- Content Security Policy (CSP)
- XSS protection headers
- Clickjacking protection
- CSRF token validation
- Rate limiting
- Input validation

## Implementation Details

The Server component is implemented using:
- Go's standard library HTTP server
- Custom middleware chain
- Prometheus integration for metrics
- Gorilla mux for routing
- Graph-gophers/graphql-go for GraphQL functionality
- Structured logging
- Graceful shutdown handling
- Context-based request cancellation

## Server Configuration

The server supports extensive configuration:
- Listen address and port
- TLS certificate and key paths
- Base path for the application
- CORS allowed origins
- Proxy settings
- Authentication providers
- Logging levels and formats
- Timeout settings
- Kubernetes API server URL
- GraphQL endpoint configuration

## Request Lifecycle

When handling a request, the server follows this flow:
1. Request received on configured port
2. Request passed through middleware chain
3. Request path matched to a handler
4. Handler processes the request:
   - Static assets served directly
   - API requests proxied to Kubernetes API
   - GraphQL requests processed by the GraphQL server
   - Auth requests handled by auth system
   - Frontend app served for other paths
5. Response processed through middleware
6. Response returned to client

## Integration Points

The Server integrates with:
- **Kubernetes API**: For proxying requests
- **Authentication System**: For user authentication
- **Frontend Application**: Served to clients
- **Prometheus**: For metrics collection
- **Certificate Management**: For TLS
- **Resource Lister**: For API discovery
- **GraphQL Server**: For schema-based API queries

## Related Components

- [Middleware](./Middleware.md): HTTP middleware for the server
- [Proxy](./Proxy.md): API proxy functionality
- [GraphQLServer](./GraphQLServer.md): GraphQL API functionality
- [ResourceLister](./ResourceLister.md): API resource discovery
- [CertificateManager](./CertificateManager.md): TLS certificate management
- [Authentication Components](../auth/README.md): User authentication
