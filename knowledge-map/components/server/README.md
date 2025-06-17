# Server Components

The OpenShift console server components handle HTTP requests, API proxying, authentication, and serving the frontend application. These components are written in Go and run in the backend of the console.

## Key Server Components

### [Server](./Server.md)
The main HTTP server that handles requests to the console.

### [Middleware](./Middleware.md)
HTTP middleware for request processing, authentication, and logging.

### [Proxy](./Proxy.md)
Proxies API requests to the Kubernetes API server.

### [GraphQLServer](./GraphQLServer.md)
Provides a GraphQL API interface for querying Kubernetes resources.

### [ResourceLister](./ResourceLister.md)
Lists available API resources for the frontend.

### [CertificateManager](./CertificateManager.md)
Manages TLS certificates for secure communication.

## Server Configuration

The server is configured through environment variables and command-line flags. Key configuration options include:

- **Listen Address**: Where the server listens for connections
- **Base Path**: Base URL path for all console routes
- **TLS Configuration**: Certificate and key paths for HTTPS
- **API Server URL**: Kubernetes API server location
- **Authentication Settings**: OAuth provider configuration
- **GraphQL Endpoint**: Path for the GraphQL API

## Request Flow

When a request comes to the console server, it follows this general flow:

1. HTTP request received by the server
2. Request processed by middleware chain
3. Authentication check performed
4. Request routed to appropriate handler:
   - Static assets served directly
   - API requests proxied to Kubernetes API
   - GraphQL requests handled by the GraphQL server
   - Frontend app served for other paths
5. Response returned to client

## Starting the Server

The server is started from the main function in `cmd/bridge/main.go`, which:

1. Parses command-line flags
2. Sets up signal handling
3. Initializes authentication
4. Creates and configures the server
5. Starts the server listening for requests

## Related Components

The server components interact with several other parts of the system:

- **[Authentication Components](../auth/README.md)**: For user authentication
- **Kubernetes API**: For proxying requests to the cluster
- **Frontend Application**: Served to clients by the server

## Server Endpoints

The server provides several key endpoints:

- **/** - Serves the frontend application
- **/api/** - Proxies requests to the Kubernetes API
- **/auth/** - Handles authentication flows
- **/oauth/callback** - OAuth callback endpoint
- **/logout** - Handles user logout
- **/graphql** - GraphQL API endpoint for efficient querying
