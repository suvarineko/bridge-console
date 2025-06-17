# ResourceLister Component

The ResourceLister component is responsible for discovering and providing information about available API resources in the Kubernetes cluster to the OpenShift Console.

## Overview

The ResourceLister serves as a discovery mechanism that queries the Kubernetes API to identify available resource types, their versions, and capabilities. It maintains an up-to-date catalog of resources that can be used by the frontend to dynamically adjust its UI based on cluster capabilities.

## Key Features

### API Resource Discovery

Comprehensive resource discovery:
- Core API resources
- API extensions (CRDs)
- API groups and versions
- Preferred versions detection
- Resource capabilities (verbs)
- Namespaced vs. cluster-scoped
- Categories and short names
- Schema information

### Resource Information Caching

Efficient resource information management:
- In-memory caching of resource data
- Periodic refresh mechanism
- Cache invalidation on changes
- Fast lookup by kind, group, version
- Synchronization for concurrent access
- Fallback for missing resources
- Default information for known types

### API Version Negotiation

Version handling for resources:
- Preferred version selection
- Version availability checking
- API group fallbacks
- Deprecated API version handling
- Version migration support
- Alpha/beta API detection
- Version compatibility information

### Resource Capability Detection

Feature detection for resources:
- Supported operations (get, list, watch, etc.)
- Subresource availability
- Scale capability detection
- Status subresource detection
- Table conversion support
- Watch capability
- Categories support
- Custom printer columns

## Implementation Details

The ResourceLister is implemented using:
- Go's concurrent data structures
- Kubernetes client-go for API access
- Periodic background refresh
- Efficient mapping structures
- Version comparison utilities
- Discovery client integration
- Context-based timeouts

## Data Flow

The resource discovery process follows these steps:
1. Initial startup resource discovery
2. Periodic background refresh (configurable interval)
3. On-demand refresh when needed
4. Serving resource information to API endpoints
5. Providing resource data to the frontend
6. Detecting and handling API changes

## Resource Categorization

Resources are organized by:
- API Group (core, apps, batch, etc.)
- Resource Kind (Pod, Deployment, etc.)
- API Version (v1, v1beta1, etc.)
- Scope (namespaced or cluster)
- Category (workloads, networking, etc.)
- Custom labels and annotations

## Integration Points

The ResourceLister integrates with:
- **Kubernetes API Server**: For resource discovery
- **Proxy**: For determining valid API paths
- **Server**: For serving resource information
- **Frontend Models**: For providing resource schemas
- **Middleware**: For resource access validation
- **Custom Resource Definitions**: For CRD discovery

## Related Components

- [Server](./Server.md): HTTP server hosting resource list API
- [Proxy](./Proxy.md): API proxy using resource information
- [Middleware](./Middleware.md): Request processing
- [ResourceModels](../k8s-resources/ResourceModels.md): Frontend resource models
