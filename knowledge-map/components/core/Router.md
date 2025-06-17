# Router Component

The Router component is a core infrastructure component that handles URL routing and navigation throughout the OpenShift Console application.

## Overview

The Router provides a unified system for URL management, history tracking, and navigation across the entire console. It builds on top of the History API and React Router to offer consistent and powerful routing capabilities.

## Key Features

### History Management

The Router:
- Creates and manages a browser history object
- Handles path-based navigation
- Maintains navigation state
- Provides back/forward navigation support
- Handles proper base path prefixing

### URL Parameter Handling

Router offers utilities for:
- Getting query parameters from URLs
- Setting single or multiple query parameters
- Removing query parameters
- Managing query parameter updates

### Base Path Integration

The Router automatically:
- Handles base path prefixing for server-relative URLs
- Removes base paths when navigating
- Ensures URLs work correctly in a proxied environment
- Adjusts paths based on the configured base path

## Core APIs

The Router provides several key functions:

### Navigation Functions

- `history.push(url)`: Navigate to a new URL
- `history.replace(url)`: Replace current URL without adding to history
- `history.pushPath(path)`: Navigate to a path directly (internal use)

### Query Parameter Functions

- `getQueryArgument(arg)`: Get value of a query parameter
- `setQueryArgument(key, value)`: Set a single query parameter
- `setQueryArguments(params)`: Set multiple query parameters at once
- `removeQueryArgument(key)`: Remove a query parameter
- `removeQueryArguments(...keys)`: Remove multiple query parameters
- `setOrRemoveQueryArgument(key, value)`: Conditionally set or remove a parameter

## Implementation Details

The Router uses React Router internally but provides a higher-level API customized for the OpenShift Console's needs:

```typescript
// Creating history object with proper base path
export const history = createHistory({ basename: window.SERVER_FLAGS.basePath });

// Monkey patching to handle base path
history.replace = (url) => history.__replace__(removeBasePath(url));
history.push = (url) => history.__push__(removeBasePath(url));
```

## Integration with Console

The Router integrates with:
- Perspective switching
- Namespace switching
- Resource navigation
- Tab navigation
- List filtering
- Search functionality

## Related Components

- [AppContents](./AppContents.md): Uses Router for main application routing
- [Navigation Components](../navigation/README.md): Trigger Router navigation
- [Navigation Resolution Flow](../../flows/navigation-resolution-flow.md): Details how routes are processed
- [router-hooks.ts](path/to/router-hooks.ts): React hooks for Router integration
