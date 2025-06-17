# PluginRegistry

**Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-plugin-sdk/src/registry.ts`

## Purpose
The PluginRegistry is a core component of the OpenShift console's plugin architecture. It manages the registration, activation, and extension points of plugins, allowing the console to be extended with additional functionality in a standardized way.

## Registry Structure

```typescript
export class PluginRegistry {
  private readonly pluginMap = new Map<string, Plugin<any>>();
  private readonly extensionsMap = new Map<string, Extension<any>[]>();
  private readonly settledExtensionsMap = new Map<ExtensionTypeGuard<any, any>, Extension<any>[]>();
  // Additional state...

  public register(plugin: Plugin<any>): void {
    // Implementation for plugin registration
  }

  public getExtensions<E extends Extension<ExtensionProperties>>(
    typeGuard: ExtensionTypeGuard<ExtensionProperties, E>
  ): E[] {
    // Implementation for retrieving extensions
  }

  public getExtensionsInUse<E extends Extension<ExtensionProperties>>(
    typeGuard?: ExtensionTypeGuard<ExtensionProperties, E>
  ): E[] {
    // Implementation for retrieving active extensions
  }
  
  // Additional methods...
}
```

## Key Concepts

### Plugin
A logical unit of functionality that can provide multiple extensions.

```typescript
export type Plugin<P extends PluginProperties> = {
  type: 'Plugin';
  properties: P;
  extensions: Extension<ExtensionProperties>[];
};
```

### Extension
A specific capability or UI component provided by a plugin.

```typescript
export type Extension<P extends ExtensionProperties> = {
  type: string;
  uid?: string;
  properties: P;
  pluginID?: string;
  pluginName?: string;
};
```

### Extension Type
A specific category of extension with its own properties and behavior.

```typescript
export type ExtensionTypeGuard<P extends ExtensionProperties, E extends Extension<P>> = 
  (e: Extension<any>) => e is E;
```

## Core Functions

### register
Registers a plugin and its extensions in the registry.

```typescript
public register(plugin: Plugin<any>): void {
  if (this.pluginMap.has(plugin.properties.id)) {
    // Error handling for duplicate plugins
    return;
  }
  
  this.pluginMap.set(plugin.properties.id, plugin);
  
  plugin.extensions.forEach(extension => {
    // Register each extension
    const extensionType = extension.type;
    if (!this.extensionsMap.has(extensionType)) {
      this.extensionsMap.set(extensionType, []);
    }
    
    const extensions = this.extensionsMap.get(extensionType);
    extensions.push(extension);
  });
  
  // Clear cached extension arrays
  this.settledExtensionsMap.clear();
}
```

### getExtensions
Retrieves extensions of a specific type.

```typescript
public getExtensions<E extends Extension<ExtensionProperties>>(
  typeGuard: ExtensionTypeGuard<ExtensionProperties, E>
): E[] {
  if (this.settledExtensionsMap.has(typeGuard)) {
    return this.settledExtensionsMap.get(typeGuard) as E[];
  }
  
  // Find all extensions that match the type guard
  const matchedExtensions = Array.from(this.extensionsMap.values())
    .flat()
    .filter(typeGuard);
  
  // Cache the result
  this.settledExtensionsMap.set(typeGuard, matchedExtensions);
  
  return matchedExtensions;
}
```

### isExtensionInUse
Determines if an extension should be active.

```typescript
public isExtensionInUse(extension: Extension<any>): boolean {
  const plugin = this.pluginMap.get(extension.pluginID);
  
  // Check if the plugin is enabled and all feature dependencies are satisfied
  return plugin && this.isPluginActive(plugin);
}
```

## Extension Types

The SDK defines numerous extension types across different categories:

### UI Extensions
- Navigation items
- Context menus
- Dashboard cards
- Detail page tabs
- Form components

### Data Extensions
- Custom resources
- Resource badges
- Resource status providers
- Action providers

### Functional Extensions
- Perspective definitions
- Feature flags
- Redux reducers
- API discovery

## Extension Registration

Plugins register extensions when they are loaded:

```typescript
// Plugin definition
const myPlugin: Plugin<ConsolePluginMetadata> = {
  type: 'Plugin',
  properties: {
    id: 'my-plugin',
    name: 'My Plugin',
    version: '1.0.0',
  },
  extensions: [
    {
      type: 'NavItem/Section',
      properties: {
        section: 'admin',
        title: 'My Feature',
        href: '/my-feature',
      },
    },
    // Additional extensions...
  ],
};

// Registration
pluginRegistry.register(myPlugin);
```

## Usage in Components

Components use the registry to fetch extensions:

```tsx
const MyComponent: React.FC = () => {
  // Get all navigation items
  const navItems = useExtensions<NavItem>(isNavItem);
  
  return (
    <Nav>
      {navItems.map(item => (
        <NavLink key={item.uid} href={item.properties.href}>
          {item.properties.title}
        </NavLink>
      ))}
    </Nav>
  );
};
```

## Dynamic Plugin Support

The registry supports runtime-loaded plugins:

- **Plugin Discovery**: Finds plugins via API or configuration
- **Dynamic Loading**: Loads JS chunks at runtime
- **Integration**: Registers extensions from loaded plugins
- **Lifecycle Management**: Activates and deactivates plugins

## Related Components

- [PluginStore](./PluginStore.md): Singleton instance of the registry
- [ExtensionHooks](./ExtensionHooks.md): React hooks for using extensions
- [PluginLoader](./PluginLoader.md): System for loading plugins
- [DynamicPluginSDK](./DynamicPluginSDK.md): SDK for dynamic plugins
