# Navigation Resolution Flow

## Overview
This document describes how the navigation system in the OpenShift console dynamically resolves and renders navigation items based on the active perspective, extensions, and user preferences.

## Flow Steps

1. **Perspective Selection**
   - **Component:** PerspectiveSwitcher
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/perspective-switcher.tsx`
   - **Action:** User selects a perspective
   - **Implementation:** Updates the active perspective in the perspective context

2. **Perspective Context Update**
   - **Component:** PerspectiveContext
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/perspective-context.tsx`
   - **Action:** Updates the active perspective context
   - **Implementation:** Triggers re-renders of perspective-aware components

3. **Navigation Extension Resolution**
   - **Component:** useNavExtensionsForPerspective
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/useNavExtensionForPerspective.ts`
   - **Action:** Resolves navigation extensions for the active perspective
   - **Implementation:** Filters and sorts registered navigation extensions

4. **Navigation Section Organization**
   - **Component:** PerspectiveNav
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/PerspectiveNav.tsx`
   - **Action:** Organizes extensions into navigation sections
   - **Implementation:** Groups extensions by section and orders them

5. **Navigation Item Rendering**
   - **Component:** PluginNavItem
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/PluginNavItem.tsx`
   - **Action:** Renders individual navigation items
   - **Implementation:** Renders appropriate component based on extension type

6. **Pinned Resource Resolution**
   - **Component:** usePinnedResources
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/packages/console-shared/src/hooks/usePinnedResources.ts`
   - **Action:** Resolves user-pinned resources
   - **Implementation:** Retrieves pinned resources from user preferences

7. **Pinned Resource Rendering**
   - **Component:** PinnedResource
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/PinnedResource.tsx`
   - **Action:** Renders pinned resource navigation items
   - **Implementation:** Renders resource links with drag-and-drop capabilities

8. **Navigation Interaction**
   - **Component:** Navigation
   - **Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/index.tsx`
   - **Action:** User interacts with navigation items
   - **Implementation:** Triggers navigation callbacks and route changes

## Data Flow

### Extension Registration
1. **Plugin Loading**: Plugins register navigation extensions during loading
2. **Extension Registry**: Extensions are stored in the extension registry
3. **Extension Properties**: Extensions specify properties like section, perspective, and order

### Extension Filtering
1. **Perspective Filter**: Extensions are filtered by active perspective
2. **Access Filter**: Extensions are filtered by user permissions
3. **Feature Flag Filter**: Extensions are filtered by enabled features

### Navigation State
1. **Active Item**: Current active navigation item is tracked
2. **Expanded Sections**: Expanded/collapsed state of sections is maintained
3. **Pinned Resources**: User-pinned resources are stored in preferences

## Error Handling

### Missing Extensions
- Gracefully handles missing or invalid extensions
- Provides fallback navigation structure

### Permission Errors
- Filters out navigation items user doesn't have permission to see
- Handles dynamically changing permissions

### Plugin Errors
- Isolates errors in plugin-provided navigation items
- Prevents plugin errors from breaking core navigation

## Related Components
- [Navigation](../components/navigation/Navigation.md): Main navigation component
- [PerspectiveNav](../components/navigation/PerspectiveNav.md): Perspective-specific navigation
- [Perspectives](../components/perspectives/README.md): Perspective system
- [Plugin System](../components/plugins/README.md): Plugin extension system
