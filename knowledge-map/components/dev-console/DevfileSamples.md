# Devfile Samples Integration

The Devfile Samples integration provides a system for fetching and presenting sample application templates from the Devfile Registry in the OpenShift Developer Console.

## Overview

The Devfile integration allows developers to quickly start new projects using pre-configured templates from the Devfile Registry. These templates provide ready-to-use application samples with development environment configurations for various programming languages and frameworks.

## Key Components

### Backend Components

#### GetRegistrySamples Function
Located in `/pkg/devfile/sample.go`, this function:
- Fetches sample applications from the Devfile Registry
- Supports both production (`registry.devfile.io`) and staging registries
- Includes telemetry identification for tracking console usage
- Returns registry index of available samples as JSON

```go
func GetRegistrySamples(registry string) ([]byte, error) {
    // Implementation details...
}
```

### Sample Application Types

The integration provides access to sample applications for various technologies:
- Node.js applications
- Java applications with Quarkus
- Java applications with Spring Boot
- Python applications
- Go applications
- .NET 6.0 applications

### Sample Metadata

Each sample includes rich metadata:
- Name and display name
- Description
- Tags for categorization
- Icon URLs for visual representation
- Project type and language
- Provider information
- Git repository information for the sample code

## Integration Points

The Devfile Samples integration connects with:
- **AddPage**: Samples appear in the catalog of options when creating new applications
- **ImportPage**: Used when importing code from the sample repositories
- **Topology View**: Visualizes deployed sample applications
- **Devfile Registry API**: External service providing the sample definitions
- **Git Repositories**: External source for the sample application code

## User Experience

From a user perspective, the integration enables:
1. **Catalog Browsing**: View available sample applications with descriptions and icons
2. **Quick Start**: Select a sample to quickly start a new project
3. **Guided Setup**: Use the sample's devfile for consistent development environment setup
4. **Pre-configured Settings**: Leverage pre-configured build and run settings for the technology stack
5. **Working Examples**: Get working code examples for specific frameworks or languages

## Implementation Details

### Registry Communication

The backend communicates with the Devfile Registry using:
- HTTP requests to fetch the registry index
- JSON parsing for the registry response
- Telemetry headers for usage tracking
- Error handling for invalid registries or network issues

### Sample Data Structure

Sample data follows the Devfile Registry's schema format:
```typescript
interface Schema {
    name: string;
    displayName: string;
    description: string;
    tags: string[];
    icon: string;
    type: string;
    projectType: string;
    language: string;
    provider: string;
    git: {
        remotes: {
            [key: string]: string;
        }
    };
}
```

## Related Components

- [AddPage](./AddPage.md): Integration point for offering samples during application creation
- [ImportPage](./ImportPage.md): Used when importing sample code repositories
- [TopologyView](../topology/TopologyView.md): Visualizes deployed sample applications
