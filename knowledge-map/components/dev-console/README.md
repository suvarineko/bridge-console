# Developer Console Components

The Developer Console is a key part of the OpenShift console that provides a developer-focused experience for working with applications, services, and other resources. It is designed to make development workflows easier and more intuitive.

## Key Developer Console Components

### [TopologyView](./TopologyView.md)
A visual representation of applications, their components, and their relationships.

### [AddPage](./AddPage.md)
Component for creating new applications and resources with various methods.

### [ImportPage](./ImportPage.md)
Component for importing applications from Git repositories or container images.

### [ProjectAccess](./ProjectAccess.md)
Manages access control for projects and resources.

### [Pipelines](./Pipelines.md)
Integration with OpenShift Pipelines (Tekton) for CI/CD workflows.

### [Monitoring](./Monitoring.md)
Developer-focused monitoring tools for applications.

### [ProjectOverview](./ProjectOverview.md)
Summary view of a project's resources and status.

### [DevfileSamples](./DevfileSamples.md)
Integration with Devfile Registry to provide sample application templates.

## Developer Console Architecture

The Developer Console is built as a perspective within the OpenShift console:

1. **Perspective Structure**: Organized as the Developer perspective
2. **Plugin Architecture**: Built on the console plugin framework
3. **Component Structure**: Modular components that can be composed
4. **Extension Points**: Provides extension points for plugins
5. **State Management**: Uses Redux for state management

## Feature Areas

### Application Lifecycle Management
- Application creation from templates, Dockerfiles, and Git
- Build configuration and management
- Deployment configuration and management
- Scaling and resource management

### Visualization
- Application topology visualization
- Resource relationship mapping
- Real-time updates of application status

### Integration
- Source-to-Image (S2I) integration
- CI/CD pipeline integration
- Serverless integration
- GitOps integration
- Devfile Registry integration for sample applications

### Monitoring and Debugging
- Application metrics and health
- Log viewing
- Resource utilization
- Event tracking

## Related Components

- [Navigation System](../navigation/README.md): Navigation for the Developer Console
- [Perspectives](../perspectives/README.md): Perspective system which hosts the Developer Console
- [Monitoring](../monitoring/README.md): Monitoring components used in the Developer Console
- [Topology](../topology/README.md): Detailed documentation of the Topology view
