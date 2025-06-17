# Core Application Components

The Core Application components serve as the foundation of the OpenShift console. They provide the main application structure, layout, routing, and initialization processes that power the entire console experience.

## Key Core Components

### [ApplicationRoot](./ApplicationRoot.md)
The root component that bootstraps the entire application.

### [AppContents](./AppContents.md)
Main content renderer that handles routing and page display.

### [Masthead](./Masthead.md)
Header component with branding, user menu, and global actions.

### [Page](./Page.md)
Layout component that provides the overall page structure.

### [Router](./Router.md)
Handles URL routing and navigation throughout the application.

## Application Initialization Process

The core application initialization follows these steps:

1. **Server Setup**: Backend server starts and configures routes
2. **HTML Loading**: Initial HTML is loaded with core scripts
3. **JavaScript Initialization**: Main app.jsx is executed
4. **Redux Store Creation**: Global state store is initialized
5. **Plugin Loading**: Plugins are discovered and loaded
6. **API Discovery**: Available API resources are discovered
7. **React Rendering**: React application mounts to DOM
8. **Context Setup**: Context providers are initialized
9. **Route Setup**: Router and routes are established

## Core Application Architecture

The OpenShift console is built with a modular architecture:

1. **React Frontend**: Built with React and TypeScript
2. **Go Backend**: Provides API proxy and authentication
3. **Redux State**: Centralized state management
4. **Plugin System**: Extensibility framework
5. **PatternFly UI**: Consistent UI components and styling

## Global Features

The core application provides several global features:

1. **Internationalization**: Multi-language support
2. **Theming**: Light/dark theme support
3. **Telemetry**: Usage tracking and metrics
4. **Notifications**: Global notification system
5. **Modal Management**: Centralized modal handling
6. **Error Boundaries**: Application-wide error handling

## Lifecycle Events

The application handles several lifecycle events:

1. **Initialization**: Application startup and bootstrapping
2. **Authentication**: User login and session management
3. **Page Navigation**: Route changes and history management
4. **Console Updates**: Detecting and applying console updates
5. **Plugin Updates**: Managing plugin lifecycle events
6. **Error Handling**: Catching and reporting unhandled errors

## Related Components

- [Navigation System](../navigation/README.md): Navigation components integrated with the core
- [Perspective System](../perspectives/README.md): Perspective management
- [Plugin System](../plugins/README.md): Extensibility framework
- [Authentication](../auth/README.md): User authentication and session management
