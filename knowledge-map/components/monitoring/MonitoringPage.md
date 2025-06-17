# MonitoringPage

**Path:** `/projects/Dropbox/_git/web-console/frontend/packages/dev-console/src/components/monitoring/MonitoringPage.tsx`

## Purpose
The MonitoringPage component serves as the main container for the monitoring interface in the Developer perspective. It provides access to monitoring dashboards, metrics, alerts, and events in a user-friendly interface with namespace context.

## Component Structure

```tsx
export const MonitoringPage: React.FC<MonitoringPageProps> = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <Helmet>
        <title>{t('devconsole~Observe')}</title>
      </Helmet>
      <NamespacedPage
        hideApplications
        variant={NamespacedPageVariants.light}
        onNamespaceChange={handleNamespaceChange}
      >
        <PageContentsWithStartGuide {...props} />
      </NamespacedPage>
    </>
  );
};
```

## Props Interface

```tsx
type MonitoringPageProps = {
  match: RMatch<{
    ns?: string;
  }>;
};
```

## Key Components

### PageContents
Internal component that renders the actual monitoring content based on namespace context:
- Horizontal navigation tabs for different monitoring views
- Empty state with project creation option if no namespace is selected

### HorizontalNav
Navigation component providing tabs for different monitoring features:
- Dashboard: Monitoring dashboards with metrics visualizations
- Metrics: Custom metrics queries and visualizations
- Alerts: Prometheus alerts with status and information
- Events: Kubernetes events for the selected namespace

## Namespace Handling

- Uses the namespace from URL parameters (`match.params.ns`)
- Supports namespace switching via dropdown
- Special handling for "all namespaces" view
- Redirects to appropriate URLs when namespace changes

## Access Control

- Uses `useAccessReview` hook to check user permissions
- Conditionally renders features based on access rights
- Hides alerts tab if user lacks access to Prometheus rules

## State Management

- Namespace state is managed through URL parameters
- Permission state is determined via Kubernetes RBAC checks
- Page tabs are dynamically generated based on access rights

## Integration Points

1. **Monitoring Systems**: Integrates with Prometheus, AlertManager, and Kubernetes events
2. **Namespaced Context**: Operates within the namespace context system
3. **Start Guide**: Integrates with the console's start guide system
4. **Project Creation**: Integrates with the project creation workflow

## Related Components

- [MonitoringDashboardsPage](./MonitoringDashboards.md): Displays monitoring dashboards
- [ConnectedMonitoringMetrics](./MonitoringMetrics.md): Metrics querying and visualization
- [ConnectedMonitoringAlerts](./MonitoringAlerts.md): Alert management and viewing
- [MonitoringEvents](./MonitoringEvents.md): Kubernetes events viewer
