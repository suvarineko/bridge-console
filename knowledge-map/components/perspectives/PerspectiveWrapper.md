# PerspectiveWrapper Component

The PerspectiveWrapper component encapsulates perspective-specific content and applies the appropriate layouts, styles, and behaviors for each perspective in the OpenShift Console.

## Overview

The PerspectiveWrapper serves as a container that adapts the console's user interface based on the active perspective. It applies perspective-specific layouts, navigation structures, and visual styles while providing consistent perspective switching and state management across the application.

## Key Features

### Perspective Layout Management

Applies perspective-specific layouts:
- Customized page structure per perspective
- Navigation sidebar configuration
- Content area organization
- Header customization
- Footer options
- Responsive layout adaptation
- Drawer and panel management

### Perspective Content Rendering

Controls perspective-specific content:
- Main content area rendering
- Landing page selection
- Default view selection
- Perspective-specific components
- Feature availability control
- Component visibility rules
- Perspective-aware routing

### Perspective State Management

Manages perspective-specific state:
- Layout state persistence
- Perspective navigation history
- View state preservation during switching
- Context preservation
- Form state handling
- Filter state management
- Perspective-specific user preferences

### Transition Handling

Manages perspective switching gracefully:
- Smooth transition animations
- State cleanup on perspective change
- Resource unloading/loading
- Focus management during transitions
- Error handling during transitions
- Loading states
- Browser history integration

## Implementation Details

The PerspectiveWrapper is implemented using:
- React components for UI structure
- Context API for perspective state
- CSS for perspective-specific styling
- Layout components from PatternFly
- Redux for state management
- React Router for navigation
- Custom hooks for perspective functionality

## Component Structure

A simplified implementation might look like:
```jsx
const PerspectiveWrapper: React.FC = ({ children }) => {
  const [activePerspective] = useActivePerspective();
  const { perspectives } = useContext(PerspectiveContext);
  
  const activePerspectiveConfig = useMemo(
    () => perspectives.find(p => p.id === activePerspective),
    [perspectives, activePerspective]
  );
  
  // Apply perspective-specific layout
  const getLayoutClassNames = () => {
    return classNames(
      'perspective-wrapper',
      `perspective-${activePerspective}`,
      {
        'has-sidebar': activePerspectiveConfig?.sidebar,
        'compact-header': activePerspectiveConfig?.compactHeader,
        // Additional classes based on perspective configuration
      }
    );
  };
  
  return (
    <div className={getLayoutClassNames()}>
      {activePerspectiveConfig?.header && <PerspectiveHeader />}
      <div className="perspective-content">
        {activePerspectiveConfig?.sidebar && <PerspectiveSidebar />}
        <main className="perspective-main">
          {children}
        </main>
      </div>
      {activePerspectiveConfig?.footer && <PerspectiveFooter />}
    </div>
  );
};
```

## Usage Pattern

The PerspectiveWrapper is typically used at a high level in the component tree:
```jsx
// In App.jsx or similar root component
<AuthProvider>
  <StoreProvider>
    <Router>
      <PerspectiveProvider>
        <PerspectiveWrapper>
          <AppContents />
        </PerspectiveWrapper>
      </PerspectiveProvider>
    </Router>
  </StoreProvider>
</AuthProvider>
```

## Integration Points

The PerspectiveWrapper integrates with:
- **PerspectiveContext**: For perspective state
- **Navigation**: For perspective-specific navigation
- **Page Layout**: For perspective-specific layouts
- **Theme System**: For perspective styling
- **Router**: For perspective-aware routing
- **Plugin System**: For perspective extensibility
- **User Preferences**: For perspective settings

## Related Components

- [PerspectiveContext](./PerspectiveContext.md): Context for perspective state
- [DetectPerspective](./DetectPerspective.md): Handles perspective detection
- [PerspectiveController](./PerspectiveController.md): Manages perspective state
- [PerspectiveSwitcher](./PerspectiveSwitcher.md): UI for switching perspectives
- [useActivePerspective](./useActivePerspective.md): Hook for perspective state
