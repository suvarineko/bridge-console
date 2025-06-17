# ResourceList Component

The ResourceList component provides a standardized interface for displaying lists of Kubernetes resources in the OpenShift Console frontend.

## Overview

The ResourceList serves as a core UI pattern for presenting collections of Kubernetes resources in a consistent way across the console. It offers filtering, sorting, pagination, and common actions while adapting to the specific needs of different resource types.

## Key Features

### Resource Table Visualization

Comprehensive table display:
- Configurable columns for resource attributes
- Sortable column headers
- Row selection with checkboxes
- Status indicators and icons
- Resource-specific badges
- Inline action menus
- Bulk selection actions
- Expandable row details

### Filtering and Search

Advanced filtering capabilities:
- Text-based search across resources
- Filter by label selector
- Filter by resource status
- Filter by namespace (when applicable)
- Advanced filtering options
- Saved filter presets
- Filter combination operators
- Filter state persistence

### Pagination and Loading

Efficient handling of large resource sets:
- Server-side pagination
- Configurable page sizes
- Page navigation controls
- Infinite scrolling option
- Loading state indicators
- Virtual scrolling for large lists
- Sort order persistence
- Refresh controls

### Common Actions

Standard resource operations:
- Create new resource
- Edit existing resources
- Delete resources
- Bulk operations on multiple resources
- Resource-specific actions
- Import/export operations
- Keyboard shortcuts
- Context menu actions

## Implementation Details

The ResourceList is implemented using:
- PatternFly table components
- React for component structure
- Redux for state management
- Virtualized rendering for performance
- Responsive design for different screens
- Accessibility features for keyboard navigation
- Factory pattern for specialization

## Resource Factory Pattern

The component uses a factory pattern for customization:
```jsx
// Example of creating a specialized Pod list
const PodList = createResourceList({
  kind: 'Pod',
  listComponent: PodTable,
  canCreate: true,
  createProps: {
    to: '/k8s/ns/:ns/pods/~new',
  },
  filters: [
    // Custom filters for Pods
  ],
});
```

## View Variants

The list supports different display variants:
- **Table View**: Standard tabular format
- **Grid View**: Card-based grid layout
- **List View**: Condensed list format
- **Compact View**: Minimal information display
- **Custom Views**: Plugin-provided visualizations
- **Split View**: List with details panel
- **Tree View**: Hierarchical resource display

## Integration Points

The ResourceList integrates with:
- **API Client**: For resource data fetching
- **Router**: For navigation to resource details
- **Filter System**: For resource filtering
- **Sort System**: For resource sorting
- **Action System**: For resource operations
- **Watch API**: For real-time updates
- **Plugin System**: For extensibility
- **Resource Factory**: For resource-specific customization

## Related Components

- [ResourceDetails](./ResourceDetails.md): Detailed view of resources
- [Forms](./Forms.md): Creating and editing resources
- [YAML Editor](./YAMLEditor.md): YAML editing of resources
- [PageLayout](./PageLayout.md): Page structure containing lists
