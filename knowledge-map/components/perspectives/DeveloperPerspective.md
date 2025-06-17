# Developer Perspective

The Developer Perspective is a specialized view within the OpenShift Console tailored for application developers, providing streamlined workflows and tools for building, deploying, and monitoring applications.

## Overview

The Developer Perspective transforms the OpenShift Console into a developer-centric environment focused on application development lifecycles rather than cluster administration. It organizes features and workflows to match developer use cases, simplifying common tasks and providing visual tools for application management.

## Key Features

### Application-Centric Workflows

Developer-focused capabilities:
- Application creation from various sources
- Code repository integration
- Container image deployment
- Serverless application support
- Pipeline integration
- Topology visualization
- Project management
- Resource creation wizards

### Topology View

Visual application representation:
- Interactive application topology graph
- Relationship visualization
- Resource grouping
- Health status indicators
- Build status visualization
- Scaling controls
- Deployment status
- Drag and drop operations

### Project Management

Project-level organization:
- Project creation and management
- Project access control
- Project resource overview
- Project utilization metrics
- Resource quota visualization
- Project selection
- Default project settings
- Project search

### Development Tools

Developer productivity features:
- Source-to-Image (S2I) builders
- Code editing capabilities
- Pipeline creation and management
- Event source creation
- Link creation between services
- Debugging tools
- Container terminal access
- Application logs

## Implementation Details

The Developer Perspective is implemented using:
- Perspective extension system
- React component architecture
- PatternFly design components
- Redux for state management
- D3.js for topology visualization
- Plugin extension points
- Router integration for navigation
- Context-based state management

## Perspective Structure

The Developer Perspective includes these key sections:
- **Topology**: Visual application representation
- **Add**: Application creation workflows
- **Project**: Project management
- **Builds**: Build configuration and history
- **Pipelines**: CI/CD pipeline management
- **Monitoring**: Application performance and health
- **Search**: Resource discovery
- **Helm**: Helm chart deployment
- **Project Access**: Role-based access control

## Navigation Structure

Developer-specific navigation items:
- Topology (default landing page)
- +Add (resource creation)
- Builds
- Pipelines
- Deployments
- Serverless
- Monitoring
- Search
- Helm
- Project
- Project Access

## Integration Points

The Developer Perspective integrates with:
- **Kubernetes API**: For resource management
- **OpenShift Build System**: For building applications
- **CI/CD Systems**: For pipeline integration
- **Source Control**: For code repository access
- **Serverless Framework**: For serverless applications
- **Monitoring Stack**: For application metrics
- **Logging System**: For application logs
- **Plugin System**: For extension points

## Related Components

- [PerspectiveContext](./PerspectiveContext.md): Context for perspective state
- [PerspectiveSwitcher](./PerspectiveSwitcher.md): UI for switching perspectives
- [TopologyView](../topology/TopologyView.md): Application visualization
- [DevConsole](../dev-console/README.md): Developer console components
- [AdministratorPerspective](./AdministratorPerspective.md): Administrator perspective
