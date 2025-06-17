# Page Component

The Page component is a fundamental layout component in the OpenShift Console that provides the overall structure for all pages within the application.

## Overview

The Page component serves as a wrapper that provides consistent layout, styling, and structure for all content pages in the console. It leverages PatternFly's page components to create a standardized page structure that maintains UI consistency across the application.

## Key Features

### Layout Structure

The Page component provides a standard layout that includes:
- Header section (typically containing the masthead)
- Sidebar navigation area
- Main content area
- Optional breadcrumbs
- Optional secondary navigation
- Footer area when applicable

### Responsive Design

The component implements responsive behavior:
- Adapts layout based on screen size
- Handles collapsible navigation for smaller screens
- Provides consistent spacing and padding across device sizes

### Content Organization

Page helps organize content through:
- Title and header management
- Section division and spacing
- Content padding and alignment
- Optional page tools and actions
- Loading state management

## Usage Pattern

The Page component is typically used as a container for more specific page implementations:

```typescript
<Page>
  <PageSection variant="light">
    <Breadcrumb />
    <PageTitle title="Resource Name" />
  </PageSection>
  <PageSection>
    <MainContent />
  </PageSection>
</Page>
```

## Integration with PatternFly

The Page component is built on PatternFly's page layout components:
- Uses PatternFly's `Page` and `PageSection` components
- Maintains consistency with the PatternFly design system
- Supports PatternFly's theming capabilities
- Follows PatternFly's layout guidelines

## Resource Details Pages

For resource detail pages, the Page component:
- Provides the structure for the tabs interface
- Maintains proper spacing between detail sections
- Handles the header and action buttons
- Provides consistent placement for resource metadata

## List Pages

For list pages, the Page component:
- Structures the filter and action area
- Provides consistent spacing for the list items
- Handles empty and loading states
- Maintains proper alignment of list controls

## Related Components

- [ApplicationRoot](./ApplicationRoot.md): Uses Page as its main structure
- [AppContents](./AppContents.md): Renders content within Page sections
- [Masthead](./Masthead.md): Appears at the top of the Page
- [details-page.tsx](../components/utils/details-page.tsx): Extends Page for resource details
- [list-page.tsx](../components/factory/list-page.tsx): Extends Page for resource lists
