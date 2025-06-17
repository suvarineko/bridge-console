# Kubernetes Resources Components

The Kubernetes Resources components provide the core functionality for displaying, managing, and interacting with Kubernetes resources in the OpenShift console. These components handle everything from listing resources to detailed views and CRUD operations.

## Key Resource Components

### [ResourceList](./ResourceList.md)
Components for displaying lists of resources with filtering, sorting, and pagination.

### [ResourceDetails](./ResourceDetails.md)
Components for displaying detailed views of individual resources.

### [ResourceYAML](./ResourceYAML.md)
Components for viewing and editing resource YAML definitions.

### [ResourceFactory](./ResourceFactory.md)
Factory components for generating resource components dynamically.

### [ResourceModels](./ResourceModels.md)
Data models and TypeScript interfaces for Kubernetes resources.

## Resource CRUD Operations

### Creation
- Form-based resource creation
- YAML-based resource creation
- Template-based creation

### Reading
- List views with filtering and sorting
- Detail views with tabs for different aspects
- YAML view for raw resource definition

### Updating
- Form-based editing of resource properties
- YAML editing with validation
- Patching of specific fields

### Deletion
- Resource deletion with confirmation
- Bulk deletion of multiple resources
- Cascading deletion options

## Resource Model System

The console uses a sophisticated model system for Kubernetes resources:

1. **Resource Kinds**: Definitions of resource types
2. **Resource Models**: TypeScript interfaces and schemas
3. **API Group Management**: Handling different API versions
4. **CRD Integration**: Dynamic handling of custom resources

## Factory Pattern

The console uses a factory pattern for resource components:

```typescript
// Creating a resource list page
const ResourceListPage = createResourceListPage({
  kind: 'Pod',
  listComponent: PodList,
  canCreate: true,
});

// Creating a resource details page
const ResourceDetailsPage = createResourceDetailsPage({
  kind: 'Pod',
  menuActions: podMenuActions,
  pages: [overviewPage, logsPage, eventsPage],
});
```

## Resource Watching

The console implements efficient resource watching:

1. **Redux Integration**: Watch results update Redux store
2. **WebSocket**: Real-time updates via WebSocket
3. **Caching**: Efficient caching and re-fetching
4. **Error Handling**: Graceful failure and retry

## Related Components

- [Navigation](../navigation/README.md): Navigation for resources
- [YAML Editor](../core/YAMLEditor.md): YAML editing capabilities
- [Forms](../core/Forms.md): Form components for resources
- [API Explorer](../dev-console/APIExplorer.md): API discovery and exploration
