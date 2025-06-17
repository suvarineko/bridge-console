# useActivePerspective Hook

The useActivePerspective hook provides a simple interface for accessing and updating the active perspective throughout the OpenShift Console.

## Overview

The useActivePerspective hook is a custom React hook that encapsulates access to the active perspective state from the PerspectiveContext. It allows components to read the currently active perspective and trigger perspective changes without directly interacting with the context system.

## Hook Signature

```typescript
function useActivePerspective(): [string, (perspectiveId: string) => void]
```

The hook returns a tuple with:
1. The current active perspective ID (string)
2. A function to set a new active perspective (takes a perspective ID string)

## Key Features

### Perspective State Access

Provides easy access to perspective state:
- Current active perspective retrieval
- Type-safe perspective ID handling
- Perspective change capability
- Memoized state updates
- Component re-rendering on perspective changes
- No need to directly use React Context

### Perspective Switching

Handles perspective transition logic:
- Setting a new active perspective
- Optional navigation to perspective landing page
- Storing perspective preference
- Updating URL for deep linking
- Broadcasting perspective change events
- Integration with router history

### Usage Patterns

Supports different usage scenarios:
- Conditional rendering based on perspective
- Perspective-aware component behavior
- Programmatic perspective switching
- Navigation integration
- Perspective history tracking
- Feature enablement based on perspective

## Implementation Details

The hook is implemented using:
- React Context for state access
- React's useContext hook internally
- Callback memoization with useCallback
- Integration with router history (optional)
- Redux action dispatching (optional)
- User preference storage (optional)

## Example Implementation

A simplified implementation might look like:
```typescript
export const useActivePerspective = (): [
  string,
  (perspectiveId: string) => void
] => {
  const { perspective, setPerspective, perspectives } = useContext(PerspectiveContext);
  const history = useHistory();
  
  const setActivePerspective = useCallback(
    (perspectiveId: string) => {
      if (perspectiveId !== perspective) {
        // Set the new perspective
        setPerspective(perspectiveId);
        
        // Optional: Navigate to perspective landing page
        const selectedPerspective = perspectives.find(p => p.id === perspectiveId);
        if (selectedPerspective?.landing?.path) {
          history.push(selectedPerspective.landing.path);
        }
        
        // Optional: Store user preference
        storeUserPerspectivePreference(perspectiveId);
      }
    },
    [perspective, setPerspective, perspectives, history]
  );
  
  return [perspective, setActivePerspective];
};
```

## Usage Examples

Simple usage in a component:
```jsx
const MyComponent: React.FC = () => {
  const [activePerspective, setActivePerspective] = useActivePerspective();
  
  return (
    <div>
      <div>Current perspective: {activePerspective}</div>
      <button onClick={() => setActivePerspective('dev')}>
        Switch to Developer
      </button>
      <button onClick={() => setActivePerspective('admin')}>
        Switch to Administrator
      </button>
    </div>
  );
};
```

Conditional rendering based on perspective:
```jsx
const ConditionalComponent: React.FC = () => {
  const [activePerspective] = useActivePerspective();
  
  if (activePerspective === 'dev') {
    return <DeveloperView />;
  }
  
  if (activePerspective === 'admin') {
    return <AdminView />;
  }
  
  return <DefaultView />;
};
```

## Integration Points

The useActivePerspective hook integrates with:
- **PerspectiveContext**: For perspective state
- **Router**: For navigation with perspective changes
- **User Preferences**: For storing perspective choice
- **Redux Store**: For global perspective state (optional)
- **Plugin System**: For perspective-aware extensions

## Related Components

- [PerspectiveContext](./PerspectiveContext.md): Context for perspective state
- [DetectPerspective](./DetectPerspective.md): Handles perspective detection
- [PerspectiveController](./PerspectiveController.md): Manages perspective state
- [PerspectiveSwitcher](./PerspectiveSwitcher.md): UI for switching perspectives
- [PerspectiveWrapper](./PerspectiveWrapper.md): Wraps perspective content
