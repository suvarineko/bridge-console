# Plugin Loader

The Plugin Loader is a core system component responsible for loading and initializing plugins during application startup. It handles the discovery, loading, and registration of both static and dynamic plugins.

## Overview

The Plugin Loader provides the infrastructure for:
- Loading built-in plugins at application startup
- Discovering and loading dynamic plugins at runtime
- Managing the plugin lifecycle
- Handling plugin dependencies and loading order

## Key Responsibilities

### Static Plugin Loading

For static plugins (built into the console):
- Loads plugin modules during application initialization
- Registers extensions with the plugin system
- Validates plugin compatibility
- Applies feature flag gating

### Dynamic Plugin Discovery

For dynamic plugins:
- Watches the Kubernetes API for ConsolePlugin resources
- Retrieves plugin manifests from service endpoints
- Validates plugin metadata and security requirements
- Manages the plugin loading process

### Plugin Initialization

During initialization, the Plugin Loader:
- Resolves plugin dependencies
- Loads required modules and assets
- Registers extensions with the PluginStore
- Notifies the application of plugin availability

### Error Handling

The loader includes robust error handling:
- Isolates plugin loading failures
- Prevents plugin errors from affecting the core application
- Logs detailed error information
- Provides feedback on plugin loading status

## Loading Process

The Plugin Loader follows this sequence:

1. **Application Startup**: Core application begins initialization
2. **Environment Setup**: Loading environment is prepared
3. **Static Loading**: Built-in plugins are loaded and registered
4. **API Discovery**: ConsolePlugin resources are retrieved
5. **Manifest Retrieval**: Plugin manifests are fetched
6. **Validation**: Plugin metadata and security are validated
7. **Module Loading**: Plugin modules are dynamically imported
8. **Registration**: Extensions are registered with the PluginStore
9. **Activation**: Plugins are activated based on configuration

## Plugin Sources

Plugins can be loaded from various sources:

- **Built-in Plugins**: Part of the console codebase
- **Cluster Plugins**: Deployed via operators in the cluster
- **Remote Plugins**: Loaded from external URLs
- **Development Plugins**: Local plugins during development

## Integration Points

The Plugin Loader integrates with:
- **Kubernetes API**: For discovering ConsolePlugin resources
- **PluginStore**: For registering plugin extensions
- **Feature Flags**: For conditional plugin activation
- **Webpack**: For dynamic module loading

## Related Components

- [PluginRegistry](./PluginRegistry.md): Handles plugin registration
- [PluginStore](./PluginStore.md): Manages plugin state
- [PluginSDK](./PluginSDK.md): API for plugin development
- [DynamicPluginSDK](./DynamicPluginSDK.md): Dynamic plugin capabilities
