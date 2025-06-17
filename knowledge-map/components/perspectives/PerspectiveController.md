# PerspectiveController Component

The PerspectiveController is the central management component for the perspective system in the OpenShift Console, orchestrating perspective state, transitions, and feature availability.

## Overview

The PerspectiveController serves as the brains of the perspective system, coordinating the registration, selection, and switching of perspectives. It processes perspective extensions from plugins, manages perspective state, and provides the underlying functionality for the perspective user interface.

## Key Features

### Perspective Registration

Manages perspective discovery and registration:
- Processing perspective extensions from plugins
- Validating perspective definitions
- Registering built-in perspectives
- Handling dynamic perspective additions
- Managing perspective metadata
- Resolving perspective dependencies

### Perspective State Management

Controls perspective activation and state:
- Setting the active perspective
- Tracking perspective history
- Storing user perspective preferences
- Handling perspective transitions
- Managing perspective URL mapping
- Default perspective selection
- Perspective navigation rules

### Perspective Feature Control

Controls feature availability per perspective:
- Filtering navigation items by perspective
- Managing perspective-specific extensions
- Controlling feature visibility
- Processing perspective-specific access rules
- Applying perspective layouts
- Feature flag integration per perspective
- Permission checks for perspective features

## Implementation Details

The PerspectiveController is implemented using:
- React Context API for state sharing
- Redux for global state management
- Extension API for plugin integration
- React hooks for component integration
- URL-based state management
- User preference storage
- Event-based communication

## Perspective Lifecycle

The controller manages the complete perspective lifecycle:
1. **Registration**: Perspectives are registered from plugins or core
2. **Initialization**: Default or stored perspective is activated
3. **Selection**: User selects a perspective
4. **Transition**: UI adapts to new perspective
5. **State Update**: Components react to perspective change
6. **Persistence**: Selected perspective is stored in preferences

## Perspective Data Structure

Each perspective contains metadata like:
```typescript
interface Perspective {
  id: string;
  name: string;
  icon: React.ReactNode;
  default?: boolean;
  landing?: {
    path: string;
    component: React.ComponentType;
  };
  getIsActive?: (path: string) => boolean;
}
```

## Integration Points

The PerspectiveController integrates with:
- **Plugin System**: For perspective registration
- **Navigation System**: For perspective-specific navigation
- **Router**: For URL-based perspective selection
- **User Preferences**: For persisting perspective choice
- **Redux Store**: For global perspective state
- **Authentication System**: For permission-based perspective access
- **Feature Flags**: For conditional perspective features

## Related Components

- [PerspectiveContext](./PerspectiveContext.md): Context for perspective state
- [DetectPerspective](./DetectPerspective.md): Handles perspective detection
- [PerspectiveSwitcher](./PerspectiveSwitcher.md): UI for switching perspectives
- [useActivePerspective](./useActivePerspective.md): Hook for perspective state
- [PerspectiveWrapper](./PerspectiveWrapper.md): Wraps perspective content
