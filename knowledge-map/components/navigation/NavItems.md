# Navigation Item Components

The OpenShift Console provides a set of navigation item components that represent individual links and actions within the navigation sidebar. These components ensure consistent styling, behavior, and integration with the navigation system.

## Overview

Navigation item components create a uniform interface for navigating throughout the console. They:
- Provide consistent styling and behavior
- Support various navigation use cases
- Integrate with the routing system
- Can be extended by plugins

## Key Components

### NavItem

The basic navigation link component that:
- Links to console routes
- Shows active state for current route
- Supports icons and text
- Can display notification badges

```tsx
<NavItem
  to="/k8s/cluster/projects"
  data-test="projects-nav-item"
  isActive={isActive}
  icon={<ProjectIcon />}
>
  Projects
</NavItem>
```

### ResourceNavItem

A specialized navigation item for Kubernetes resources:
- Links to resource list pages
- Shows resource kind info
- Can display resource counts
- Handles namespaced/cluster resources

```tsx
<ResourceNavItem
  resource="pods"
  kind="Pod"
  namespace={namespace}
  isActive={isActive}
/>
```

### HrefNavItem

Navigation item for external links:
- Opens links in new tabs
- Shows external link indicator
- Handles proper URL formatting
- Preserves navigation context

```tsx
<HrefNavItem
  href="https://docs.openshift.com"
  data-test="docs-nav-item"
  icon={<BookIcon />}
>
  Documentation
</HrefNavItem>
```

### NavGroup

Container for related navigation items:
- Groups related items without a collapsible section
- Provides consistent spacing and indentation
- Can be conditionally rendered
- Supports title/label

```tsx
<NavGroup title="Advanced" data-test="advanced-nav-group">
  <NavItem to="/settings/cluster" />
  <NavItem to="/settings/idp" />
</NavGroup>
```

### PinnedResourceNavItem

Navigation item for user-pinned resources:
- Can be dragged/reordered
- Shows resource type icon
- Links to resource list view
- Displays unpin option on hover

```tsx
<PinnedResourceNavItem
  resource="deployments"
  kind="Deployment"
  namespace={namespace}
  isDraggable={true}
  onUnpin={handleUnpin}
/>
```

## Common Features

All navigation items support:
- Active state indication
- Consistent hover/focus states
- Keyboard navigation
- Accessibility features
- Data attributes for testing
- Conditional rendering based on permissions
- Integration with feature flags

## Plugin Integration

Navigation items can be:
- Added by plugins via extension points
- Ordered relative to existing items
- Filtered by perspective
- Gated by feature flags

## Visual Design

Navigation items follow PatternFly design guidelines:
- Consistent spacing and padding
- Typography standards
- Icon usage and placement
- Color and contrast ratios
- Interaction states

## Related Components

- [Navigation](./Navigation.md): Main navigation container
- [PerspectiveNav](./PerspectiveNav.md): Perspective-specific navigation
- [NavSection](./NavSection.md): Collapsible navigation sections
- [NavHeader](./NavHeader.md): Navigation header with perspective switcher
