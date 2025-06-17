# ImportPage Component

The ImportPage component provides specialized workflows for importing existing code and container images into the OpenShift Developer Console.

## Overview

ImportPage guides users through the process of bringing external resources into their OpenShift projects, focusing primarily on importing from Git repositories and container image registries. It offers intelligent defaults while providing the flexibility to customize the deployment configuration.

## Key Features

### Git Import Workflow

Comprehensive Git import capabilities:
- Support for various Git providers (GitHub, GitLab, Bitbucket, etc.)
- Repository URL detection and validation
- Branch and context directory selection
- Automatic language and framework detection
- Build strategy recommendation (Source-to-Image, Dockerfile, etc.)
- Pipeline integration options
- Resource customization

### Container Image Import

Streamlined container image deployment:
- Support for multiple registry types
- Image stream and external registry options
- Tag selection and validation
- Secure registry authentication
- Resource naming and labeling
- Deployment configuration options
- Scaling and resource limit settings

### Builder Detection

Intelligent detection of application types:
- Language and framework identification
- Dockerfile detection
- BuildConfig generation
- Appropriate builder image selection
- Port detection for services
- Environment variable recommendations

### Resource Creation

Creates multiple related resources:
- Deployment or DeploymentConfig
- BuildConfig for source builds
- Services for network exposure
- Routes for external access
- ImageStreams for image management
- ConfigMaps for configuration
- Secret management for credentials

## Implementation Details

ImportPage is implemented as:
- A multi-step wizard interface
- Form-based configuration with validation
- A responsive design for various screen sizes
- An extensible framework for custom import types
- Integration with source analysis services

## Advanced Options

Provides additional configuration options:
- Resource limits and requests
- Health checks (liveness and readiness probes)
- Scaling configuration
- Deployment strategies
- Environment variables
- Volume mounts
- Label and annotation management

## Validation and Assistance

Offers various user assistance features:
- Real-time validation of inputs
- Contextual help and documentation
- Preview of created resources
- Warnings for potential issues
- Recommendations for optimal configuration
- Builder compatibility information

## Integration Points

The component integrates with:
- **Source-to-Image**: For language-specific builders
- **Git Service**: For repository access and metadata
- **Image Registry**: For container image validation
- **BuildConfig System**: For build configuration
- **Service Binding**: For connecting to backend services
- **Pipeline Integration**: For CI/CD setup

## Related Components

- [AddPage](./AddPage.md): Entry point that leads to ImportPage
- [TopologyView](./TopologyView.md): Where imported applications appear
- [Pipelines](./Pipelines.md): CI/CD integration with imports
- [ProjectOverview](./ProjectOverview.md): Project context for imports
