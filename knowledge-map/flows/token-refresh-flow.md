# Token Refresh Flow

## Overview
This document describes the token refresh flow in the OpenShift console, which keeps users authenticated without requiring them to log in again when their access tokens expire.

## Flow Steps

1. **Token Expiration Detection**
   - **Component:** Frontend API client (`co-fetch.js`)
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/co-fetch.js`
   - **Action:** Detects 401 Unauthorized response from API
   - **Implementation:** Catches HTTP 401 status code from API requests

2. **Token Refresh Request**
   - **Component:** Backend proxy endpoint
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Receives refresh token request from frontend
   - **Implementation:** HTTP endpoint that handles token refresh requests

3. **OAuth Refresh Token Exchange**
   - **Component:** `auth_oidc.go` or `auth_openshift.go`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth_oidc.go`
   - **Action:** Uses refresh token to get new access token
   - **Implementation:**
     ```go
     oauth2Config.TokenSource(ctx, &oauth2.Token{
       RefreshToken: refreshToken,
       Expiry:       time.Now().Add(-time.Hour),
     }).Token()
     ```

4. **Session Update**
   - **Component:** `loginMethod.login`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth_oidc.go` or `auth_openshift.go`
   - **Action:** Updates session with new token data
   - **Implementation:** Updates session store with new token information

5. **Cookie Refresh**
   - **Component:** `loginMethod.login`
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/auth/auth_oidc.go` or `auth_openshift.go`
   - **Action:** Updates cookies with new session data
   - **Implementation:** Sets new cookie values for updated session

6. **Response to Frontend**
   - **Component:** Token refresh endpoint
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Returns success response to frontend
   - **Implementation:** Returns 200 OK status with new expiration time

7. **Frontend Session Update**
   - **Component:** Authentication service
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Updates local session data
   - **Implementation:** Updates local storage with new expiration time

8. **API Request Retry**
   - **Component:** Frontend API client (`co-fetch.js`)
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/co-fetch.js`
   - **Action:** Retries the original failed request
   - **Implementation:** Automatic retry of the request that triggered the refresh

## Automatic Refresh Before Expiration

The system also implements proactive token refresh before expiration:

1. **Expiration Monitoring**
   - **Component:** Frontend application
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/app.tsx`
   - **Action:** Monitors token expiration time
   - **Implementation:** Calculates time until expiration and schedules refresh

2. **Pre-emptive Refresh**
   - **Component:** Authentication service
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/auth.js`
   - **Action:** Initiates refresh before token expires
   - **Implementation:** Triggers refresh when token is close to expiration (typically 5 minutes before)

## Error Handling

### Refresh Token Expired
- If the refresh token is expired or invalid, user is redirected to login page
- Implementation:
  ```javascript
  if (refreshError) {
    authSvc.logout();
    return;
  }
  ```

### Network Errors
- If network errors occur during refresh, retry with exponential backoff
- After maximum retries, user is prompted to log in again

### Server Errors
- If server returns errors during token refresh, session is cleared and user is logged out

## Security Considerations
- Refresh tokens are never stored in browser local storage
- HTTP-only cookies are used for sensitive token data
- Automatic logout on persistent refresh failures
- Token refresh uses secure communication channel
