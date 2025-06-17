# GraphQL Server Component

The GraphQL Server component provides a GraphQL API interface for accessing and interacting with OpenShift and Kubernetes resources through a schema-based query language.

## Overview

The GraphQL Server implements a focused subset of the OpenShift API functionality through a GraphQL interface, allowing the frontend to efficiently query specific data and check permissions. It serves as a complement to the traditional REST API proxy, offering advantages in query flexibility, request optimization, and type safety for specific use cases.

## Key Features

### GraphQL Schema

The schema defines the API capabilities:
- **Queries**: Structured data retrieval operations
  - `fetchURL`: Proxy data fetching from a specified URL
  - `selfSubjectAccessReview`: Permission checking for current user
- **Subscriptions**: Real-time data updates (WebSocket-based)
  - `fetchURL`: For streaming URL content updates

### Query Resolvers

Implementation of the schema operations:
- **K8sResolver**: Handles Kubernetes API interactions
  - Permission checking through SelfSubjectAccessReview
  - Proxied data fetching via URL
  - Error handling and status code processing
- **Context Management**: Preserves authentication and headers
- **Impersonation Support**: Allows acting on behalf of other users

### Technical Foundation

Technology stack and implementation:
- **GraphQL Library**: graph-gophers/graphql-go for schema parsing and execution
- **WebSocket Transport**: graph-gophers/graphql-transport-ws for real-time communication
- **Kubernetes Integration**: Direct connection to OpenShift API
- **Proxy Utilization**: Leverages existing proxy infrastructure
- **Context Propagation**: Preserves authentication context

## Implementation Details

### Schema Definition

The GraphQL schema (`schema.graphql`) defines available operations:

```graphql
type SelfSubjectAccessReviewStatus {
    allowed: Boolean!
}

type SelfSubjectAccessReview {
    status: SelfSubjectAccessReviewStatus!
}

type Query {
    fetchURL(url: String!): String
    selfSubjectAccessReview(group: String, resource: String, verb: String, namespace: String): SelfSubjectAccessReview
}

type Subscription {
    fetchURL(url: String!): String
}
```

### Resolver Implementation

The resolver structure provides request handling:

```go
// Root resolver orchestrates other resolvers
type RootResolver struct {
    *K8sResolver
}

// K8sResolver handles Kubernetes API operations
type K8sResolver struct {
    K8sProxy *proxy.Proxy
}

// FetchURL retrieves data from specified URL
func (r *K8sResolver) FetchURL(ctx context.Context, args struct{ URL string }) (*string, error) {
    // Implementation details...
}

// SelfSubjectAccessReview checks user permissions
func (r *K8sResolver) SelfSubjectAccessReview(ctx context.Context, args SSARArgs) (*auth.SelfSubjectAccessReview, error) {
    // Implementation details...
}
```

### Authentication and Context

Header and context management ensure proper authentication:

```go
// Transfers context headers to HTTP request
func contextToHeaders(ctx context.Context, request *http.Request) {
    // Implementation details...
}

// Processes impersonation details from payload
func InitPayload(ctx context.Context, payload json.RawMessage) context.Context {
    // Implementation details...
}
```

## Use Cases

### Efficient Permission Checking

The GraphQL server streamlines permission verification:
- Check if a user can perform specific actions on resources
- Efficiently batch multiple permission checks in one request
- Provide typed and structured permission responses
- Enable UI elements to conditionally render based on permissions

### Optimized Data Fetching

Benefits over traditional REST requests:
- Request only necessary fields, reducing payload size
- Combine multiple data needs in a single request
- Strong typing of request and response data
- Consistent error handling format

### WebSocket-Based Subscriptions

Real-time data capabilities:
- Stream updates for changing resources
- Maintain persistent connections for live data
- Reduce polling overhead
- Enable reactive UI updates

## Integration Points

The GraphQL server integrates with:
- **Frontend Client**: GraphQL queries from React components
- **Authentication System**: User context and permissions
- **Kubernetes API**: Backend resource access
- **Proxy Component**: Reuses proxy infrastructure
- **Server Component**: Hosted within the main HTTP server
- **Error Handling**: Standardized error responses

## Related Components

- [Server](./Server.md): Hosts the GraphQL endpoint
- [Proxy](./Proxy.md): Underlying proxy functionality used by GraphQL resolvers
- [Middleware](./Middleware.md): Request processing pipeline
- [Authentication Components](../auth/README.md): Authentication integration
