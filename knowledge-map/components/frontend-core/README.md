{
  `path`: `/projects/openshift-console-knowledge-map/components/frontend-core/README.md`,
  `content`: `# Frontend Core Components

The OpenShift console frontend is built using React and TypeScript, providing a modern web interface for cluster management. The core components form the foundation of the UI and handle common functionality across the application.

## Key Frontend Components

### [App](./App.md)
The root component that initializes the application and sets up routing.

### [Page Layout](./PageLayout.md)
Common layout components including the header, sidebar, and content areas.

### [ResourceList](./ResourceList.md)
Displays lists of Kubernetes resources with filtering and sorting.

### [ResourceDetails](./ResourceDetails.md)
Shows detailed information about individual resources.

### [Forms](./Forms.md)
Form components for creating and editing resources.

### [YAML Editor](./YAMLEditor.md)
Editor for working with YAML resource definitions.

## State Management

The frontend uses Redux for global state management, with several key stores:

- **k8sModel**: Stores information about available API resources
- **k8s**: Caches Kubernetes resources fetched from the API
- **UI**: Manages UI state like sidebar visibility
- **Auth**: Stores authentication state and user information

## UI Framework

The frontend uses PatternFly as its primary UI framework, providing:

- Consistent styling and UX patterns
- Accessible components
- Responsive design
- Data visualization components

## API Communication

API requests are handled through:

- **co-fetch.js**: Wrapper around fetch API with authentication
- **k8s models**: Type definitions for Kubernetes resources
- **k8s actions**: Redux actions for CRUD operations on resources

## Frontend Build System

The frontend is built using:

- **Webpack**: For bundling assets
- **TypeScript**: For type-safe JavaScript
- **SCSS**: For styling
- **Jest**: For unit testing
- **Cypress**: For integration testing

## Frontend Entry Point

The frontend application entry point is in `frontend/public/index.tsx`, which:

1. Sets up internationalization
2. Initializes Redux store
3. Loads plugins
4. Renders the root `App` component

## Related Components

The frontend core components interact with several other parts of the system:

- **[Plugin System](../plugins/README.md)**: For extending the UI
- **[Authentication](../auth/README.md)**: For user authentication in the UI
- **Backend API**: For fetching and updating cluster data
`
}