# ResourceFactory

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/factory/`

## Purpose
The ResourceFactory components provide a collection of factory functions that dynamically generate React components for displaying and interacting with Kubernetes resources. These factories make it easier to create consistent resource pages throughout the console.

## Key Factory Functions

### createListPage
Creates a page component for listing resources of a specific kind.

```typescript
export const createListPage = (
  options: ListPageProps,
  customData?: CustomData,
): React.ComponentType => {
  const ListPage = (props) => {
    // Implementation logic...
    return (
      <MultiListPage
        {...props}
        resources={resources}
        listComponent={options.listComponent}
        customData={customData}
        // Additional props...
      />
    );
  };
  return withStartGuide(ListPage);
};
```

### createSinglePage
Creates a details page component for a single resource.

```typescript
export const createDetailsPage = (options: DetailsPageProps): React.ComponentType => {
  const DetailsPage = (props) => {
    const instanceProps = { ...options };
    // Implementation logic...
    return (
      <DetailsComponent
        {...props}
        kind={kind}
        menuActions={menuActions}
        pages={pages}
        // Additional props...
      />
    );
  };
  return DetailsPage;
};
```

### createItemPage
Creates a page component for a single non-resource item.

```typescript
export const createItemPage = (options: ItemPageProps): React.ComponentType => {
  // Implementation...
};
```

## Page Types Generated

### List Pages
- Standard list view for resources
- Multi-list for showing multiple resource types
- Filtered list with pre-defined filters
- Namespaced or cluster-scoped lists

### Details Pages
- Resource details with tabs
- YAML editor integration
- Related resources
- Events listing

### Form Pages
- Create resource forms
- Edit resource forms
- Resource-specific form fields

## Usage Examples

```typescript
// Creating a Pod list page
export const PodsPage = createListPage({
  kind: 'Pod',
  listComponent: PodList,
  canCreate: true,
  filters: podFilters,
});

// Creating a Pod details page
export const PodsDetailsPage = createDetailsPage({
  kind: 'Pod',
  menuActions: podMenuActions,
  pages: [
    navFactory.details(PodDetails),
    navFactory.editYaml(),
    navFactory.logs(PodLogs),
    navFactory.events(ResourceEventStream),
  ],
});
```

## Customization Points

### List Customization
- Custom row rendering
- Custom filters
- Custom sorting
- Custom actions

### Details Customization
- Custom tabs
- Custom menu actions
- Custom resource badges
- Custom sidebar content

### Form Customization
- Custom validation
- Custom field rendering
- Dynamic field visibility
- Resource-specific default values

## Implementation Details

### Higher-Order Component Pattern
The factory functions implement the Higher-Order Component (HOC) pattern:
- They accept options and return a component
- They inject common functionality like error handling
- They handle resource loading and watching

### Integration with Resource Models
- Uses models to determine API versions
- Adapts to resource schema changes
- Supports custom resources via CRDs

### Routing Integration
- Generates routes for resources
- Handles URL parameters
- Preserves filters in URLs

## Related Components

- [MultiListPage](./MultiListPage.md): Component for showing multiple resource lists
- [DetailsPage](./DetailsPage.md): Component for resource details
- [navFactory](./NavFactory.md): Factory for details page tabs
- [ListPageWrapper](./ListPageWrapper.md): Wrapper for list pages
