# Monitoring Metrics Flow

## Overview
This document describes how metrics data flows through the OpenShift console monitoring system, from Prometheus data collection to visualization in the console UI.

## Flow Steps

1. **Data Collection**
   - **Component:** Prometheus
   - **Action:** Collects metrics from cluster components and applications
   - **Implementation:** Uses service discovery and scrape configs to collect metrics

2. **Storage and Aggregation**
   - **Component:** Prometheus/Thanos
   - **Action:** Stores and aggregates metrics data
   - **Implementation:** Time-series database with retention and aggregation rules

3. **Query Formulation**
   - **Component:** MetricsQueryInput
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/monitoring/metrics-query-input.tsx`
   - **Action:** User inputs PromQL query or selects from templates
   - **Implementation:** Provides query builder interface or direct PromQL input

4. **Query Execution**
   - **Component:** MonitoringAPI
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/monitoring/monitoring.tsx`
   - **Action:** Sends query to Prometheus API
   - **Implementation:** Uses co-fetch to query the proxied Prometheus API

5. **Query Proxying**
   - **Component:** PrometheusProxy
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Proxies query to Prometheus/Thanos
   - **Implementation:** Server-side proxy with authentication and tenant isolation

6. **Response Processing**
   - **Component:** MonitoringAPI
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/monitoring/monitoring.tsx`
   - **Action:** Processes query response
   - **Implementation:** Parses JSON response, handles errors, transforms data

7. **Data Visualization**
   - **Component:** MetricsChart
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/monitoring/metrics.tsx`
   - **Action:** Visualizes metrics data
   - **Implementation:** Uses chart libraries to render time-series visualizations

8. **Interaction and Exploration**
   - **Component:** MetricsExplorer
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/monitoring/metrics.tsx`
   - **Action:** User interacts with visualization
   - **Implementation:** Provides zooming, time range selection, and data exploration

## Data Flow Patterns

### Query Flow
- **User Query**: User inputs or selects a PromQL query
- **Query Request**: Frontend sends request to backend proxy
- **Proxy Request**: Backend proxy forwards to Prometheus/Thanos
- **Response Chain**: Response follows reverse path back to UI

### Real-time Updates
- **Polling**: UI polls for updated metrics at regular intervals
- **Data Merging**: New data is merged with existing visualizations
- **Animation**: Changes are animated for better visibility

### Tenant Isolation
- **Namespace Context**: Queries are limited to namespace context
- **Multi-tenant Proxy**: Proxy ensures tenant isolation
- **Access Control**: Controls which metrics users can access

## Configuration Options

### Time Range Selection
- User can select different time ranges for metrics
- Affects query parameters sent to Prometheus
- Updates visualization with appropriate resolution

### Refresh Rate
- Configurable polling interval for data updates
- Balances freshness with performance
- Adapts based on selected time range

### Visualization Options
- Different chart types (line, area, bar)
- Data aggregation options
- Unit display configuration

## Error Handling

### Query Errors
- Syntax errors in PromQL queries
- Execution timeout errors
- Missing metrics errors

### Data Errors
- Incomplete or sparse data handling
- Handling unexpected data formats
- Dealing with data gaps

### Connectivity Errors
- Network errors between components
- Prometheus unavailability handling
- Retry and fallback strategies

## Related Components
- [MonitoringPage](../components/monitoring/MonitoringPage.md): Main monitoring page
- [MonitoringDashboards](../components/monitoring/MonitoringDashboards.md): Pre-configured dashboards
- [API Proxy](../components/server/Proxy.md): Backend proxy for API requests
