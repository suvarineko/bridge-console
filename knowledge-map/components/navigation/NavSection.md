# NavSection Component

The NavSection component is a collapsible navigation section that groups related navigation items in the OpenShift Console sidebar.

## Overview

NavSection provides a hierarchical organization for navigation items, allowing related items to be grouped together under a common heading. It supports expansion and collapse functionality to help users manage the complexity of the navigation interface.

## Key Features

### Collapsible Content

The NavSection component:
- Provides a collapsible/expandable container for navigation items
- Maintains expansion state between page loads
- Animates transitions between expanded and collapsed states
- Shows visual indicators of expansion state

### Hierarchical Organization

NavSection handles:
- Grouping related navigation items under a common section
- Proper indentation and visual structure
- Section title and optional icon
- Consistent styling with the navigation system

### Plugin Integration

The component supports:
- Dynamic addition of sections from plugins
- Custom sections for different perspectives
- Extension-based section ordering
- Conditional visibility based on feature flags

## Component Structure

```tsx
<NavSection
  id="admin-section"
  title="Administration"
  icon={<CogIcon />}
  isExpanded={true}
  dataTest="admin-nav-section"
>
  <NavItem to="/admin/projects" />
  <NavItem to="/admin/namespaces" />
  <NavItem to="/admin/roles" />
</NavSection>
```

## User Interaction

NavSection responds to:
- Click events on the section header to toggle expansion
- Keyboard navigation for accessibility
- Focus management for keyboard users
- Screen reader announcements for state changes

## Persistence

The expansion state of NavSections is:
- Stored in local storage
- Persisted between page refreshes
- Specific to each perspective
- User-customizable

## Visual Design

The component follows PatternFly design guidelines for:
- Spacing and padding
- Typography hierarchy
- Icon placement and sizing
- Expansion indicators
- Hover and active states

## Related Components

- [Navigation](./Navigation.md): Main navigation container
- [PerspectiveNav](./PerspectiveNav.md): Perspective-specific navigation
- [NavItem Components](./NavItems.md): Individual navigation items
- [NavHeader](./NavHeader.md): Navigation header with perspective switcher
