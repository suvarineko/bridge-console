# ResourceModels Component

The ResourceModels component provides the TypeScript interfaces, data structures, and utilities for representing and interacting with Kubernetes resources in the OpenShift Console.

## Overview

ResourceModels defines the type system for Kubernetes resources, offering a strongly-typed interface for working with various resource kinds. It provides common structures, conversion utilities, and reference information to ensure consistent handling of Kubernetes resources throughout the application.

## Key Features

### Resource Type Definitions

Comprehensive TypeScript interfaces:
- Base Kubernetes resource interfaces
- Kind-specific resource interfaces
- Common property interfaces
- Status and condition types
- Metadata interfaces
- API group and version typing

### API Group Management

Structure for API groups and versions:
- Preferred API version resolution
- API group discovery
- Version migration utilities
- GroupVersionKind (GVK) management
- API reference mapping
- API version compatibility checking

### Reference System

Resource reference utilities:
- Reference generation from resources
- Reference parsing and validation
- Kind-to-reference mapping
- URL path generation from references
- Reference comparison utilities
- Reference normalization

### Model Registry

Registry of available resource kinds:
- Kind registration system
- Model discovery and lookup
- Custom resource model integration
- API group and version mapping
- Model metadata and capabilities
- Feature flag gating for models

## Implementation Details

The ResourceModels component is implemented as:
- TypeScript interfaces and type definitions
- Utility functions for resource operations
- Factory methods for creating resources
- Registration system for model discovery
- Integration with API schema information

## Type System

The model's type system follows Kubernetes conventions:
- **K8sResourceCommon**: Base interface for all resources
- **K8sResourceKind**: Generic resource with metadata
- Specific interfaces for known resource types
- Discriminated unions for type safety
- Type guards for runtime checking

```typescript
// Example of resource type definitions
export interface K8sResourceCommon {
  apiVersion: string;
  kind: string;
  metadata: ObjectMetadata;
}

export interface PodKind extends K8sResourceCommon {
  kind: 'Pod';
  spec: PodSpec;
  status?: PodStatus;
}
```

## Model Utilities

Common operations on resource models:
- Clone and deep copy of resources
- Comparison of resource versions
- Extract specific data from resources
- Convert between similar resources
- Generate default values for fields
- Validate resources against schemas

## Integration Points

The ResourceModels integrates with:
- **API Discovery**: For available resource kinds
- **Kubernetes API**: For validation against server
- **CRD System**: For custom resource definitions
- **Form Generation**: For schema-based forms
- **YAML Validation**: For schema validation
- **Resource Factory**: For creating specific components

## Related Components

- [ResourceFactory](./ResourceFactory.md): Creates components using models
- [ResourceList](./ResourceList.md): Displays resources using models
- [ResourceDetails](./ResourceDetails.md): Shows details using models
- [ResourceYAML](./ResourceYAML.md): Edits resources using schema info
