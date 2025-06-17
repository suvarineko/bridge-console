# Plugin Loading Flow

## Overview
This document describes how plugins are discovered, loaded, and initialized in the OpenShift console.

## Static Plugin Loading Flow

1. **Application Initialization**
   - **Component:** Index entry point
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/index.tsx`
   - **Action:** Application starts bootstrapping
   - **Implementation:** Imports and initializes base components

2. **Plugin Store Initialization**
   - **Component:** Plugin Store
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/plugins.ts`
   - **Action:** Creates plugin registry
   - **Implementation:** Sets up store for plugin metadata and extensions

3. **Built-in Plugin Registration**
   - **Component:** Plugin Registry
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/plugin-loader.ts`
   - **Action:** Registers core plugins
   - **Implementation:** Adds core console plugins to registry

4. **Plugin Metadata Loading**
   - **Component:** Plugin Loader
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/plugin-loader.ts`
   - **Action:** Loads plugin metadata
   - **Implementation:** Reads plugin package metadata and extensions

5. **Extension Registration**
   - **Component:** Plugin Registry
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/plugins.ts`
   - **Action:** Registers plugin extensions
   - **Implementation:** Stores extension points provided by plugins

6. **Plugin Activation**
   - **Component:** Plugin Loader
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/plugin-loader.ts`
   - **Action:** Activates loaded plugins
   - **Implementation:** Resolves extension dependencies and activates

7. **Extension Point Integration**
   - **Component:** Extension Registry
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-plugin-sdk/src/registry.ts`
   - **Action:** Makes extensions available
   - **Implementation:** Resolves and provides extension points

## Dynamic Plugin Loading Flow

1. **Console Plugin Discovery**
   - **Component:** Console Operator
   - **Path:** (External to console codebase)
   - **Action:** Detects ConsolePlugin resources
   - **Implementation:** Watches for ConsolePlugin custom resources

2. **Plugin Manifest Collection**
   - **Component:** Dynamic Plugin Loader
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-dynamic-plugin-sdk/src/runtime/plugin-loader.ts`
   - **Action:** Collects plugin manifests
   - **Implementation:** Fetches plugin metadata from discovered plugins

3. **Dynamic Plugin Loading**
   - **Component:** Dynamic Plugin Loader
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-dynamic-plugin-sdk/src/runtime/plugin-loader.ts`
   - **Action:** Loads plugin entry points
   - **Implementation:** Dynamically imports JavaScript modules

4. **Plugin Initialization**
   - **Component:** Plugin Runtime
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-dynamic-plugin-sdk/src/runtime/plugin-runtime.ts`
   - **Action:** Initializes plugin runtime
   - **Implementation:** Sets up plugin context and capabilities

5. **Extension Registration**
   - **Component:** Dynamic Extension Registry
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-dynamic-plugin-sdk/src/registry.ts`
   - **Action:** Registers dynamic extensions
   - **Implementation:** Adds extensions to registry at runtime

6. **Extension Point Rendering**
   - **Component:** Extension Component
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-dynamic-plugin-sdk/src/runtime/extension-render.tsx`
   - **Action:** Renders extension components
   - **Implementation:** Loads and renders components from plugins

## Plugin Lifecycle Events

### Plugin Loading
1. **Discover**: Find plugin metadata
2. **Validate**: Check plugin compatibility
3. **Download**: Fetch plugin assets if needed
4. **Parse**: Process plugin metadata
5. **Register**: Add to plugin registry

### Plugin Initialization
1. **Resolve Dependencies**: Check required dependencies
2. **Initialize Runtime**: Set up plugin context
3. **Register Extensions**: Add extension points
4. **Run Initializers**: Execute plugin startup code
5. **Emit Ready Event**: Signal plugin is ready

### Plugin Unloading
1. **Deactivate**: Signal plugin to clean up
2. **Unregister Extensions**: Remove extension points
3. **Destroy Context**: Clean up plugin context
4. **Release Resources**: Remove plugin assets
5. **Emit Unloaded Event**: Signal plugin is unloaded

## Error Handling

### Plugin Loading Errors
- Invalid plugin manifests are rejected with error
- Plugin version compatibility is checked
- Timeout if plugin takes too long to load
- User notified of plugin loading failures

### Extension Errors
- Extension errors are isolated to the plugin
- Error boundaries capture rendering errors
- Failed plugins don't crash the console
- Detailed error reporting for administrators

## Security Considerations
- Plugins are loaded from trusted sources only
- RBAC controls access to plugin deployment
- Browser sandbox limits plugin capabilities
- CSP headers restrict plugin resource access

## Related Components
- [PluginRegistry](../components/plugins/PluginRegistry.md): Manages plugin registration
- [Dynamic Plugin SDK](../components/plugins/DynamicPluginSDK.md): Dynamic plugin support
- [Extension Registry](../components/plugins/ExtensionRegistry.md): Manages extension points
