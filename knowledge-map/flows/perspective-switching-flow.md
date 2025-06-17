# Perspective Switching Flow

## Overview
This document describes how the perspective switching process works in the OpenShift console, from user interaction to UI updates and state persistence.

## Flow Steps

1. **Perspective Switch Initiation**
   - **Component:** PerspectiveSwitcher
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-app/src/components/perspective-switcher/`
   - **Action:** User selects a new perspective from dropdown
   - **Implementation:** Calls setPerspective from PerspectiveContext

2. **Perspective State Update**
   - **Component:** PerspectiveContext
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-dynamic-plugin-sdk/src/perspective/perspective-context.ts`
   - **Action:** Updates active perspective in context
   - **Implementation:**
     ```typescript
     const setActivePerspective = (perspectiveId: string) => {
       // Store previous perspective for potential return
       setLastPerspective(perspective);
       // Set new active perspective
       setPerspective(perspectiveId);
     };
     ```

3. **URL Update**
   - **Component:** PerspectiveDetector
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-app/src/components/detect-perspective/PerspectiveDetector.tsx`
   - **Action:** Updates URL to reflect new perspective
   - **Implementation:**
     ```typescript
     useEffect(() => {
       if (perspective && needsURLUpdate(location.pathname, perspective)) {
         // Get landing page for the perspective
         const landingPage = getLandingPage(perspective, perspectives);
         // Update URL while preserving query parameters
         history.push({
           pathname: landingPage,
           search: location.search,
         });
       }
     }, [perspective, location, history, perspectives]);
     ```

4. **Navigation Update**
   - **Component:** PerspectiveNav
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/PerspectiveNav.tsx`
   - **Action:** Rebuilds navigation based on new perspective
   - **Implementation:**
     ```typescript
     const [activePerspective] = useActivePerspective();
     const navExtensions = useNavExtensionsForPerspective(activePerspective);
     ```

5. **Preference Storage**
   - **Component:** usePreferredPerspective
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-app/src/components/user-preferences/perspective/usePreferredPerspective.ts`
   - **Action:** Stores user's perspective preference
   - **Implementation:**
     ```typescript
     const setPreferredPerspectiveAndSave = (perspectiveId: string) => {
       userSettingsContext.updateSettings('console', 'perspective', {
         preferredPerspective: perspectiveId,
       });
     };
     ```

6. **UI Update**
   - **Component:** Various UI components
   - **Action:** Components re-render based on new perspective
   - **Implementation:** Components use useActivePerspective() hook to adapt

## Data Flow

### Context Flow
1. **User Action → Context Update**: User selection triggers context change
2. **Context → Components**: Updated context triggers component re-renders
3. **Context → Storage**: Context changes trigger preference storage

### Extension Flow
1. **Registry → Navigation**: Extensions filtered by active perspective
2. **Registry → Actions**: Actions filtered by active perspective
3. **Registry → Views**: Views filtered by active perspective

### Persistence Flow
1. **Context → User Settings**: Perspective saved to user settings
2. **User Settings → Browser**: Settings saved to browser storage
3. **User Settings → Server**: Settings potentially synced to server

## State Management

### PerspectiveContext State
- **activePerspective**: Currently active perspective ID
- **lastPerspective**: Previously active perspective ID
- **perspectives**: List of available perspectives with metadata
- **setPerspective**: Function to change the active perspective

### URL State
- Perspective is encoded in URL path
- Landing pages are perspective-specific
- URL parameters preserved during perspective switches

### User Preferences
- Preferred perspective stored in user settings
- Settings may be stored in browser or on server
- Preferences restored on application reload

## Error Handling

### Missing Perspective
- If selected perspective doesn't exist, falls back to default
- Logs warning for missing perspective
- Maintains application usability

### Navigation Errors
- Handles invalid landing pages
- Falls back to perspective root if specific page not found
- Preserves user context where possible

### Preference Storage Errors
- Handles errors in saving preferences
- Falls back to local state if storage fails
- Provides feedback for preference save failures

## Related Components
- [PerspectiveContext](../components/perspectives/PerspectiveContext.md): Context for perspective state
- [DetectPerspective](../components/perspectives/DetectPerspective.md): Perspective detection component
- [PerspectiveNav](../components/navigation/PerspectiveNav.md): Perspective-specific navigation
- [PerspectiveSwitcher](../components/perspectives/PerspectiveSwitcher.md): UI for switching perspectives
