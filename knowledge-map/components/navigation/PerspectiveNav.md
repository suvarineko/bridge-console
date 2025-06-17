# PerspectiveNav

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/PerspectiveNav.tsx`

## Purpose
The PerspectiveNav component dynamically renders navigation items based on the active perspective. It displays both standard navigation items and pinned resources specific to the current perspective.

## Component Structure

```tsx
const PerspectiveNav: React.FC<{}> = () => {
  const [activePerspective] = useActivePerspective();
  const allNavExtensions = useNavExtensionsForPerspective(activePerspective);
  const [pinnedResources, setPinnedResources, pinnedResourcesLoaded] = usePinnedResources();
  const [validPinnedResources, setValidPinnedResources] = React.useState<string[]>([]);
  const [isDragged, setIsDragged] = React.useState(false);
  const { t } = useTranslation();

  // Implementation details...

  return hasListItem ? (
    <NavList
      className="oc-perspective-nav"
      title=""
      aria-label={t('public~Main navigation')}
      data-test-id={`${activePerspective}-perspective-nav`}
    >
      {content}
    </NavList>
  ) : (
    <div className="oc-perspective-nav" data-test-id={`${activePerspective}-perspective-nav`}>
      {content}
    </div>
  );
};
```

## Key Features

### Dynamic Navigation
- Retrieves navigation extensions based on the active perspective
- Orders extensions based on their defined ordering
- Uses plugins to extend the navigation structure

### Pinned Resources
- Displays user-pinned resources in the navigation
- Supports drag-and-drop reordering of pinned resources
- Filters invalid pinned resources

### Responsive Design
- Adapts to different screen sizes
- Handles navigation item interaction consistently

## State Management

- **activePerspective**: Current active perspective from the perspective system
- **allNavExtensions**: Navigation extensions available for the current perspective
- **pinnedResources**: User-pinned resources stored in user preferences
- **validPinnedResources**: Filtered list of pinned resources that are still valid
- **isDragged**: Tracks if a pinned resource is currently being dragged

## Extension Integration

1. **useActivePerspective**: Hook to get the current active perspective
2. **useNavExtensionsForPerspective**: Hook to get navigation extensions for the active perspective
3. **usePinnedResources**: Hook to manage user-pinned resources

## Rendering Logic

1. **Extension Filtering**: Filters to top-level navigation extensions
2. **Extension Sorting**: Sorts extensions based on their specified order
3. **Extension Rendering**: Renders extensions as `PluginNavItem` components
4. **Pinned Resources**: Renders user-pinned resources with drag-drop capability
5. **Conditional Rendering**: Uses different containers based on the types of extensions

## Related Components

- [PluginNavItem](./PluginNavItem.md): Component for rendering individual navigation items
- [PinnedResource](./PinnedResource.md): Component for pinned resource items
- [NavSection](./NavSection.md): Component for collapsible navigation sections
