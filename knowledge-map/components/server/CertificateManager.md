# CertificateManager Component

The CertificateManager component is responsible for managing TLS certificates used by the OpenShift Console server for secure HTTPS communication.

## Overview

The CertificateManager handles the lifecycle of TLS certificates, including loading, validation, renewal, and rotation. It ensures that the console server always has valid certificates for establishing secure connections with clients, while supporting both static certificates and dynamic certificate management.

## Key Features

### Certificate Loading

Certificate acquisition and loading:
- File-based certificate loading
- Certificate and key pair validation
- In-memory certificate storage
- PEM format handling
- Multiple certificate support
- Default certificate selection
- Error handling for invalid certificates

### Certificate Validation

Certificate validation capabilities:
- Expiration checking
- Chain validation
- Key usage verification
- Certificate purpose validation
- Hostname validation
- Signature algorithm verification
- Key size verification
- Trust chain verification

### Certificate Rotation

Support for certificate rotation:
- File watching for certificate changes
- Hot reloading of changed certificates
- Zero-downtime certificate updates
- Graceful connection handling during rotation
- Automatic server reconfiguration
- Rotation logging and notification
- Fallback mechanisms for invalid certificates

### Certificate Metrics

Certificate health monitoring:
- Expiration time metrics
- Validation status metrics
- Rotation event metrics
- Error count metrics
- Certificate information metrics
- Usage statistics
- Performance impact measurement

## Implementation Details

The CertificateManager is implemented using:
- Go's crypto/tls package
- File system watching mechanisms
- Background monitoring goroutines
- Mutex-protected certificate access
- Event-based update notification
- Prometheus metric integration
- Structured logging for certificate events

## Certificate Sources

Support for multiple certificate sources:
- Static files provided at startup
- Kubernetes secrets (mounted as files)
- OpenShift service serving certificates
- Operator-managed certificates
- Environment variable configured paths
- Default self-signed certificates (development)
- External certificate manager integration

## Certificate Selection

Logic for selecting appropriate certificates:
- SNI (Server Name Indication) support
- Default certificate configuration
- Certificate selection based on hostname
- Wildcards and pattern matching
- Priority ordering for overlapping certificates
- Fallbacks for missing certificates
- Specific IP address certificates

## Integration Points

The CertificateManager integrates with:
- **Server**: For configuring TLS listeners
- **OpenShift Service CA**: For service serving certificates
- **Kubernetes Secrets**: For certificate storage
- **Console Operator**: For certificate management
- **Metrics System**: For certificate health monitoring
- **Logging System**: For certificate events
- **Startup Configuration**: For initial certificate paths

## Related Components

- [Server](./Server.md): HTTP server using TLS certificates
- [Middleware](./Middleware.md): Security middleware
- [Proxy](./Proxy.md): Secure connection to Kubernetes API
