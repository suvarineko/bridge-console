# User Logout Flow

## Overview
This document describes the user logout flow in the OpenShift console, which securely terminates user sessions and cleans up authentication tokens.

## Standard Logout Flow

1. **Logout Initiation**
   - **Component:** Frontend UI (typically header or user dropdown)
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/masthead.tsx`
   - **Action:** User clicks logout button
   - **Implementation:** Calls `authSvc.logout()` or specialized logout functions

2. **Frontend Session Cleanup**
   - **Component:** AuthService
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Clears local session data
   - **Implementation:** 
     ```javascript
     clearLocalStorage(clearLocalStorageKeys);
     ```

3. **Logout API Request**
   - **Component:** AuthService
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Sends POST request to logout endpoint
   - **Implementation:** 
     ```javascript
     coFetch(window.SERVER_FLAGS.logoutURL, { method: 'POST' })
     ```

4. **Backend Session Termination**
   - **Component:** Authenticator.LogoutFunc
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth.go`
   - **Action:** Clears server-side session
   - **Implementation:** Calls the login method's logout function

5. **Cookie Cleanup**
   - **Component:** loginMethod.logout
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth_oidc.go` or `auth_openshift.go`
   - **Action:** Removes authentication cookies
   - **Implementation:** Sets expired cookies with same name, path, and domain

6. **Redirect to Login**
   - **Component:** AuthService
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Redirects user to login page
   - **Implementation:** Calls `authSvc.login()` or redirects to configured URL

## OpenShift-Specific Logout Flow

For OpenShift authentication, additional steps are taken:

1. **Token Deletion Request**
   - **Component:** AuthService.logoutOpenShift
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Sends request to delete OpenShift token
   - **Implementation:** 
     ```javascript
     authSvc.deleteOpenShiftToken().then(() => {
       if (isKubeAdmin) {
         authSvc.logoutKubeAdmin();
       } else {
         authSvc.logout();
       }
     });
     ```

2. **Token Deletion**
   - **Component:** Backend token deletion endpoint
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Deletes token from OAuth server
   - **Implementation:** Makes request to OAuth server to invalidate token

## Special kube:admin Logout Flow

The `kube:admin` user requires special handling:

1. **Console Session Termination**
   - **Component:** AuthService.logoutKubeAdmin
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Clears local storage and sends logout request
   - **Implementation:** Same as standard logout

2. **OAuth Server Session Termination**
   - **Component:** AuthService.logoutKubeAdmin
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Posts to kube:admin specific logout endpoint
   - **Implementation:** Creates and submits a form to the kube:admin logout URL

3. **Redirect Back to Console**
   - **Component:** OAuth server
   - **Path:** `/projects/Dropbox/_git/oauth-server`
   - **Action:** Redirects back to console after logout
   - **Implementation:** Uses `then` parameter in the form submission

## Multi-Cluster Logout Flow

For multi-cluster environments:

1. **Multi-Cluster Cleanup**
   - **Component:** AuthService.logoutMulticluster
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Clears local storage including cluster preference
   - **Implementation:** 
     ```javascript
     clearLocalStorage([...clearLocalStorageKeys, lastClusterKey]);
     ```

2. **Redirect to Multi-Cluster Logout Page**
   - **Component:** AuthService.logoutMulticluster
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Redirects to multi-cluster logout page
   - **Implementation:** 
     ```javascript
     window.location = window.SERVER_FLAGS.multiclusterLogoutRedirect;
     ```

## Error Handling

- Logout operations continue even if token deletion fails
- Errors during logout are logged but don't block the user interface
- Local storage is always cleared regardless of server-side errors

## Security Considerations

- Ensures both client and server-side session data is cleared
- Properly handles token invalidation to prevent token reuse
- Special handling for different user types ensures proper cleanup
- Multi-step process ensures all authentication artifacts are removed
