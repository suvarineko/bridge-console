# Masthead

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/masthead.jsx`

## Purpose
The Masthead component serves as the main header for the OpenShift console. It provides branding, global navigation controls, user menu, help resources, and status information.

## Component Structure

The Masthead consists of several key parts:

```jsx
export const Masthead = ({ onNavToggle }) => {
  // Various hooks and state
  
  return (
    <PageHeader
      logo={<Logo />}
      logoProps={logoProps}
      toolbar={<HeaderTools />}
      showNavToggle
      onNavToggle={onNavToggle}
    />
  );
};
```

### Logo Component
Displays the product logo and branding based on configuration.

```jsx
const Logo = () => {
  const { productName } = getBrandingDetails();
  return <React.Fragment>{productName}</React.Fragment>;
};
```

### HeaderTools Component
Provides various header tools including notifications, user menu, and help.

```jsx
const HeaderTools = () => (
  <div className="co-masthead__tools">
    {/* Application launcher, help menu, notification drawer, etc. */}
    <NotificationBadge />
    <HelpMenu />
    <UserMenu />
  </div>
);
```

## Key Features

### Branding
- Displays product name (OKD, OpenShift, etc.)
- Shows custom logo if configured
- Adapts branding based on deployment type

### Navigation Controls
- Hamburger menu toggle for sidebar navigation
- Responsive design for different screen sizes
- Triggers navigation events for mobile/desktop views

### User Menu
- User information and preferences
- Logout functionality
- Role and identity information

### Help Resources
- Documentation links
- About modal with version info
- Command line tools
- API explorer access

### Notification System
- Notification drawer toggle
- Badge showing notification count
- Access to system alerts and messages

## Branding Configuration

The Masthead adapts its appearance based on branding configuration:

```javascript
export const getBrandingDetails = () => {
  const { brand, customLogoURL } = getBranding();
  
  // Map brand to product name and default logos
  const productName = brandToProductName[brand] || brand;
  
  return {
    productName,
    logoImg: customLogoURL || logos[brand] || logos.okd,
  };
};
```

## Integration Points

### User Authentication
- Displays current user information
- Provides logout functionality
- Shows impersonation notification when active

### Cluster Information
- Shows current cluster in multi-cluster setups
- Provides cluster switching functionality
- Displays cluster status information

### Notification System
- Integrates with the notification subsystem
- Shows notification count badge
- Toggles notification drawer visibility

## Related Components

- [Navigation](../navigation/Navigation.md): Side navigation that responds to the toggle
- [UserMenu](./UserMenu.md): User dropdown menu in the masthead
- [HelpMenu](./HelpMenu.md): Help resources dropdown
- [NotificationBadge](../notifications/NotificationBadge.md): Notification counter component
