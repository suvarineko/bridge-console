# Authentication Flow

## Overview
This document describes the authentication flow in the OpenShift console, from initial login to authorized API access.

## Flow Steps

1. **User Accesses Console**
   - **Component:** Browser
   - **Action:** User navigates to console URL

2. **Authentication Check**
   - **Component:** `server.go`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Server checks for valid session
   - **Implementation:** Middleware checks for authentication cookie and validates session

3. **Redirect to Login**
   - **Component:** `Authenticator.LoginFunc`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth.go`
   - **Action:** Server redirects to OAuth login page
   - **Implementation:**
     ```go
     func (a *Authenticator) LoginFunc(w http.ResponseWriter, r *http.Request) {
       // Generate state parameter for CSRF protection
       state := hex.EncodeToString(randData[:])
       // Set state cookie for verification later
       cookie := http.Cookie{Name: stateCookieName, Value: state, ...}
       http.SetCookie(w, &cookie)
       // Redirect to OAuth provider
       http.Redirect(w, r, a.getOAuth2Config().AuthCodeURL(state), http.StatusSeeOther)
     }
     ```

4. **OAuth Provider Authentication**
   - **Component:** External OAuth server
   - **Path:** `/projects/Dropbox/_git/oauth-server`
   - **Action:** User authenticates with credentials
   - **Implementation:** Provider-specific login UI and validation

5. **OAuth Callback**
   - **Component:** `Authenticator.CallbackFunc`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth.go`
   - **Action:** OAuth provider redirects back with authorization code
   - **Implementation:** Verifies state parameter, exchanges code for token

6. **Token Exchange**
   - **Component:** `Authenticator.CallbackFunc`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth.go`
   - **Action:** Exchanges authorization code for access token
   - **Implementation:**
     ```go
     ctx := oidc.ClientContext(context.TODO(), a.clientFunc())
     oauthConfig, lm := a.authFunc()
     token, err := oauthConfig.Exchange(ctx, code)
     ```

7. **Session Creation**
   - **Component:** `loginMethod.login`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth_oidc.go` or `auth_openshift.go`
   - **Action:** Creates user session from token
   - **Implementation:** Extracts user info from token, creates session

8. **Cookie Setting**
   - **Component:** `loginMethod.login`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth_oidc.go` or `auth_openshift.go`
   - **Action:** Sets secure cookies for session
   - **Implementation:** Sets HTTP-only cookies with session information

9. **Redirect to Console**
   - **Component:** `Authenticator.CallbackFunc`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth.go`
   - **Action:** Redirects user to console UI
   - **Implementation:** Redirects to success URL or saved "next" URL

10. **Frontend Session Initialization**
    - **Component:** `App.tsx` (frontend entry point)
    - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/app.tsx`
    - **Action:** Loads user session data from local storage
    - **Implementation:** Initializes state from localStorage items

11. **API Authorization**
    - **Component:** `co-fetch.js`
    - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/co-fetch.js`
    - **Action:** Adds authorization header to API requests
    - **Implementation:** Session cookie is automatically sent with requests

## Error Handling

### Failed Authentication
- If authentication fails at the OAuth provider, user is redirected to error page with error details
- Error types include:
  - `login_state_error`: Missing or invalid state parameter
  - `cookie_error`: Issue with cookies
  - `invalid_code`: Authorization code verification failed

### Session Timeout
- If session expires during use, API requests will return 401 Unauthorized
- Frontend catches 401 errors and redirects to login

### Invalid Token
- If token is invalid or expired, server redirects to login page
- Token refresh is attempted automatically when possible

## Related Components
- [Authenticator](../components/auth/Authenticator.md): Backend authentication
- [AuthService](../components/auth/AuthService.md): Frontend authentication
- [SessionStore](../components/auth/SessionStore.md): Session management
- [LoginState](../components/auth/LoginState.md): User session data

## Security Considerations
- Uses HTTP-only cookies for sensitive session data
- Implements CSRF protection with state parameter
- Supports secure cookies for HTTPS
- Validates session expiration
- Implements proper token and session cleanup on logout
