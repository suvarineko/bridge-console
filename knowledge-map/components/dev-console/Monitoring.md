# Developer Monitoring Component

The Developer Monitoring component provides a developer-focused interface for monitoring application health, performance, and behavior within the OpenShift Developer Console.

## Overview

The Developer Monitoring component offers a simplified and targeted view of monitoring data that's relevant to application developers, focusing on application-specific metrics, logs, and health information rather than cluster-wide monitoring concerns.

## Key Features

### Application Metrics

Application-level metric visualization:
- CPU and memory usage
- Network traffic statistics
- Request rates and latencies
- Custom application metrics
- Prometheus query builder
- Time-range selection

### Health Monitoring

Application health visualization:
- Pod status and health checks
- Liveness and readiness probe status
- Deployment rollout status
- Resource constraint monitoring
- Error rate tracking
- Alert visualization

### Log Viewer

Comprehensive log access:
- Container log streaming
- Multi-container log aggregation
- Log filtering and search
- Log download options
- Log level filtering
- Log context preservation

### Event Monitoring

Application event tracking:
- Pod lifecycle events
- Deployment events
- Build events
- Configuration change events
- Warning and error events
- Event filtering and search

## Implementation Details

The Developer Monitoring component is implemented as:
- React components using PatternFly
- Integration with Prometheus for metrics
- Log streaming from the Kubernetes API
- Event watching and filtering
- Interactive charts and graphs
- Responsive design for different screens

## Monitoring Dashboard

The customizable monitoring dashboard:
- Default metrics for common resource types
- User-defined dashboard layouts
- Custom query creation
- Dashboard sharing
- Preset time ranges
- Auto-refresh options

## Custom Metrics

Support for application-specific metrics:
- Service monitoring configuration
- Custom Prometheus queries
- Metric visualization options
- Alert definition on metrics
- Integration with ServiceMonitors
- Support for common metric exporters

## Integration Points

The component integrates with:
- **Prometheus**: For metrics collection and querying
- **Kubernetes API**: For logs and events
- **Alerts**: For application-related alerts
- **User Workload Monitoring**: For application-specific metrics
- **TopologyView**: For contextual monitoring access
- **Resource Details**: For resource-specific monitoring

## Related Components

- [TopologyView](./TopologyView.md): Contextual access to monitoring
- [ProjectOverview](./ProjectOverview.md): Project-wide monitoring
- [Monitoring Components](../monitoring/README.md): Core monitoring functionality
