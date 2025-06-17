# PreferenceStorage Component

The PreferenceStorage component provides the underlying storage mechanisms for persisting user preferences in the OpenShift Console.

## Overview

PreferenceStorage offers an abstraction layer over multiple storage backends, providing a consistent interface for storing, retrieving, and managing user preference data regardless of the underlying storage technology.

## Key Features

### Multiple Storage Backends

The component supports different storage mechanisms:
- **ConfigMap Storage**: Server-side storage using Kubernetes ConfigMaps
- **LocalStorage**: Client-side storage using browser's localStorage API
- **Memory Storage**: Temporary in-memory storage for anonymous users or testing
- **Fallback Chain**: Cascading fallback between storage methods

### Preference Data Structure

Manages preference data with:
- Namespaced preference keys
- JSON serialization/deserialization
- Schema validation
- Version tracking
- Data migration between versions

### Storage Operations

Provides core operations for preference management:
- **Read**: Retrieve preference values with defaults
- **Write**: Store new or updated preference values
- **Delete**: Remove specific preferences
- **List**: Enumerate available preferences
- **Batch**: Execute multiple operations atomically

### Synchronization

Handles data synchronization scenarios:
- Cross-tab/window synchronization
- Server-client data reconciliation
- Conflict resolution
- Change detection
- Update notifications

## Implementation Details

### ConfigMap Storage

The ConfigMap backend:
- Uses the Kubernetes API to store preferences in a user-specific ConfigMap
- Supports persistence across browsers and devices
- Requires authenticated user context
- Handles API rate limiting and error conditions
- Includes optimistic concurrency control

### LocalStorage Backend

The LocalStorage backend:
- Uses browser's localStorage API
- Prefixes keys with user context when available
- Handles storage quotas and limits
- Provides fallback for unauthenticated users
- Implements storage event listeners for synchronization

### Storage Factory

Includes a factory pattern for storage selection:
- Detects the best available storage method
- Creates appropriate storage instance
- Allows runtime switching between backends
- Handles migration between storage types
- Manages storage initialization and cleanup

## API Interface

The storage component exposes a consistent API:

```typescript
interface PreferenceStorage {
  get<T>(key: string, defaultValue?: T): Promise<T>;
  set<T>(key: string, value: T): Promise<void>;
  delete(key: string): Promise<void>;
  getAll(): Promise<Record<string, unknown>>;
  watch(callback: (changes: StorageChange) => void): () => void;
}
```

## Error Handling

Robust error management includes:
- Graceful degradation between storage backends
- Detailed error reporting
- Automatic retry for transient failures
- Data integrity validation
- Corruption detection and recovery

## Related Components

- [UserPreferencesController](./UserPreferencesController.md): Higher-level preference management
- [UserPreferencesPage](./UserPreferencesPage.md): UI for preferences
- [Authentication Components](../auth/README.md): Integration with user identity
