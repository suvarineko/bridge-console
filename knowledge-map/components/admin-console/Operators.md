# Operators Components

The Operators components in the Administrator Console provide interfaces for discovering, installing, configuring, and managing Operators within an OpenShift cluster.

## Overview

The Operators section enables administrators to manage the full lifecycle of Operators in the cluster. It integrates with the Operator Lifecycle Manager (OLM) and provides specialized interfaces for both cluster operators and optional operator-based applications.

## Key Components

### OperatorHub

Components for discovering and installing Operators:
- Catalog of available Operators with filtering
- Operator details with version, provider, and capability information
- Installation configuration UI
- Subscription management interface
- Update channel selection

### Installed Operators

Interfaces for managing installed Operators:
- List view of all installed Operators
- Status monitoring and health checks
- Version information and update controls
- Subscription details and modification
- Access to owned Custom Resource types

### Cluster Operators

Components for managing core OpenShift operators:
- Cluster operator status dashboard
- Version and condition information
- Update history and status
- Detailed operator logs and events
- Manual intervention options

### Custom Resources

Interfaces for Operator-provided custom resources:
- Custom resource type discovery
- Resource instance creation and management
- Type-specific forms for resource manipulation
- Validation and schema enforcement
- Integration with Operator-specific UI extensions

### Operator Lifecycle Management

Components for managing Operator subscriptions:
- Subscription details and status
- Channel management
- Approval strategy configuration
- Update preview and planning
- Failure recovery options

## Common Functionality

All Operator components provide:
- Consistent status visualization
- YAML editing capabilities
- Event monitoring and troubleshooting
- Resource relationship visualization
- Installation/uninstallation workflows

## Implementation Details

The Operator components utilize:
- Dynamic form generation for custom resources
- Integration with OLM APIs
- Specialized detail views for different operator types
- Status polling for long-running operations
- Plugin extension points for operator-specific UIs

## Operator Visualization

Specialized visualization features include:
- Operator dependency graphs
- Subscription status indicators
- Custom resource relationship diagrams
- Health status dashboards
- Update availability notifications

## Integration Points

Operator components integrate with:
- Operator Lifecycle Manager
- Cluster Version Operator
- Custom Resource Definition API
- Catalog sources
- Monitoring stack for operator health

## Related Components

- [ClusterOverview](./ClusterOverview.md): Summary of critical operator health
- [Settings](./Settings.md): Cluster-wide settings that may affect operators
- [Storage](./Storage.md): Storage operators configuration
- [Monitoring](../monitoring/README.md): Monitoring of operator health
