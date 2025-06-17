# API Request Flow

## Overview
This document describes how API requests flow through the OpenShift console, from frontend components to the Kubernetes API server and back. It covers both REST API requests and GraphQL queries.

## REST API Flow Steps

1. **Frontend Component Initiates Request**
   - **Component:** React component or Redux action
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/`
   - **Action:** Component needs to fetch or update data
   - **Implementation:** Uses k8s API utility or direct fetch

2. **k8s Redux Action Dispatched**
   - **Component:** k8s Redux module
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/k8s/k8s-actions.ts`
   - **Action:** Dispatches action to fetch resource
   - **Implementation:**
     ```typescript
     export const watchK8sObject = <R extends K8sResourceKind>(
       id: string,
       name: string,
       namespace: string,
       query: { [key: string]: string } = {},
       k8sType: K8sResourceKindReference,
       options: Options = {},
     ) => ...
     ```

3. **API Request Created**
   - **Component:** k8s API utilities
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/k8s/resource.ts`
   - **Action:** Builds API request URL and parameters
   - **Implementation:** Constructs proper URL for resource type

4. **co-fetch Makes HTTP Request**
   - **Component:** co-fetch utility
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/co-fetch.js`
   - **Action:** Sends HTTP request with authentication
   - **Implementation:**
     ```javascript
     export const coFetch = (url, options = {}, timeout = 60000) => {
       // Add auth headers and makes fetch request
     }
     ```

5. **Request Reaches Backend Server**
   - **Component:** Server HTTP handler
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Receives API request from frontend
   - **Implementation:** Processes request through middleware

6. **Authentication Check**
   - **Component:** Authentication middleware
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/middleware.go`
   - **Action:** Verifies user is authenticated
   - **Implementation:** Checks session cookie and validates

7. **API Proxy Forwards Request**
   - **Component:** API Proxy
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/proxy/proxy.go`
   - **Action:** Forwards request to Kubernetes API server
   - **Implementation:** Modifies request as needed and forwards

8. **Kubernetes API Server Processes Request**
   - **Component:** External Kubernetes API
   - **Action:** Processes the API request
   - **Implementation:** CRUD operation on requested resource

9. **Response Returns Through Proxy**
   - **Component:** API Proxy
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/proxy/proxy.go`
   - **Action:** Receives and forwards API response
   - **Implementation:** Passes response back to client

10. **Backend Server Returns Response**
    - **Component:** Server HTTP handler
    - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
    - **Action:** Sends response to frontend
    - **Implementation:** Writes HTTP response with data

11. **co-fetch Processes Response**
    - **Component:** co-fetch utility
    - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/co-fetch.js`
    - **Action:** Handles response and error cases
    - **Implementation:** Parses JSON, handles errors, returns data

12. **Redux Action Completed**
    - **Component:** k8s Redux module
    - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/k8s/k8s-actions.ts`
    - **Action:** Dispatches success action with data
    - **Implementation:** Updates store with received data

13. **Component Receives Data**
    - **Component:** React component
    - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/`
    - **Action:** Receives data from Redux store
    - **Implementation:** Component re-renders with new data

## GraphQL API Flow Steps

1. **Frontend Component Initiates GraphQL Query**
   - **Component:** React component using GraphQL
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/`
   - **Action:** Component needs to fetch specific data or check permissions
   - **Implementation:** Uses GraphQL client to construct query

2. **GraphQL Query Created**
   - **Component:** GraphQL client
   - **Path:** Frontend GraphQL utilities
   - **Action:** Builds GraphQL query document
   - **Implementation:** Constructs query with fields and variables

3. **GraphQL Request Sent**
   - **Component:** GraphQL client
   - **Action:** Sends HTTP request to GraphQL endpoint
   - **Implementation:** POST request with query in body or WebSocket connection

4. **Request Reaches Backend Server**
   - **Component:** Server HTTP/WebSocket handler
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Receives GraphQL request
   - **Implementation:** Routes to GraphQL handler

5. **Authentication Check**
   - **Component:** Authentication middleware
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/middleware.go`
   - **Action:** Verifies user is authenticated
   - **Implementation:** Checks session cookie and validates

6. **GraphQL Server Processes Query**
   - **Component:** GraphQL Server
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/graphql/`
   - **Action:** Parses and validates the GraphQL query
   - **Implementation:** Executes query with resolvers

7. **Query Resolvers Execute**
   - **Component:** GraphQL Resolvers
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/graphql/resolver/`
   - **Action:** Executes resolver functions for requested fields
   - **Implementation:**
     ```go
     func (r *K8sResolver) SelfSubjectAccessReview(ctx context.Context, args SSARArgs) (*auth.SelfSubjectAccessReview, error) {
       // Implementation details...
     }
     ```

8. **Resolver Interacts with Kubernetes API**
   - **Component:** K8sResolver
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/graphql/resolver/k8s.go`
   - **Action:** Makes requests to Kubernetes API
   - **Implementation:** Uses K8sProxy to interact with API

9. **Response Data Collected**
   - **Component:** GraphQL Server
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/graphql/`
   - **Action:** Assembles response data from resolver results
   - **Implementation:** Builds JSON response according to query shape

10. **GraphQL Response Returned**
    - **Component:** GraphQL HTTP/WebSocket handler
    - **Action:** Returns response to client
    - **Implementation:** JSON response with data and errors fields

11. **GraphQL Client Processes Response**
    - **Component:** GraphQL client
    - **Action:** Processes GraphQL response
    - **Implementation:** Extracts data, handles errors

12. **Component Receives Data**
    - **Component:** React component
    - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/`
    - **Action:** Receives data from GraphQL client
    - **Implementation:** Component re-renders with new data

## WebSocket Communication

For both REST API watch requests and GraphQL subscriptions:

### REST API WebSockets

1. **k8s Watch Request Initiated**
   - **Component:** k8s Redux module
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/k8s/k8s-actions.ts`
   - **Action:** Sets up watch on resource type
   - **Implementation:** Creates a WebSocket connection

2. **WebSocket Connection Established**
   - **Component:** WebSocket utility
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/module/ws-factory.js`
   - **Action:** Creates and manages WebSocket connection
   - **Implementation:** Handles connection lifecycle and messages

3. **Server WebSocket Handler**
   - **Component:** WebSocket handler
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/server/server.go`
   - **Action:** Sets up proxy WebSocket connection
   - **Implementation:** Forwards WebSocket to Kubernetes API

4. **Real-time Updates**
   - **Action:** WebSocket receives resource changes
   - **Implementation:** Updates dispatched to Redux store in real-time

### GraphQL Subscriptions

1. **GraphQL Subscription Initiated**
   - **Component:** GraphQL client
   - **Action:** Initializes subscription
   - **Implementation:** Opens WebSocket connection to GraphQL endpoint

2. **GraphQL WebSocket Connection**
   - **Component:** GraphQL WebSocket handler
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/graphql/`
   - **Action:** Establishes subscription connection
   - **Implementation:** Sets up WebSocket for GraphQL Transport protocol

3. **Subscription Processing**
   - **Component:** GraphQL subscription resolver
   - **Path:** `/projects/Dropbox/_git/web-console/pkg/graphql/resolver/`
   - **Action:** Processes subscription events
   - **Implementation:** Sends events over WebSocket when data changes

4. **Real-time Updates**
   - **Action:** Client receives subscription events
   - **Implementation:** Updates component with real-time data

## Error Handling

### Network Errors
- Connection errors are caught and reported to user
- Retries implemented for transient failures
- Error notifications displayed for persistent failures

### Authentication Errors
- 401 errors trigger token refresh flow
- After refresh failure, user is redirected to login

### API Errors
- Error responses from Kubernetes API are parsed and displayed
- Error details shown based on status code and message
- Permission errors show appropriate RBAC information

### GraphQL Errors
- GraphQL errors returned in the "errors" field of the response
- Structured error handling with error codes and messages
- Client code can distinguish between different error types

## Performance Considerations
- REST API requests are cached in Redux store to avoid duplicates
- List/watch pattern used for efficient updates
- GraphQL requests optimize payload size by requesting only needed fields
- Request throttling for high-volume operations
- Batching of multiple operations in single GraphQL request

## Related Components
- [co-fetch](../components/frontend-core/co-fetch.md): HTTP request utility
- [k8s-actions](../components/frontend-core/k8s-actions.md): Redux actions for API
- [API Proxy](../components/server/Proxy.md): Backend proxy to Kubernetes
- [GraphQL Server](../components/server/GraphQLServer.md): GraphQL API functionality
