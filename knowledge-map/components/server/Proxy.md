# Proxy Component

The Proxy component provides API proxying functionality that forwards client requests from the OpenShift Console to the Kubernetes API server.

## Overview

The Proxy component serves as a critical intermediary between the frontend application and the Kubernetes API server, handling authentication token management, request transformation, and response processing. It allows the frontend to make API calls without dealing with cross-origin restrictions or complex authentication mechanisms.

## Key Features

### Request Proxying

Comprehensive request forwarding:
- Path-based proxying
- Method preservation
- Header forwarding and transformation
- Query parameter handling
- Request body streaming
- Content-type preservation
- Binary data support
- Large request handling

### Authentication Handling

Token and authentication management:
- Bearer token extraction and forwarding
- Session-based token retrieval
- Token refresh handling
- Impersonation header support
- Authentication error handling
- Authorization header management
- Anonymous access handling

### Response Processing

Response handling and transformation:
- Status code preservation
- Header transformation
- Response body streaming
- Content-type handling
- Compression support
- Error normalization
- Binary response handling
- Large response handling

### WebSocket Support

Support for WebSocket connections:
- WebSocket protocol upgrade
- Connection establishment
- Message forwarding
- Connection lifecycle management
- Error handling for WebSockets
- Ping/pong handling
- Connection pooling

## Implementation Details

The Proxy component is implemented using:
- Go's HTTP client and server libraries
- Custom transport implementations
- Request and response streaming
- Connection pooling
- Retry mechanisms with backoff
- Timeout handling
- Context-based cancellation

## Proxy Routes

The proxy handles various API paths:
- `/api/*` - Core Kubernetes API
- `/apis/*` - Extended Kubernetes APIs
- `/version` - Kubernetes version info
- `/openapi/*` - OpenAPI definitions
- `/swaggerapi/*` - Swagger definitions
- Custom proxy paths for extensions

## Security Considerations

The proxy implements security measures:
- Request validation
- Response validation
- Path traversal protection
- Header sanitization
- Sensitive information filtering
- Rate limiting
- Access control based on user permissions
- Request logging for audit

## Error Handling

Robust error management for proxied requests:
- API server error normalization
- Network error handling
- Timeout handling
- Connection failure recovery
- Response validation
- Error classification
- User-friendly error transformation
- Detailed logging for troubleshooting

## Integration Points

The Proxy integrates with:
- **Kubernetes API Server**: Primary target for proxied requests
- **Authentication System**: For token management
- **Server**: As a handler for API routes
- **Middleware**: For request/response processing
- **ResourceLister**: For API discovery and validation
- **Frontend Application**: Consumer of proxied APIs

## Related Components

- [Server](./Server.md): Main HTTP server using the proxy
- [Middleware](./Middleware.md): HTTP middleware applied to proxied requests
- [ResourceLister](./ResourceLister.md): API resource discovery
- [Authentication Components](../auth/README.md): User authentication for proxy
