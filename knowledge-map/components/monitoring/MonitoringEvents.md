# MonitoringEvents Component

The MonitoringEvents component provides an interface for viewing, filtering, and analyzing Kubernetes events across the OpenShift cluster or within specific namespaces.

## Overview

MonitoringEvents offers a comprehensive event monitoring system for tracking changes, errors, warnings, and informational events occurring within the cluster. It provides real-time event streaming, advanced filtering, and cross-namespace visibility to help operators and developers understand system behavior and troubleshoot issues.

## Key Features

### Event Stream

Real-time event monitoring:
- Live event streaming with automatic updates
- Historical event viewing
- Event type filtering (Normal, Warning)
- Source-based filtering
- Resource filtering
- Namespace filtering
- Full-text search across events
- Condensed and expanded view options

### Event Details

Comprehensive event information:
- Event type and reason
- Source component and host
- Involved objects and references
- Timestamp and count
- Event message and description
- Related resource links
- First and last seen timestamps
- Event recurrence counter

### Advanced Filtering

Sophisticated event filtering capabilities:
- Filter by event type (Normal, Warning)
- Filter by namespace or across namespaces
- Filter by resource kind
- Filter by resource name
- Filter by message content
- Filter by time range
- Compound filters with multiple criteria
- Filter presets for common scenarios

### Aggregation and Analysis

Event analysis capabilities:
- Event frequency visualization
- Similar event grouping
- Temporal pattern analysis
- Related event correlation
- Resource impact assessment
- Event export for offline analysis
- Historical trend visualization

## Implementation Details

The MonitoringEvents component is implemented using:
- React components with PatternFly
- Integration with Kubernetes Events API
- WebSocket connections for real-time updates
- Efficient event caching and deduplication
- Virtual scrolling for performance
- Time-based indexing and retrieval

## Event Categories

Events are categorized by type and importance:
- **Normal**: Regular operational events
- **Warning**: Potential issues requiring attention
- **Critical**: Critical issues detected (custom extension)
- **Info**: Informational events (custom extension)

## Event Sources

Events can come from various sources:
- **kubelet**: Node-level events
- **controller-manager**: Controller-related events
- **scheduler**: Pod scheduling events
- **horizontal-pod-autoscaler**: Scaling events
- **replicaset-controller**: Replica management events
- **deployment-controller**: Deployment events
- **node-controller**: Node lifecycle events
- **Custom sources**: From operators and extensions

## Integration Points

The MonitoringEvents integrates with:
- **Kubernetes API**: For event retrieval
- **Resource Details**: For resource-specific events
- **Monitoring Alerts**: For related alert correlation
- **Logging System**: For log correlation
- **Search System**: For full-text search
- **Topology View**: For topology-related events

## Related Components

- [MonitoringPage](./MonitoringPage.md): Main monitoring entry point
- [MonitoringAlerts](./MonitoringAlerts.md): Alert management
- [MonitoringMetrics](./MonitoringMetrics.md): Metrics monitoring
- [ResourceDetails](../k8s-resources/ResourceDetails.md): Resource-specific events
