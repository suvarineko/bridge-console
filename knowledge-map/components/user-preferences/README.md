# User Preferences Components

The User Preferences system in the OpenShift console provides a way to store and manage user-specific settings and preferences. It allows for customization of the console experience on a per-user basis.

## Key User Preferences Components

### [UserPreferencesController](./UserPreferencesController.md)
Core controller for managing user preferences data.

### [UserPreferencesPage](./UserPreferencesPage.md)
UI for viewing and modifying user preferences.

### [PreferenceStorage](./PreferenceStorage.md)
Storage system for user preferences (ConfigMap or LocalStorage based).

## Preferences Features

The User Preferences system manages several types of user-specific settings:

### General Preferences
- Language/locale settings
- Theme settings
- Timezone settings
- Default perspective

### View Customization
- Table view preferences (columns, pagination)
- Resource defaults (namespace filters)
- Perspective-specific settings

### Navigation Preferences
- Pinned resources
- Perspective history
- Recently used resources

## Storage Mechanisms

User preferences can be stored in different backends:

1. **ConfigMap Storage**: Preferences stored in a Kubernetes ConfigMap
   - Persists across browsers/devices
   - Requires authenticated users
   - Managed by server-side code

2. **LocalStorage**: Preferences stored in browser's localStorage
   - Works for unauthenticated users
   - Limited to current browser
   - Client-side only implementation

## API and Integration

The User Preferences system provides APIs for other components:

1. **Hooks API**: React hooks for accessing and updating preferences
2. **Service API**: Direct service calls for preference management
3. **Redux Integration**: Integration with the application state
4. **Server API**: REST endpoints for server-side storage

## Implementation Notes

- Preferences are stored as JSON objects
- Changes are tracked and synchronized across tabs/windows
- Fallback mechanisms for handling errors and offline usage
- Migration strategies for preference format changes
- Size limits to prevent excessive storage usage

## Related Components

- [Perspectives](../perspectives/README.md): Uses preferences for default perspective
- [Navigation](../navigation/README.md): Uses preferences for pinned resources
- [Auth](../auth/README.md): Integration with user identity for storage
