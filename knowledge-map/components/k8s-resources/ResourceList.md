# ResourceList Component

The ResourceList component provides a standardized way to display lists of Kubernetes resources with filtering, sorting, and pagination capabilities in the OpenShift Console.

## Overview

ResourceList serves as a core building block for displaying collections of Kubernetes resources throughout the console. It provides a consistent user experience for browsing, filtering, and interacting with resources across different resource types and use cases.

## Key Features

### Resource Table Display

Comprehensive tabular resource display:
- Configurable columns based on resource type
- Standard columns (name, namespace, labels, etc.)
- Resource-specific columns (replicas, status, etc.)
- Row selection for bulk operations
- Inline row actions via kebab menu
- Status indication with icons and colors

### Filtering and Search

Advanced filtering capabilities:
- Full-text search across resources
- Label selector filtering
- Name pattern filtering
- Status filtering
- Type-specific filters
- Compound filter support
- Filter history and persistence

### Sorting and Pagination

Efficient handling of large resource sets:
- Sorting by any column
- Server-side pagination
- Configurable page sizes
- Page navigation controls
- Sort direction toggling
- Sort preference persistence

### Bulk Operations

Support for operating on multiple resources:
- Multi-select via checkboxes
- Select all/none options
- Bulk delete operations
- Bulk label management
- Other resource-specific bulk actions
- Selection count and feedback

## Implementation Details

The ResourceList is implemented using:
- React components with PatternFly table components
- Redux integration for state management
- Virtualized rendering for performance
- Resource watches for real-time updates
- Factory pattern for specialization
- Responsive design techniques

## Factory Pattern

The ResourceList uses a factory pattern for customization:

```typescript
// Creating a specialized pod list
const PodList = createResourceList({
  kind: 'Pod',
  columns: [
    { name: 'Name', field: 'metadata.name' },
    { name: 'Node', field: 'spec.nodeName' },
    { name: 'Status', field: 'status.phase' },
    // ...more columns
  ],
  filters: [
    // Custom filters
  ],
});
```

## Loading States

The component handles various loading states:
- Initial loading skeleton
- Incremental loading of resources
- Empty state with helpful messaging
- Error states with retry options
- Partial load handling
- Loading indicators for updates

## Integration Points

The ResourceList integrates with:
- **Kubernetes API**: For resource data
- **RBAC System**: For permission-based filtering
- **Search System**: For resource searching
- **User Preferences**: For view customization
- **Resource Details**: For drilling into specific resources
- **Factory Components**: For resource-specific customization

## Related Components

- [ResourceDetails](./ResourceDetails.md): Shows details for a specific resource
- [ResourceYAML](./ResourceYAML.md): Shows YAML for resources
- [ResourceFactory](./ResourceFactory.md): Creates specialized components
- [ResourceModels](./ResourceModels.md): Defines resource type information
