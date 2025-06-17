# Navigation

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/nav/index.tsx`

## Purpose
The Navigation component is the main wrapper for the console's left sidebar navigation. It provides the container for perspective-based navigation and handles navigation events.

## Component Structure

```tsx
const Navigation: React.FC<NavigationProps> = React.memo(function Navigation({
  isNavOpen,
  onNavSelect,
  onPerspectiveSelected,
}) {
  const { t } = useTranslation();
  return (
    <PageSidebar
      nav={
        <Nav aria-label={t('public~Nav')} onSelect={onNavSelect} theme="dark">
          <NavHeader onPerspectiveSelected={onPerspectiveSelected} />
          <PerspectiveNav />
        </Nav>
      }
      isNavOpen={isNavOpen}
      theme="dark"
    />
  );
});
```

## Props Interface

```tsx
type NavigationProps = {
  onNavSelect: NavProps['onSelect'];
  onPerspectiveSelected: () => void;
  isNavOpen: boolean;
};
```

## Key Components

### PageSidebar
PatternFly component that provides the sidebar container with mobile responsiveness.

### Nav
PatternFly navigation container component that manages the navigation items.

### NavHeader
Component that renders the navigation header, including the perspective switcher.

### PerspectiveNav
Dynamic component that renders navigation items based on the active perspective.

## Behavior

1. The Navigation component renders the PatternFly PageSidebar component
2. It configures the sidebar with the dark theme and the navigation structure
3. It handles the open/closed state of the navigation sidebar via `isNavOpen` prop
4. It passes selection handlers for navigation and perspective changes

## State Management

- **isNavOpen**: Controlled by parent component, determines if the sidebar is visible
- **onNavSelect**: Callback fired when a navigation item is selected
- **onPerspectiveSelected**: Callback fired when a perspective is selected

## Translation Integration

Uses the `useTranslation` hook to provide internationalized labels and text.

## Related Components

- [NavHeader](./NavHeader.md): The header component of the navigation sidebar
- [PerspectiveNav](./PerspectiveNav.md): Dynamic navigation based on active perspective
- [PatternFly PageSidebar](https://www.patternfly.org/v4/components/page): Documentation for the underlying PatternFly component
