# Monitoring Components

The monitoring system in the OpenShift console provides UI components for visualizing and interacting with monitoring data from Prometheus, AlertManager, and Kubernetes events. It provides tools for observing cluster and application health, performance metrics, and real-time alerting.

## Key Monitoring Components

### [MonitoringPage](./MonitoringPage.md)
Main entry point for the monitoring UI that provides access to dashboards, metrics, alerts, and events.

### [MonitoringDashboards](./MonitoringDashboards.md)
Configurable dashboards that display Prometheus metrics visualizations.

### [MonitoringMetrics](./MonitoringMetrics.md)
UI for querying, visualizing, and exploring Prometheus metrics.

### [MonitoringAlerts](./MonitoringAlerts.md)
UI for viewing and managing alerts from AlertManager.

### [MonitoringEvents](./MonitoringEvents.md)
UI for viewing Kubernetes events related to cluster and application activity.

## Monitoring Data Flow

1. **Data Collection**: Prometheus collects metrics from cluster and applications
2. **Query Processing**: Console queries Prometheus, AlertManager, and Kubernetes APIs
3. **Data Visualization**: Metrics are visualized in charts, graphs, and tables
4. **Alert Processing**: Alerts are displayed with status and severity information
5. **User Interaction**: Users can drill down, filter, and explore monitoring data

## Integration Points

The monitoring system integrates with several other components in the OpenShift platform:

1. **Prometheus**: For collecting and storing metrics data
2. **AlertManager**: For alert definition, firing, and management
3. **Thanos**: For long-term metrics storage and multi-cluster support
4. **Kubernetes Events**: For tracking cluster activity and state changes
5. **User Workload Monitoring**: For monitoring application-specific metrics

## Key Features

1. **Perspective-Based Views**: Different monitoring views for developer vs admin perspectives
2. **Namespace Filtering**: Metrics can be filtered by namespace
3. **Custom Queries**: Support for custom PromQL queries
4. **Dashboard Templates**: Predefined and customizable dashboard templates
5. **Time Range Selection**: Metrics can be viewed over different time ranges
6. **Alert Management**: Tools for viewing, filtering, and understanding alerts

## Related Components

- [Developer Console](../dev-console/README.md): Developer perspective with simplified monitoring
- [Administrator Console](../admin-console/README.md): Administrator perspective with advanced monitoring
- [Plugin System](../plugins/README.md): Extensibility system that can provide custom monitoring views
