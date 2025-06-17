# Perspectives Components

The OpenShift console uses perspectives to provide different views and workflows targeting specific user personas like developers, administrators, or operators. Each perspective presents a customized UI with features and navigation items relevant to its target audience.

## Key Perspectives Components

### [PerspectiveContext](./PerspectiveContext.md)
React context that provides perspective state throughout the application.

### [DetectPerspective](./DetectPerspective.md)
Component that manages the initialization and detection of the active perspective.

### [PerspectiveController](./PerspectiveController.md)
Main controller component that manages the active perspective and perspective switching.

### [PerspectiveSwitcher](./PerspectiveSwitcher.md)
UI component for switching between different perspectives.

### [PerspectiveWrapper](./PerspectiveWrapper.md)
Component that wraps a perspective's content and applies perspective-specific layouts and styles.

### [useActivePerspective](./useActivePerspective.md)
Hook for accessing and updating the active perspective state.

## Default Perspectives

The OpenShift console comes with several built-in perspectives:

### [Developer Perspective](./DeveloperPerspective.md)
Focused on application development workflows, including:
- Project visualization
- Application creation and deployment
- CI/CD pipelines
- Monitoring
- Topology view of applications

### [Administrator Perspective](./AdministratorPerspective.md)
Focused on cluster administration tasks, including:
- Cluster settings and configuration
- Workload management
- Storage management
- Network configuration
- User/role management

## Extension System

The perspectives system is built with an extension framework that allows plugins to contribute:

1. **New Perspectives**: Plugins can register entirely new perspectives
2. **Perspective Extensions**: Plugins can extend existing perspectives with new features
3. **Perspective Navigation**: Plugins can add navigation items to specific perspectives
4. **Perspective Context**: Components can access the active perspective context

## Data Flow

1. **Perspective Registration**: Perspectives are registered with the system
2. **Perspective Selection**: User selects a perspective from the switcher
3. **Context Update**: Active perspective context is updated
4. **UI Update**: UI components re-render based on the active perspective
5. **State Persistence**: Active perspective is stored in user preferences

## Related Components

- [Navigation System](../navigation/README.md): Navigation components affected by perspectives
- [Plugin System](../plugins/README.md): Extensibility system that can provide perspectives
- [User Preferences](../user-preferences/README.md): Storage of perspective preferences
