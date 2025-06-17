# AuthService

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`

## Purpose
The frontend authentication service that handles user login, logout, and session management in the OpenShift console.

## Interfaces

### userID()
Returns the current user's ID.

**Returns:** User ID string or undefined if not logged in

### name()
Returns the current user's name.

**Returns:** User name string or undefined if not logged in

### email()
Returns the current user's email.

**Returns:** User email string or undefined if not logged in

### logout(next, cluster)
Logs the user out of the console.

**Parameters:**
- `next`: Optional URL to redirect to after logout
- `cluster`: Optional cluster name for multi-cluster setups

### logoutOpenShift(isKubeAdmin = false)
Special logout flow for OpenShift, which handles token deletion and kube:admin user.

**Parameters:**
- `isKubeAdmin`: Whether the current user is the special kube:admin user

### deleteOpenShiftToken()
Deletes the user's OpenShift access token.

**Returns:** Promise that resolves when the token is deleted

### logoutKubeAdmin()
Special logout flow for the kube:admin user.

### logoutMulticluster()
Logs the user out of all clusters in a multi-cluster setup.

### login(cluster)
Redirects the user to the login page.

**Parameters:**
- `cluster`: Optional cluster name for multi-cluster setups

## Local Storage Keys
- `userID`: Encoded user identifier
- `name`: User's display name
- `email`: User's email address
- `next`: URL to redirect after login
- `bridge/last-cluster`: Last accessed cluster in multi-cluster setups

## Dependencies
- `co-fetch.js`: Fetch utility for API calls
- `components/utils/link.js`: URL path utilities

## Implementation Notes
- Uses browser's local storage to persist user information
- Handles special logout flows for different user types (regular, kube:admin)
- Supports multi-cluster authentication
- Implements proper cleanup of credentials on logout
- Handles redirects to maintain the user's context after authentication
- The logout function is throttled (using `_.once()`) to avoid multiple logout calls
- Includes special handling for the unique kube:admin user, which requires a different logout flow
