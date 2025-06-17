# Navigation Components

The navigation system in the OpenShift console provides the left sidebar navigation and menu structure that allows users to navigate between different parts of the application. It's based on a plugin-extensible architecture that allows dynamic construction of the menu based on the active perspective.

## Key Navigation Components

### [Navigation](./Navigation.md)
The main wrapper component that renders the page sidebar with navigation elements.

### [PerspectiveNav](./PerspectiveNav.md)
Dynamic navigation component that renders navigation items based on the active perspective.

### [NavSection](./NavSection.md)
Collapsible navigation section that groups related navigation items.

### [NavHeader](./NavHeader.md)
The header component of the navigation sidebar with perspective switcher.

### [NavItem Components](./NavItems.md)
Various navigation item components including resource links, external links, and plugin-provided items.

## Navigation Extension System

The navigation system is built with an extension framework that allows plugins to contribute navigation items:

1. **Extension Points**: Console defines extension points for navigation
2. **Plugin Registration**: Plugins register navigation items
3. **Dynamic Resolution**: Navigation items are dynamically resolved at runtime
4. **Perspective Filtering**: Navigation items can be filtered by perspective
5. **Ordering**: Navigation items can specify their ordering

## Data Flow

1. **Perspective Selection**: User selects a perspective
2. **Extension Resolution**: Navigation extensions for the active perspective are resolved
3. **Extension Rendering**: Extensions are rendered as navigation components
4. **State Update**: Navigation state (active items, expanded sections) is maintained

## Pinned Resources

The navigation system includes a feature for pinning frequently-used resources:

1. **Resource Pinning**: Users can pin resources to the navigation sidebar
2. **Drag and Drop**: Pinned resources can be reordered via drag and drop
3. **Persistence**: Pinned resources are persisted in user settings

## Related Components

- [Perspectives](../perspectives/README.md): Different UI perspectives that affect navigation
- [Plugin System](../plugins/README.md): Extensibility system that provides navigation items
