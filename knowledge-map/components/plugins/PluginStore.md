# PluginStore

The PluginStore is a central registry that maintains the state of all plugins within the OpenShift Console. It manages both static and dynamic plugins and their contributed extensions.

## Overview

PluginStore serves as the single source of truth for plugin data throughout the console application. It:
- Tracks all available static and dynamic plugins
- Maintains the state of enabled and disabled plugins
- Provides access to plugin extensions for use by the application
- Notifies listeners when plugin state changes

## Key Responsibilities

### Plugin Management

The PluginStore manages two main types of plugins:
- **Static Plugins**: Built into the console at compile time
- **Dynamic Plugins**: Loaded at runtime from external sources

For each plugin, it tracks:
- Plugin metadata (name, version, etc.)
- Extensions contributed by the plugin
- Enabled/disabled status
- Loading status (for dynamic plugins)

### Extension Tracking

PluginStore:
- Stores all extensions from registered plugins
- Determines which extensions are currently in use
- Filters extensions based on feature flags
- Provides access to active extensions

### Runtime Plugin Control

For dynamic plugins, PluginStore enables:
- Adding plugins at runtime
- Enabling/disabling plugins
- Tracking plugin loading status
- Managing plugin dependencies

## Key Methods

The PluginStore exposes several important methods:

- `getExtensionsInUse()`: Returns all extensions currently active in the system
- `addDynamicPlugin(pluginID, manifest, resolvedExtensions)`: Registers a new dynamic plugin
- `setDynamicPluginEnabled(pluginID, enabled)`: Enables or disables a dynamic plugin
- `getDynamicPluginInfo()`: Returns detailed information about all dynamic plugins
- `subscribe(listener)`: Registers a listener for plugin state changes

## Plugin Lifecycle States

Dynamic plugins can exist in several states:
- **Pending**: Plugin is allowed but not yet loaded
- **Loaded**: Plugin has been successfully loaded
- **Failed**: Plugin failed to load properly
- **Enabled/Disabled**: Whether a loaded plugin is currently active

## Integration with Console

The PluginStore integrates with:
- **Redux Store**: To track feature flags for extension filtering
- **Plugin Loader**: To register plugins at runtime
- **Extension System**: To provide extensions to components

## Related Components

- [PluginRegistry](./PluginRegistry.md): Manages plugin registration
- [PluginLoader](./PluginLoader.md): Loads dynamic plugins
- [DynamicPluginSDK](./DynamicPluginSDK.md): SDK for dynamic plugin development
