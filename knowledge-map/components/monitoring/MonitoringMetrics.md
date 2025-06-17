# MonitoringMetrics Component

The MonitoringMetrics component provides an interface for querying, visualizing, and exploring Prometheus metrics in the OpenShift Console.

## Overview

MonitoringMetrics offers an advanced metrics exploration system that enables users to construct custom queries, visualize the results in various chart types, and analyze trends in system and application performance data. It serves as the primary interface for ad-hoc metrics analysis in the console.

## Key Features

### Query Builder

Interactive Prometheus query construction:
- PromQL query editor with syntax highlighting
- Metric name autocomplete
- Label selector builder
- Function helper and documentation
- Query history and saving
- Query validation
- Example queries for common use cases

### Metric Visualization

Comprehensive chart options:
- Time-series line charts
- Multi-series comparison
- Area charts for cumulative metrics
- Bar charts for distribution visualization
- Heatmaps for frequency analysis
- Table view for precise values
- Custom visualization settings
- Zoom and pan controls

### Time Range Control

Flexible time range selection:
- Preset time ranges (last hour, day, week, etc.)
- Custom time range selector
- Real-time updates option
- Time zone selection
- Refresh rate configuration
- Time comparison (e.g., compare with previous day)
- Relative and absolute time options

### Advanced Analysis

Metrics analysis capabilities:
- Rate calculation
- Trend analysis
- Anomaly highlighting
- Threshold markers
- Statistical functions
- Metadata exploration
- Metric correlation
- Data export options

## Implementation Details

The MonitoringMetrics component is implemented using:
- React components with PatternFly
- Chart libraries (e.g., Chart.js, D3)
- Integration with Prometheus API
- Custom PromQL parsing and validation
- Responsive design for different screens
- Time-series data processing utilities

## Query Types

Support for various query patterns:
- **Instant queries**: Point-in-time values
- **Range queries**: Values over time
- **Aggregate queries**: Combined metrics
- **Rate queries**: Change rates
- **Alert rule queries**: Queries from alert rules
- **Recording rule queries**: Pre-computed metrics
- **Custom expressions**: User-defined calculations

## Metric Categories

Organization of metrics into categories:
- **Node metrics**: Hardware and OS-level
- **Container metrics**: Container-specific
- **Kubernetes metrics**: Cluster resources
- **OpenShift metrics**: Platform-specific
- **Service metrics**: Service-level metrics
- **Application metrics**: Custom application metrics
- **Network metrics**: Connectivity and traffic
- **Storage metrics**: Persistent storage usage

## Integration Points

The MonitoringMetrics integrates with:
- **Prometheus**: For metric queries
- **Alerting Rules**: For viewing rule expressions
- **Recording Rules**: For using predefined metrics
- **Dashboards**: For adding queries to dashboards
- **Thanos**: For long-term metric storage
- **User Workload Monitoring**: For application metrics

## Related Components

- [MonitoringPage](./MonitoringPage.md): Main monitoring entry point
- [MonitoringDashboards](./MonitoringDashboards.md): Predefined dashboards
- [MonitoringAlerts](./MonitoringAlerts.md): Alert management
- [ResourceDetails](../k8s-resources/ResourceDetails.md): Resource metrics
