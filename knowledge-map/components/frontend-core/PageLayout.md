# Page Layout Component

The PageLayout component provides the core layout structure for all pages in the OpenShift Console frontend application.

## Overview

The PageLayout serves as a standardized layout framework that ensures consistent page structure throughout the console application. It provides the skeleton for the header, navigation sidebar, main content area, and other common UI elements, creating a unified user experience across different sections of the application.

## Key Features

### Layout Structure

Comprehensive page organization:
- Application header (masthead)
- Navigation sidebar
- Main content area
- Breadcrumb navigation
- Page title area
- Action buttons area
- Notification area
- Footer (when applicable)
- Modal container

### Responsive Design

Adaptive layout capabilities:
- Responsive resizing for different screen sizes
- Collapsible navigation for smaller screens
- Mobile-friendly layout adjustments
- Touch-optimized interactive elements
- Viewport-aware component rendering
- Print-friendly styles
- Accessibility considerations

### Layout Variants

Support for different layout types:
- Standard layout with sidebar navigation
- Full-width layout for detailed views
- Minimal layout for focused tasks
- Wizard layout for multi-step processes
- Split layout for side-by-side views
- Overlay layout for modal dialogs
- Embedded layout for integration scenarios

### Theme Integration

Visual styling integration:
- Light/dark theme support
- Dynamic theme switching
- Custom theme extensions
- High contrast accessibility mode
- Color-blind accessible mode
- Custom branding integration
- Consistent spacing and sizing

## Implementation Details

The PageLayout is implemented using:
- PatternFly layout components
- React component composition
- CSS Grid and Flexbox for layout
- Responsive breakpoints
- React Context for layout state
- DOM manipulation for special effects
- Focus management for accessibility

## Layout Components

The layout consists of several key components:
- **Page**: Main container component
- **PageHeader**: Contains masthead and global actions
- **PageSidebar**: Navigation sidebar
- **PageSection**: Content section containers
- **PageBreadcrumb**: Navigation breadcrumbs
- **PageActions**: Page-level action buttons
- **PageTitle**: Page title and description
- **PageContent**: Main content container
- **PageFooter**: Optional footer content

## Layout Composition

Common layout composition pattern:
```jsx
<Page>
  <PageHeader />
  <PageSidebar />
  <PageMain>
    <PageBreadcrumb />
    <PageSection>
      <PageTitle />
      <PageActions />
    </PageSection>
    <PageSection>
      <PageContent />
    </PageSection>
  </PageMain>
</Page>
```

## Layout State

The layout manages several state concerns:
- Sidebar collapsed/expanded state
- Current responsive breakpoint
- Scroll position and state
- Fixed header state
- Focus state for keyboard navigation
- Theme state
- Loading state indicators
- Page transition state

## Integration Points

The PageLayout integrates with:
- **Navigation System**: For sidebar navigation
- **Theme System**: For visual styling
- **Notification System**: For toast notifications
- **Modal System**: For dialog overlays
- **Accessibility**: For screen reader support
- **Router**: For page transitions
- **Perspective System**: For perspective-specific layouts
- **User Preferences**: For layout customization

## Related Components

- [App](./App.md): Root application component
- [Navigation](../navigation/README.md): Navigation components
- [ResourceList](./ResourceList.md): Content for listing resources
- [ResourceDetails](./ResourceDetails.md): Content for resource details
- [Forms](./Forms.md): Form layout and components
