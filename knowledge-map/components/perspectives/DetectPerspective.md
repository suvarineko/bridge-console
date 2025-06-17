# DetectPerspective

**Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-app/src/components/detect-perspective/DetectPerspective.tsx`

## Purpose
The DetectPerspective component manages the initialization and detection of the active perspective in the OpenShift console. It determines which perspective should be active based on URL, user preferences, and available perspectives, then provides this information to the rest of the application through the PerspectiveContext.

## Component Structure

```tsx
const DetectPerspective: React.FC = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const [perspectiveExtensions] = useResolvedExtensions<PerspectiveExtension>(isPerspective);
  const [perspectiveMetadata, setPerspectiveMetadata] = useState<PerspectiveMetadata[]>([]);
  const [activePerspective, setActivePerspective] = useState<string>(undefined);
  const [preferredPerspective] = usePreferredPerspective();
  const lastPerspective = useLastPerspective(activePerspective);
  
  // Implementation details...
  
  return (
    <PerspectiveContext.Provider
      value={useMemo(
        () => ({
          perspective: activePerspective,
          setPerspective: setActivePerspective,
          lastPerspective,
          perspectives: perspectiveMetadata,
        }),
        [activePerspective, lastPerspective, perspectiveMetadata],
      )}
    >
      <PerspectiveDetector />
      {children}
    </PerspectiveContext.Provider>
  );
};

export default DetectPerspective;
```

## Key Components

### PerspectiveDetector
Internal component that handles perspective detection logic.

```tsx
const PerspectiveDetector: React.FC = () => {
  const { perspective, setPerspective, perspectives } = useContext(PerspectiveContext);
  const location = useLocation();
  const history = useHistory();
  
  useEffect(() => {
    // Logic to detect the correct perspective based on URL
    const perspectiveFromURL = getPerspectiveFromURL(location.pathname);
    
    if (perspectiveFromURL && perspectiveFromURL !== perspective) {
      setPerspective(perspectiveFromURL);
    } else if (!perspective && perspectives.length > 0) {
      // Set default perspective if none is active
      const defaultPerspective = getDefaultPerspective(perspectives);
      setPerspective(defaultPerspective.id);
      
      // Redirect to the perspective landing page if needed
      if (location.pathname === '/') {
        history.replace(defaultPerspective.landing.path);
      }
    }
  }, [location, perspective, perspectives, setPerspective, history]);
  
  return null;
};
```

### usePreferredPerspective
Hook for accessing the user's preferred perspective.

```typescript
export const usePreferredPerspective = (): [
  string,
  (perspectiveId: string) => void,
] => {
  const userSettingsContext = useUserSettings();
  const [preferredPerspective, setPreferredPerspective] = useState<string>('');
  
  useEffect(() => {
    // Load preferred perspective from user settings
    userSettingsContext
      .getSettings('console', 'perspective')
      .then((settings) => {
        if (settings?.preferredPerspective) {
          setPreferredPerspective(settings.preferredPerspective);
        }
      })
      .catch((error) => {
        // Error handling
      });
  }, [userSettingsContext]);
  
  const setPreferredPerspectiveAndSave = useCallback(
    (perspectiveId: string) => {
      // Save preferred perspective to user settings
      userSettingsContext
        .updateSettings('console', 'perspective', { preferredPerspective: perspectiveId })
        .then(() => {
          setPreferredPerspective(perspectiveId);
        })
        .catch((error) => {
          // Error handling
        });
    },
    [userSettingsContext],
  );
  
  return [preferredPerspective, setPreferredPerspectiveAndSave];
};
```

## Key Features

### Perspective Detection
- URL-based perspective detection
- User preference-based perspective selection
- Default perspective fallback
- Perspective validation (checking if perspective exists)

### Perspective Initialization
- Loading and processing perspective extensions
- Building perspective metadata
- Setting up initial perspective context
- Handling perspective-specific landing pages

### Perspective Navigation
- Redirecting to perspective landing pages
- Preserving perspective when navigating
- Handling perspective switching
- URL updates on perspective change

## Integration Points

### User Settings Integration
- Loading perspective preferences from user settings
- Saving perspective preferences to user settings
- Synchronizing preferences across browser sessions

### URL Integration
- Reading perspective from URL path
- Updating URL when perspective changes
- Supporting deep links into perspectives
- Preserving URL parameters during perspective switches

### Extension Integration
- Discovering perspective extensions from plugins
- Processing perspective metadata
- Supporting dynamically added perspectives
- Handling perspective removal

## Usage Flow

1. **Initialization**:
   - Component loads available perspective extensions
   - Extensions are processed into metadata
   - User preferences are loaded

2. **Detection**:
   - URL is checked for perspective indicator
   - If no perspective in URL, preferred perspective is used
   - If no preference, default perspective is used

3. **Activation**:
   - Selected perspective is set as active
   - Context is updated with active perspective
   - Navigation may redirect to landing page if needed

4. **Maintenance**:
   - Watches for URL changes to detect perspective switches
   - Updates context when perspective changes
   - Tracks last used perspective

## Related Components

- [PerspectiveContext](./PerspectiveContext.md): Context for perspective state
- [useActivePerspective](./useActivePerspective.md): Hook for accessing active perspective
- [PerspectiveSwitcher](./PerspectiveSwitcher.md): UI for switching perspectives
- [PerspectiveNav](../navigation/PerspectiveNav.md): Perspective-specific navigation
