# Plugin SDK

The Plugin SDK provides a framework and toolset for developing extensions to the OpenShift Console. It defines the extension points available for plugins and provides utilities for developing and packaging plugins.

## Overview

The Console Plugin SDK is the primary toolset for plugin developers. It:
- Defines the extension point interfaces
- Provides utility functions for plugin development
- Includes build tools and TypeScript definitions
- Establishes patterns for plugin creation

## Extension Points

The SDK defines numerous extension points that plugins can implement:

### UI Extension Points
- **Perspective**: Define a new UI perspective
- **Navigation Section**: Add sections to navigation
- **Navigation Item**: Add items to navigation
- **Dashboard Card**: Add cards to dashboards
- **Resource Action**: Add actions to resource pages
- **Resource List View**: Customize resource lists
- **Resource Detail Page**: Customize detail pages
- **YAML Editor**: Enhance YAML editing

### API Extension Points
- **API Discovery**: Register API information
- **API Client**: Extend API client capabilities
- **Feature Flag**: Define and provide feature flags

## Core Components

The Plugin SDK includes several key components:

### Extension Registry
- Type-safe registry for extensions
- Extension declaration and validation
- Extension flag gating

### Build Utilities
- Webpack configuration helpers
- Plugin bundling utilities
- Development server integration

### Type Definitions
- TypeScript definitions for extension points
- React component typing
- API interface definitions

## Plugin Development Workflow

The typical workflow using the SDK:

1. **Setup**: Initialize a plugin project
2. **Extension Development**: Implement extensions using SDK interfaces
3. **Build**: Bundle the plugin using SDK build tools
4. **Testing**: Test the plugin with the console
5. **Deployment**: Package and deploy the plugin

## Console Integration

Plugins integrate with the console through:
- **Extension Manifests**: JSON describing plugin capabilities
- **Extension Components**: React components implementing functionality
- **Feature Flags**: Conditional enablement of features
- **API Integration**: Accessing console APIs

## Code Examples

### Extension Declaration
```typescript
import { Plugin } from '@console/plugin-sdk';

const plugin: Plugin<ConsoleSomethingExtension> = [
  {
    type: 'console.something',
    properties: {
      // Extension properties
    },
  },
];
```

### Extension Registration
```typescript
import { PluginRegistry } from '@console/plugin-sdk';

const registry = new PluginRegistry([myPlugin]);
```

## Related Components

- [PluginRegistry](./PluginRegistry.md): Registration of plugins
- [PluginStore](./PluginStore.md): Runtime plugin state management
- [DynamicPluginSDK](./DynamicPluginSDK.md): Dynamic plugin capabilities
- [PluginLoader](./PluginLoader.md): Plugin loading system
