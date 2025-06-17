# ResourceDetails Component

The ResourceDetails component provides a comprehensive interface for viewing and managing individual Kubernetes resources in the OpenShift Console.

## Overview

ResourceDetails serves as a universal details page for Kubernetes resources, showing in-depth information about specific resources with a consistent layout and interaction pattern. It adapts its display based on the resource kind to show the most relevant information while maintaining a familiar structure.

## Key Features

### Resource Information Display

Comprehensive resource information:
- Resource metadata (name, namespace, UID, etc.)
- Creation timestamp and age
- Owner references and relationships
- Labels and annotations
- Status and conditions
- Resource-specific details

### Tabbed Interface

Organized information presentation:
- **Details**: Primary resource information
- **YAML**: Raw YAML representation
- **Resources**: Related and owned resources
- **Events**: Related events
- **Logs**: For pod-related resources
- **Metrics**: Resource utilization (when applicable)
- **Terminal**: For interactive access (pods only)

### Resource Actions

Contextual actions for resource management:
- Edit resource (form or YAML)
- Delete resource with cascading options
- Scale (for scalable resources)
- Annotate and label management
- Resource-specific actions
- Access related resources
- Export or duplicate

### Status Visualization

Enhanced status display:
- Visual status indicators
- Health check status
- Ready/running indicators
- Condition explanations
- Warning and error displays
- Age and timestamp information

## Implementation Details

The ResourceDetails is implemented using:
- React components with PatternFly
- Tabbed container for organization
- Factory pattern for resource customization
- Redux integration for state
- Resource watching for real-time updates
- Responsive design for different screens

## Factory Pattern

The ResourceDetails uses a factory pattern for customization:

```typescript
// Creating specialized deployment details
const DeploymentDetailsPage = createDetailsPage({
  kind: 'Deployment',
  menuActions: deploymentMenuActions,
  pages: [
    {
      href: '',
      name: 'Details',
      component: DeploymentDetails,
    },
    {
      href: 'yaml',
      name: 'YAML',
      component: ResourceYAML,
    },
    // ...more tabs
  ],
});
```

## Resource-Specific Features

The component adapts based on resource kind:
- **Pods**: Shows logs, terminal access, container status
- **Deployments**: Shows replica status, update strategy, pod template
- **Services**: Shows selectors, endpoints, port mappings
- **ConfigMaps/Secrets**: Shows key-value data with editing
- **Custom Resources**: Shows spec/status according to CRD schema

## Integration Points

The ResourceDetails integrates with:
- **Kubernetes API**: For resource data
- **YAML Editor**: For YAML viewing and editing
- **Events System**: For related events
- **Metrics System**: For resource utilization
- **Logs System**: For log viewing
- **Terminal**: For interactive shell access
- **Related Resources**: For navigation between resources

## Related Components

- [ResourceList](./ResourceList.md): Shows lists of resources
- [ResourceYAML](./ResourceYAML.md): YAML editor for resources
- [ResourceFactory](./ResourceFactory.md): Creates specialized components
- [ResourceModels](./ResourceModels.md): Resource type definitions
