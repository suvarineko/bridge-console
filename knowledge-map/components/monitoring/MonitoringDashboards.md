# MonitoringDashboards

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/monitoring/dashboards/`

## Purpose
The MonitoringDashboards component provides a way to display pre-configured and customizable dashboards with Prometheus metrics in the OpenShift console. It allows users to view organized sets of metrics visualizations that are relevant to specific aspects of cluster and application health.

## Component Structure

```tsx
export const MonitoringDashboardsPage: React.FC<MonitoringDashboardsPageProps> = ({ match }) => {
  const { t } = useTranslation();
  const namespace = match?.params?.ns;
  const [selectedBoard, setSelectedBoard] = React.useState<string>();
  const [boards, isLoading, loadError] = useFetchDashboards(namespace);
  
  // Implementation details...
  
  return (
    <>
      <Helmet>
        <title>{t('public~Dashboards')}</title>
      </Helmet>
      <div className="co-m-nav-title">
        <h1 className="co-m-pane__heading">
          <span>{t('public~Dashboards')}</span>
        </h1>
      </div>
      <Dashboard 
        boards={boards}
        selectedBoard={selectedBoard}
        onSelectBoard={setSelectedBoard}
        isLoading={isLoading}
        error={loadError}
        namespace={namespace}
      />
    </>
  );
};
```

## Key Components

### Dashboard
The main component that renders the selected dashboard.

```tsx
const Dashboard: React.FC<DashboardProps> = ({
  boards,
  selectedBoard,
  onSelectBoard,
  isLoading,
  error,
  namespace,
}) => {
  // Implementation details...
  
  return (
    <div className="co-m-pane__body monitoring-dashboards">
      <div className="monitoring-dashboards__variables">
        <BoardSelector 
          onChange={onSelectBoard} 
          selectedBoard={selectedBoard} 
          boards={boards} 
        />
        <VariableDropdowns variables={variables} />
      </div>
      {error && <Alert variant="danger" title={error} />}
      {isLoading && <LoadingBox />}
      {!isLoading && !error && board && (
        <Dashboard 
          board={board}
          variables={resolvedVariables}
          namespace={namespace}
        />
      )}
    </div>
  );
};
```

### BoardSelector
Dropdown component to select from available dashboards.

### VariableDropdowns
Component to display and manage dashboard variables.

### DashboardGrid
Component that renders the grid of panels for a dashboard.

## Data Model

### Dashboard Definition
```typescript
interface Board {
  data: {
    title: string;
    panels: Panel[];
    variables?: Variable[];
    templating?: {
      list: Variable[];
    };
  };
  name: string;
}

interface Panel {
  title: string;
  type: string;
  targets: Target[];
  gridPos: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  // Additional panel properties...
}

interface Target {
  expr: string;
  legendFormat?: string;
  // Additional target properties...
}

interface Variable {
  name: string;
  label?: string;
  query?: string;
  regex?: string;
  options?: VariableOption[];
  // Additional variable properties...
}
```

## Key Features

### Dashboard Configuration
- Dashboards defined via ConfigMaps
- Grafana-compatible dashboard format
- Support for variables and templating
- Grid-based layout system

### Panel Types
- Graph panels for time-series data
- Stat panels for single value metrics
- Table panels for tabular data
- Text panels for documentation/notes

### Variable Support
- Dynamic variable substitution in queries
- Dropdown UI for variable selection
- Chained variable dependencies
- Regular expression filtering

### Data Fetching
- Fetches dashboard definitions from ConfigMaps
- Uses Prometheus/Thanos for metrics data
- Handles data transformation for visualization
- Supports real-time updates

## Integration Points

### ConfigMap Integration
- Dashboards stored as ConfigMaps with labels
- ConfigMaps discovered via API
- JSON parsing of dashboard definitions

### Prometheus Integration
- Queries transformed for Prometheus API
- Variables resolved to Prometheus queries
- Results formatted for visualization

### Namespace Context
- Dashboard filtering by namespace
- Metrics queries scoped to namespace
- Separate dashboards for different contexts

## Implementation Details

### Dashboard Discovery
```typescript
export const useFetchDashboards = (namespace: string): [Board[], boolean, string] => {
  // Implementation...
  React.useEffect(() => {
    safeFetch('/api/console/monitoring-dashboard-config')
      .then((response) => {
        // Process dashboard ConfigMaps
        let items = response.items;
        if (namespace) {
          items = _.filter(
            items,
            (item) => item.metadata?.labels['console.openshift.io/odc-dashboard'] === 'true',
          );
        }
        
        // Parse dashboard JSON
        const newBoards = _.sortBy(_.map(items, getBoardData), (v) => _.toLower(v?.data?.title));
        setBoards(newBoards);
      })
      // Error handling...
  }, [namespace, safeFetch, setLoaded, t]);
  
  return [boards, isLoading, error];
};
```

### Variable Resolution
Variables in dashboards are resolved before queries are executed:

```typescript
const resolveVariables = (variables: Variable[], values: Record<string, string>): ResolvedVariable[] => {
  // Implementation that resolves variables based on selected values
};
```

### Query Execution
Resolved queries are executed against Prometheus:

```typescript
const fetchQuery = (query: string): Promise<PrometheusResponse> => {
  // Implementation that fetches data from Prometheus
};
```

## Related Components

- [MetricsPage](./MetricsPage.md): For custom metrics queries
- [MonitoringPage](./MonitoringPage.md): Main monitoring entry point
- [MonitoringAlerts](./MonitoringAlerts.md): For alert management
- [Graph](./Graph.md): Metrics visualization component
