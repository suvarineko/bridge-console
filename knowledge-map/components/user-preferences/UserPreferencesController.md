# UserPreferencesController Component

The UserPreferencesController is the core component that manages the loading, saving, and synchronization of user preferences in the OpenShift Console.

## Overview

UserPreferencesController serves as the central controller for all user preference operations, providing a consistent API for other components to interact with user-specific settings. It handles the complexities of different storage backends, error conditions, and synchronization.

## Key Responsibilities

### Preference Loading

The controller manages the initial loading of preferences:
- Detects the appropriate storage backend (ConfigMap or LocalStorage)
- Loads preferences asynchronously during application initialization
- Handles migration of preferences between formats
- Provides default values when preferences don't exist
- Manages loading states and error conditions

### Preference Storage

Handles persistent storage of preference data:
- Writes updates to the appropriate backend
- Manages conflicts and concurrent updates
- Implements throttling for frequent changes
- Ensures atomicity of preference updates
- Handles storage quotas and size limitations

### Data Synchronization

Ensures preferences remain synchronized:
- Synchronizes changes across browser tabs/windows
- Detects external changes to preferences
- Reconciles conflicting changes
- Provides notification of preference changes
- Implements optimistic updates with fallback

### Error Handling

Provides robust error management:
- Handles storage backend failures
- Implements fallback mechanisms
- Prevents preference data loss
- Logs errors for diagnostics
- Provides user feedback on critical errors

## Implementation Details

The controller is implemented as a React context provider:
- Creates a React context for preferences
- Provides hooks for components to access preferences
- Manages internal state for preferences
- Handles preference versioning and migration
- Implements JSON serialization/deserialization

## API Surface

The controller exposes several APIs:

### React Hooks
```typescript
// Access any preference
const value = useUserPreference('preferenceKey', defaultValue);

// Set a preference value
const setValue = useSetUserPreference('preferenceKey');
setValue(newValue);

// Access and update a preference
const [value, setValue] = useUserPreferencePair('preferenceKey', defaultValue);
```

### Direct API
```typescript
// Low-level API for advanced cases
UserPreferencesController.get('preferenceKey', defaultValue);
UserPreferencesController.set('preferenceKey', newValue);
UserPreferencesController.delete('preferenceKey');
UserPreferencesController.getAll();
```

## Storage Backend Integration

The controller integrates with two primary storage mechanisms:

### ConfigMap Backend
- Used for authenticated users
- Persists preferences across devices/browsers
- Managed through Kubernetes API
- Subject to RBAC permissions
- Size limited by ConfigMap restrictions

### LocalStorage Backend
- Used for anonymous users or as fallback
- Limited to current browser
- Not subject to RBAC permissions
- Limited by browser storage quotas
- Survives page refreshes

## Related Components

- [UserPreferencesPage](./UserPreferencesPage.md): UI for managing preferences
- [PreferenceStorage](./PreferenceStorage.md): Low-level storage mechanisms
- [Authentication Components](../auth/README.md): Integration with user identity
