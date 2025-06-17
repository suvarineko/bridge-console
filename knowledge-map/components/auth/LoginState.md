# LoginState

**Path:** `/projects/Dropbox/_git/web-console/pkg/auth/loginstate.go`

## Purpose
Represents the current login state of a user in the OpenShift console. It stores user information and session expiration details.

## Data Structure

```go
type loginState struct {
    UserID       string    // User identifier
    Name         string    // User's full name
    Email        string    // User's email address
    exp          time.Time // Token expiration time
    now          nowFunc   // Function to get current time
    sessionToken string    // Server-side session token
    rawToken     string    // Raw OAuth token
}
```

## Interfaces

### newLoginState(rawToken string, claims []byte) (*loginState, error)
Creates a new login state from an OAuth token and its claims.

**Parameters:**
- `rawToken`: Raw OAuth token string
- `claims`: JSON byte array containing token claims

**Returns:** New login state and potential error

### toLoginJSON() LoginJSON
Converts the login state to a JSON-serializable object for frontend use.

**Returns:** LoginJSON object with user information

## JSON Structure for Frontend

The `LoginJSON` struct defines the format sent to the frontend:

```go
type LoginJSON struct {
    UserID string `json:"userID"`
    Name   string `json:"name"`
    Email  string `json:"email"`
    Exp    int64  `json:"exp"`
}
```

## Dependencies
- `time`: For handling token expiration
- `json`: For serialization/deserialization of token claims

## Implementation Notes
- Only stores non-sensitive information in the login state
- Extracts user details from OAuth token claims
- Standard claims parsed include:
  - `sub`: Subject (user ID)
  - `exp`: Expiration time
  - `email`: User's email address
  - `name`: User's display name
- Does not store the raw token in any client-side cookies
- The expiration time is used to determine when to refresh tokens
