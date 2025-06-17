# PerspectiveContext

**Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-dynamic-plugin-sdk/src/perspective/perspective-context.ts`

## Purpose
The PerspectiveContext provides a React Context system for managing and accessing the active perspective throughout the OpenShift console. It allows components to be aware of and respond to the current perspective, enabling the UI to adapt based on whether a user is in the Developer, Administrator, or other perspective.

## Context Structure

```typescript
interface PerspectiveContextType {
  perspective: string;
  setPerspective: (perspective: string) => void;
  lastPerspective: string;
  perspectives: { id: string; name: string; icon?: React.ReactNode }[];
  setLastPerspective: (perspective: string) => void;
}

// Create the context with default values
export const PerspectiveContext = React.createContext<PerspectiveContextType>({
  perspective: '',
  setPerspective: () => {},
  lastPerspective: '',
  perspectives: [],
  setLastPerspective: () => {},
});
```

## Key Components

### Context Provider
The provider component that makes perspective state available throughout the app.

```tsx
export const PerspectiveContextProvider: React.FC<PerspectiveContextProviderProps> = ({
  initialPerspective,
  perspectives,
  defaultPerspective,
  children,
}) => {
  const [perspective, setPerspective] = useState<string>(initialPerspective || defaultPerspective);
  const [lastPerspective, setLastPerspective] = useState<string>('');
  
  // Implementation...
  
  return (
    <PerspectiveContext.Provider
      value={{
        perspective,
        setPerspective,
        lastPerspective,
        setLastPerspective,
        perspectives,
      }}
    >
      {children}
    </PerspectiveContext.Provider>
  );
};
```

### useActivePerspective Hook
A hook that provides access to the active perspective and perspective switching.

```typescript
export const useActivePerspective = (): [
  string,
  (perspectiveId: string) => void,
] => {
  const { perspective, setPerspective } = useContext(PerspectiveContext);
  
  const setActivePerspective = useCallback(
    (perspectiveId: string) => {
      setPerspective(perspectiveId);
    },
    [setPerspective],
  );
  
  return [perspective, setActivePerspective];
};
```

## Key Features

### Perspective Management
- Tracking the active perspective
- Switching between perspectives
- Storing the previous perspective
- Managing available perspectives

### Perspective-Based UI Adaptation
- Showing/hiding UI elements based on perspective
- Loading perspective-specific components
- Adapting navigation for each perspective
- Changing layouts and views based on perspective

### Persistence
- Persisting perspective preference
- Restoring last used perspective
- Default perspective selection

## Integration Points

### Navigation Integration
- Navigation adapts based on active perspective
- Navigation extensions filtered by perspective
- Perspective switcher in masthead

### Extension Integration
- Extensions can target specific perspectives
- Plugins can register new perspectives
- Features can be enabled/disabled per perspective

### URL Integration
- Perspective state can be encoded in URL
- Deep links can specify perspective
- Browser history integration

## Usage in Components

Components can use the active perspective to adapt their behavior:

```tsx
const MyComponent: React.FC = () => {
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

## Extension Registration

Plugins can register new perspectives:

```typescript
// Define a new perspective extension
const myPerspective: PerspectiveExtension = {
  type: 'Perspective',
  properties: {
    id: 'my-perspective',
    name: 'My Perspective',
    icon: <MyPerspectiveIcon />,
    default: false,
    landing: {
      path: '/my-perspective',
      component: MyPerspectiveLandingPage,
    },
  },
};

// Register in plugin
const myPlugin = {
  type: 'Plugin',
  properties: {
    id: 'my-plugin',
  },
  extensions: [myPerspective],
};
```

## Related Components

- [DetectPerspective](./DetectPerspective.md): Component that initializes perspective
- [PerspectiveSwitcher](./PerspectiveSwitcher.md): UI for switching perspectives
- [PerspectiveNav](../navigation/PerspectiveNav.md): Perspective-specific navigation
- [withPerspectiveGuard](./withPerspectiveGuard.md): HOC for perspective-specific components
