# MetricsPage

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/monitoring/metrics.tsx`

## Purpose
The MetricsPage component provides a comprehensive interface for querying, visualizing, and exploring Prometheus metrics in the OpenShift console. It allows users to create custom queries, view time-series data in charts, and analyze system and application performance.

## Component Structure

```tsx
export const MetricsPage: React.FC<MetricsPageProps> = ({
  namespace,
  // Additional props...
}) => {
  // State and hooks
  const [queries, setQueries] = useState<string[]>([]);
  const [timespan, setTimespan] = useState<number>(30 * 60 * 1000); // 30 minutes
  // Additional state...

  return (
    <>
      <Helmet>
        <title>{t('public~Metrics')}</title>
      </Helmet>
      <div className="co-m-nav-title">
        <h1 className="co-m-pane__heading">
          <span>{t('public~Metrics')}</span>
          <div className="co-actions">
            <PollIntervalDropdown />
            <TimeRangeDropdown />
          </div>
        </h1>
      </div>
      <div className="co-m-pane__body">
        <QueryBrowser
          defaultTimespan={timespan}
          queries={queries}
          namespace={namespace}
          onTimeChange={setTimespan}
          // Additional props...
        />
      </div>
    </>
  );
};
```

## Key Components

### QueryBrowser
The core component that handles metric querying and visualization.

```tsx
export const QueryBrowser: React.FC<QueryBrowserProps> = ({
  defaultTimespan,
  disabledSeries,
  filterLabels,
  hideControls,
  namespace,
  queries,
  // Additional props...
}) => {
  // Implementation...
  return (
    <div className="query-browser__wrapper">
      {!hideControls && (
        <div className="query-browser__controls">
          <PromQLExpressionInput />
          <QueryBrowserToolbar />
        </div>
      )}
      <div className="query-browser__graph-container">
        <Graph data={graphData} span={span} />
      </div>
      {showTable && <QueryTable />}
    </div>
  );
};
```

### PromQLExpressionInput
Component for inputting and editing PromQL queries with autocomplete.

```tsx
export const PromQLExpressionInput: React.FC<PromQLExpressionInputProps> = ({
  value,
  onChange,
  // Additional props...
}) => {
  // Implementation with autocompletion and syntax highlighting
  return (
    <div className="co-expression-input">
      <Autocomplete suggestions={suggestions}>
        <TextInput value={value} onChange={onChange} />
      </Autocomplete>
    </div>
  );
};
```

## Key Features

### Query Management
- PromQL query editor with syntax highlighting
- Metric name and label autocomplete
- Multiple concurrent queries
- Query history and templates

### Time Range Control
- Time range selection (30m, 1h, 2h, 6h, 12h, 1d, 2d, 1w, 2w)
- Custom time range input
- Timezone support

### Visualization Options
- Line charts for time series data
- Area charts for stacked metrics
- Table view for numeric data
- Heatmap for distribution data

### Data Exploration
- Zoom and pan on charts
- Hover tooltips with detailed values
- Series toggling in multi-series charts
- Simple statistical analysis (min, max, avg)

## Integration Points

### Prometheus Integration
- Direct queries to Prometheus/Thanos
- Metric metadata retrieval
- Alert state correlation

### Namespace Context
- Filtering metrics by namespace
- Multi-tenant isolation
- Cross-namespace comparison

### User Preferences
- Saved queries
- Default time ranges
- Visualization preferences

## Performance Considerations

### Query Optimization
- Rate limiting for queries
- Caching of results
- Dynamic resolution based on time range

### UI Performance
- Windowing for large datasets
- Progressive loading
- Throttled updates

## Implementation Details

### Data Fetching
- API requests to Prometheus via backend proxy
- WebSocket for streaming updates (if available)
- Error handling and retry logic

### Chart Rendering
- Uses Recharts/Chart.js for visualization
- Custom rendering for specialized chart types
- Responsive design for different screen sizes

### State Management
- Local component state for UI elements
- Redux for shared state (time range, queries)
- URL parameters for shareable state

## Related Components

- [AlertingPage](./AlertingPage.md): Prometheus alerts management
- [DashboardsPage](./DashboardsPage.md): Pre-configured monitoring dashboards
- [PollIntervalDropdown](./PollIntervalDropdown.md): Control for automatic refresh
- [TimeRangeDropdown](./TimeRangeDropdown.md): Time range selection component
