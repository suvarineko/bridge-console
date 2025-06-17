# PerspectiveSwitcher Component

The PerspectiveSwitcher provides a user interface for switching between different perspectives in the OpenShift Console.

## Overview

The PerspectiveSwitcher component renders a dropdown menu in the masthead of the console, allowing users to easily switch between available perspectives such as Developer and Administrator. It displays perspective icons, names, and handles the transition between perspectives when a user makes a selection.

## Key Features

### Perspective Display

Visual representation of perspectives:
- Perspective icon display
- Perspective name display
- Indication of active perspective
- Dropdown menu for perspective selection
- Tooltips with perspective descriptions
- Keyboard navigation support
- Accessibility considerations

### Perspective Switching

Handles perspective transitions:
- Triggering perspective change on selection
- Smooth transition between perspectives
- State persistence on perspective switch
- URL updates reflecting perspective change
- Handling navigation within perspectives
- Focus management during switches
- Loading states during transition

### Perspective Filtering

Smart perspective presentation:
- Filtering based on user permissions
- Showing only accessible perspectives
- Optional perspectives management
- Dynamic perspective discovery
- Feature flag integration
- Preference-based ordering
- Recently used perspectives prioritization

## Implementation Details

The PerspectiveSwitcher is implemented using:
- PatternFly dropdown components
- React hooks for perspective state
- Integration with the perspective context
- Redux for global state updates
- Router integration for URL changes
- Event-based state management
- Responsive design for different viewports

## Component Structure

The component has a typical structure like:
```jsx
const PerspectiveSwitcher: React.FC = () => {
  const [activePerspective, setActivePerspective] = useActivePerspective();
  const { perspectives } = useContext(PerspectiveContext);
  const history = useHistory();
  
  const onPerspectiveSelect = useCallback(
    (perspectiveId: string) => {
      if (perspectiveId !== activePerspective) {
        // Handle perspective change
        setActivePerspective(perspectiveId);
        
        // Find the landing page for this perspective
        const perspective = perspectives.find(p => p.id === perspectiveId);
        if (perspective?.landing) {
          history.push(perspective.landing.path);
        }
      }
    },
    [activePerspective, setActivePerspective, perspectives, history]
  );
  
  return (
    <ApplicationLauncher
      onSelect={item => onPerspectiveSelect(item.id)}
      items={perspectives.map(p => ({
        id: p.id,
        name: p.name,
        icon: p.icon,
        isActive: p.id === activePerspective,
      }))}
      position="right"
      toggleIcon={<PerspectiveIcon perspective={activePerspective} />}
      toggleText={perspectives.find(p => p.id === activePerspective)?.name}
    />
  );
};
```

## User Experience Considerations

The switcher is designed with user experience in mind:
- Clear visual indication of active perspective
- Consistent placement in the masthead
- Quick access to all available perspectives
- Predictable navigation behavior
- Subtle but recognizable UI element
- Tooltips explaining perspective purpose
- Keyboard shortcuts for power users

## Integration Points

The PerspectiveSwitcher integrates with:
- **PerspectiveContext**: For perspective state
- **Navigation**: For perspective-specific navigation
- **Router**: For URL-based navigation
- **User Preferences**: For storing selected perspective
- **RBAC System**: For permission-based filtering
- **Plugin System**: For dynamic perspective discovery
- **Masthead**: For consistent placement in the UI

## Related Components

- [PerspectiveContext](./PerspectiveContext.md): Context for perspective state
- [DetectPerspective](./DetectPerspective.md): Handles perspective detection
- [PerspectiveController](./PerspectiveController.md): Manages perspective state
- [useActivePerspective](./useActivePerspective.md): Hook for perspective state
- [PerspectiveWrapper](./PerspectiveWrapper.md): Wraps perspective content
