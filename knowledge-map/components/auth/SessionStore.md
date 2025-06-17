# SessionStore

**Path:** `/projects/Dropbox/_git/web-console/pkg/auth/session.go`

## Purpose
The SessionStore manages user sessions for the OpenShift console, handling storage, retrieval, and cleanup of session data.

## Interfaces

### NewSessionStore(maxSessions int) *SessionStore
Creates a new session store with a maximum number of sessions.

**Parameters:**
- `maxSessions`: Maximum number of sessions to store

**Returns:** New SessionStore instance

### addSession(ls *loginState) error
Adds a new session to the store with a randomly generated token.

**Parameters:**
- `ls`: Login state to associate with the session

**Returns:** Error if session could not be added

### getSession(token string) *loginState
Retrieves a session by its token.

**Parameters:**
- `token`: Session token

**Returns:** Associated login state, or nil if not found

### deleteSession(token string) error
Removes a session from the store.

**Parameters:**
- `token`: Session token to delete

**Returns:** Error if session could not be deleted

### pruneSessions()
Removes expired sessions and enforces the maximum session limit.

## Data Structures

### SessionStore
```go
type SessionStore struct {
    byToken     map[string]*loginState  // Maps tokens to login states
    byAge       []oldSession            // Sessions ordered by age for pruning
    maxSessions int                     // Maximum number of sessions to keep
    now         nowFunc                 // Function to get current time
    mux         sync.Mutex              // Mutex for thread safety
}
```

### oldSession
```go
type oldSession struct {
    token string    // Session token
    exp   time.Time // Expiration time
}
```

## Dependencies
- `loginState`: Represents user session data
- `time`: For handling session expiration
- `sync`: For thread-safe operations

## Implementation Notes
- Uses in-memory storage for sessions
- Sessions are tracked both by token (for lookups) and by age (for pruning)
- Thread-safe implementation with mutex locking
- Prunes sessions when they expire or when the maximum session limit is reached
- Oldest sessions are removed first when the limit is reached
- Sessions are identified by a 128-character random string
