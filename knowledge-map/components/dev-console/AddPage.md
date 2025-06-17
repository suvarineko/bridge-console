# AddPage Component

The AddPage component provides a unified interface for creating new applications and resources in the OpenShift Developer Console.

## Overview

The AddPage serves as a centralized starting point for developers to create various types of resources, applications, and components. It aggregates multiple creation methods into a single, intuitive interface that guides users through the appropriate workflow for their needs.

## Key Features

### Resource Creation Categories

The AddPage organizes creation options into logical categories:
- **Developer Catalog**: Templates, Helm Charts, Operator-backed services
- **Git Repository**: Import code from Git repositories
- **Container Images**: Deploy from existing container images
- **From Dockerfile**: Build and deploy from Dockerfiles
- **Database**: Deploy database services
- **Eventing**: Create event sources and other eventing resources
- **Serverless**: Deploy serverless applications
- **Pipelines**: Create CI/CD pipelines
- **Samples**: Start from sample applications from the Devfile Registry

### Card-Based UI

The interface uses a card-based design:
- Visual icons for each resource type
- Clear categorization of options
- Descriptive text for each option
- Consistent card layout and interaction
- Filtering and search capabilities

### Creation Flows

The AddPage initiates various creation workflows:
- **Form-based creation**: Guided forms with validation
- **YAML editing**: For advanced users
- **Import flows**: For existing code and images
- **Catalog selection**: For template-based creation
- **Wizard interfaces**: For complex resources
- **Sample selection**: For starting from pre-configured examples

### Discovery Mechanisms

The component includes:
- **Search functionality**: Find creation options quickly
- **Recently used**: Quick access to frequently used options
- **Recommended resources**: Suggested starting points
- **Categorization**: Logical grouping of related options
- **Tag-based filtering**: Find options by capability or technology
- **Language filtering**: Find samples by programming language

## Implementation Details

The AddPage is implemented as:
- A React component using PatternFly components
- A filterable, card-based catalog interface
- A router for different creation workflows
- An extensible system for plugins to add options
- A responsive design that works on various screen sizes

## Data Sources

The AddPage aggregates options from:
- Built-in resource types
- Template catalog
- Operator Hub
- Pipeline templates
- Helm Charts
- Custom resources from plugins
- Serverless functions catalog
- Devfile Registry samples (Node.js, Java, Python, Go, .NET, etc.)

## Integration Points

The component integrates with:
- **Developer Catalog**: For template and service options
- **Git Service**: For repository imports
- **Image Registry**: For container image options
- **Operator Framework**: For operator-backed services
- **Pipeline System**: For CI/CD options
- **Plugin Framework**: For extensibility
- **Devfile Registry**: For sample application templates

## Related Components

- [ImportPage](./ImportPage.md): Specialized import flows started from AddPage
- [TopologyView](./TopologyView.md): Where created resources appear
- [ProjectOverview](./ProjectOverview.md): Project context for resource creation
- [Pipelines](./Pipelines.md): Pipeline creation initiated from AddPage
- [DevfileSamples](./DevfileSamples.md): Integration providing sample applications
