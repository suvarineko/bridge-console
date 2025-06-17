{
  `path`: `/projects/openshift-console-knowledge-map/components/plugins/README.md`,
  `content`: `# Plugin Architecture

The OpenShift console uses a plugin architecture that allows extending the UI with additional functionality. This extensibility model enables adding new features without modifying the core codebase.

## Key Plugin Components

### [PluginRegistry](./PluginRegistry.md)
Manages the registration and loading of plugins.

### [PluginStore](./PluginStore.md)
Stores plugin metadata and extension points.

### [PluginSDK](./PluginSDK.md)
Development tools and APIs for creating plugins.

### [DynamicPluginSDK](./DynamicPluginSDK.md)
Support for dynamically loading plugins at runtime.

### [Plugin Loader](./PluginLoader.md)
Loads and initializes plugins during application startup.

## Plugin Types

Several plugin types are supported:

- **Static Plugins**: Built into the console and loaded at build time
- **Dynamic Plugins**: Loaded at runtime from external sources
- **Console Plugins**: Dedicated OpenShift plugins deployed to the cluster

## Extension Points

Plugins can extend various parts of the console:

- **Navigation**: Add items to the sidebar navigation
- **Resource Pages**: Create custom pages for resources
- **Resource Actions**: Add actions to resource dropdowns
- **Resource List Views**: Customize resource list displays
- **Dashboard Cards**: Add cards to the dashboard
- **Perspectives**: Create dedicated UI perspectives
- **YAML Editors**: Enhance YAML editing capabilities

## Plugin Development

To develop a plugin:

1. Create a new package using the plugin SDK
2. Define extension points in a `console-extensions.json` file
3. Implement components and functionality
4. Register the plugin with the console

## Plugin Deployment

Plugins are deployed through:

- **Built-in Plugins**: Part of the console code
- **Dynamic Plugins**: Loaded from URLs at runtime
- **Console Operator**: Deploys OpenShift console plugins as operators

## Plugin Discovery

The console discovers plugins through:

- **Static Registration**: At build time in the code
- **ConsolePlugin CRD**: Custom resources in the cluster
- **External Sources**: URLs configured at runtime

## Plugin Security

Security measures for plugins include:

- **Sandboxing**: Limiting plugin access to core functions
- **RBAC**: Controlling which users can see which plugins
- **Validation**: Ensuring plugins meet security standards

## Related Components

The plugin architecture interacts with:

- **[Frontend Core](../frontend-core/README.md)**: Extended by plugins
- **Kubernetes API**: For discovering and managing plugins
- **Console Operator**: For deploying cluster plugins
`
}