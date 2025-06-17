# NavHeader Component

The NavHeader component forms the top section of the navigation sidebar in the OpenShift Console, containing the perspective switcher and branding elements.

## Overview

NavHeader serves as the entry point for the navigation system, providing critical UI elements for perspective switching and application branding. It remains visible at all times, even when the main navigation is collapsed.

## Key Features

### Perspective Switcher

The NavHeader includes:
- A dropdown menu for switching between console perspectives
- Visual indicators for the active perspective
- Icons and labels for each available perspective
- Keyboard accessibility for perspective selection

### Branding

The component displays:
- OpenShift logo and branding
- Product version information
- Optional cluster identifiers
- Customizable branding elements

### Responsive Design

NavHeader adapts to different viewport sizes:
- Collapsible on smaller screens
- Maintains critical functionality when collapsed
- Adjusts spacing and layout responsively
- Provides touch-friendly targets on mobile devices

### Navigation Controls

The component may include:
- Hamburger menu toggle for smaller screens
- Navigation expansion/collapse controls
- Breadcrumb integration for context
- Visual indicators for navigation state

## Component Structure

```tsx
<NavHeader>
  <ApplicationLauncher>
    <PerspectiveSwitcher
      activePerspective="admin"
      perspectives={[
        { id: 'admin', label: 'Administrator', icon: AdminIcon },
        { id: 'dev', label: 'Developer', icon: CodeIcon },
      ]}
      onPerspectiveSelect={handlePerspectiveChange}
    />
  </ApplicationLauncher>
  <Brand src={openshiftLogo} alt="OpenShift Logo" />
  <NavToggle onClick={toggleNavigation} expanded={isExpanded} />
</NavHeader>
```

## User Interaction

NavHeader responds to:
- Click events on perspective switcher items
- Keyboard navigation within the dropdown
- Screen reader announcements for perspective changes
- Touch events on mobile devices

## Visual Design

The component follows PatternFly design guidelines for:
- Brand placement and presentation
- Dropdown styling and behavior
- Color usage and contrast ratios
- Spacing and alignment

## Plugin Integration

NavHeader:
- Can be extended with additional controls from plugins
- Displays perspective options from active plugins
- Maintains contextual awareness of plugin state
- Provides extension points for custom header elements

## Related Components

- [Navigation](./Navigation.md): Main navigation container
- [PerspectiveNav](./PerspectiveNav.md): Perspective-specific navigation
- [NavSection](./NavSection.md): Collapsible navigation sections
- [NavItem Components](./NavItems.md): Individual navigation items
