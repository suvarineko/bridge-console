# ResourceDetails Component

The ResourceDetails component provides a comprehensive interface for viewing and managing individual Kubernetes resources in the OpenShift Console frontend.

## Overview

The ResourceDetails serves as a standardized pattern for displaying detailed information about Kubernetes resources. It presents resource properties, status, and related information in a consistent format while adapting to the specific characteristics of different resource types.

## Key Features

### Resource Information Display

Comprehensive information presentation:
- Resource metadata and identification
- Status and health information
- Configuration details
- Related resources
- Events and activity
- Metrics and utilization data
- Logs and terminal access (when applicable)
- YAML definition

### Tabbed Interface

Organized content presentation:
- **Overview**: Primary resource information
- **YAML**: Raw YAML representation
- **Resources**: Related and nested resources
- **Events**: Related events
- **Logs**: Container logs (for applicable resources)
- **Terminal**: Interactive shell (for applicable resources)
- **Metrics**: Performance data (when available)
- **Custom tabs**: Resource-specific or plugin-provided tabs

### Resource Actions

Context-appropriate operations:
- Edit resource (form-based or YAML)
- Delete resource
- Scale (for scalable resources)
- Add/edit labels and annotations
- Resource-specific actions
- Access related resources
- Export/import options
- Creation of related resources

### Status Visualization

Informative status representation:
- Visual status indicators (icons, colors)
- Status timelines and history
- Health check status
- Condition explanations
- Warning and error messages
- Progress indicators
- Detailed state information
- Status metrics

## Implementation Details

The ResourceDetails is implemented using:
- PatternFly components
- React for component structure
- Redux for state management
- Tabs for content organization
- Responsive design for different screens
- Accessibility features
- Factory pattern for specialization

## Resource Factory Pattern

The component uses a factory pattern for customization:
```jsx
// Example of creating specialized Deployment details
const DeploymentDetails = createResourceDetailsPage({
  kind: 'Deployment',
  menuActions: deploymentMenuActions,
  pages: [
    {
      href: '',
      name: 'Overview',
      component: DeploymentOverview,
    },
    {
      href: 'yaml',
      name: 'YAML',
      component: ResourceYAML,
    },
    // Additional tabs
  ],
});
```

## Resource-Specific Features

The details adapt based on resource kind:
- **Pods**: Container status, logs, terminal access
- **Deployments**: Replica status, rollout history
- **Services**: Endpoint details, traffic visualization
- **ConfigMaps/Secrets**: Data key-value pairs
- **Nodes**: Capacity, utilization, pod list
- **Custom Resources**: Schema-based rendering

## Integration Points

The ResourceDetails integrates with:
- **API Client**: For resource data fetching
- **YAML Editor**: For YAML viewing and editing
- **Metrics System**: For resource metrics
- **Logging System**: For log viewing
- **Terminal**: For interactive access
- **Events System**: For related events
- **Watch API**: For real-time updates
- **Plugin System**: For extensibility

## Related Components

- [ResourceList](./ResourceList.md): List view of resources
- [Forms](./Forms.md): Editing resource properties
- [YAML Editor](./YAMLEditor.md): YAML editing interface
- [PageLayout](./PageLayout.md): Page structure for details
