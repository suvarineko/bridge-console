# Dynamic Plugin SDK

The Dynamic Plugin SDK extends the core Plugin SDK to support dynamic loading of plugins at runtime. It provides the foundation for creating, loading, and managing plugins that can be added to the console without rebuilding the application.

## Overview

The Dynamic Plugin SDK offers a specialized framework for creating plugins that:
- Can be loaded dynamically at runtime
- Are deployed independently from the console
- Can be enabled or disabled without restarting
- Are discovered through Kubernetes resources

## Key Features

### Runtime Loading

The Dynamic Plugin SDK provides:
- Dynamic module loading through webpack
- Asynchronous component resolution
- On-demand extension initialization
- Runtime extension registration

### Plugin Manifest

Dynamic plugins define a manifest that includes:
- Plugin metadata (name, version, etc.)
- Extension declarations
- Dependencies and requirements
- Feature flag requirements

### Security and Sandboxing

The SDK implements security measures:
- Controlled API exposure
- Restricted plugin capabilities
- Resource access validation
- Runtime validation of extensions

### Kubernetes Integration

Dynamic plugins integrate with Kubernetes through:
- **ConsolePlugin CRD**: Resource type for plugin registration
- **Console Operator**: Plugin discovery and deployment
- **Service binding**: Automatic plugin endpoint discovery

## Plugin Lifecycle

The Dynamic Plugin SDK manages a plugin's lifecycle:

1. **Discovery**: Plugin is discovered via Kubernetes CR
2. **Manifest Loading**: Plugin manifest is fetched
3. **Module Loading**: Required modules are dynamically loaded
4. **Extension Registration**: Extensions are registered with the console
5. **Activation**: Plugin is enabled and extensions become active
6. **Deactivation**: Plugin can be disabled without console restart

## Development Model

Developing with the Dynamic Plugin SDK:

1. Create a plugin using the dynamic SDK
2. Define extensions in the plugin manifest
3. Build the plugin as a web application
4. Package as a container image
5. Deploy using the ConsolePlugin CR

## API Differences

Key differences from the static Plugin SDK:

- **Module Loading**: Uses dynamic imports
- **Extension Resolution**: Handles asynchronous loading
- **Component Rendering**: Provides React Suspense integration
- **Resource Access**: Additional security boundaries

## Code Examples

### Dynamic Plugin Manifest
```json
{
  "name": "my-dynamic-plugin",
  "version": "1.0.0",
  "displayName": "My Dynamic Plugin",
  "extensions": [
    {
      "type": "console.navigation/section",
      "properties": {
        "id": "my-section",
        "name": "My Section"
      }
    }
  ]
}
```

### Dynamic Extension Usage
```typescript
import { useResolvedExtensions } from '@console/dynamic-plugin-sdk';

const MyComponent = () => {
  const [navItems] = useResolvedExtensions(isNavItem);
  return (
    <div>
      {navItems.map(item => (
        <NavItem key={item.uid} {...item.properties} />
      ))}
    </div>
  );
};
```

## Related Components

- [PluginSDK](./PluginSDK.md): Base SDK functionality
- [PluginLoader](./PluginLoader.md): System for loading plugins
- [PluginStore](./PluginStore.md): Plugin state management
- [PluginRegistry](./PluginRegistry.md): Extension registration
