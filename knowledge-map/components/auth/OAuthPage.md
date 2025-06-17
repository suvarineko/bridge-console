# OAuthPage

**Path:** `/projects/Dropbox/_git/web-console/frontend/public/components/cluster-settings/oauth.tsx`

## Purpose
React component for viewing and configuring OAuth identity providers in the OpenShift console. Allows administrators to manage how users authenticate to the cluster.

## Component Structure

### OAuthDetailsPage
Main page component that renders the OAuth details.

**Props:**
- `match`: React Router match object containing URL parameters

### OAuthDetails
Component that displays OAuth configuration details.

**Props:**
- `obj`: OAuth resource object containing configuration

### IdentityProviders
Component that renders a table of configured identity providers.

**Props:**
- `identityProviders`: Array of identity provider configurations

## Identity Provider Types
The component supports adding various identity provider types:
- Basic Authentication
- GitHub
- GitLab
- Google
- HTPasswd
- Keystone
- LDAP
- OpenID Connect
- Request Header

## State Management
- `isIDPOpen`: Controls dropdown visibility for adding new identity providers
- Uses URL query parameters to detect newly added identity providers

## Data Display
- Shows access token lifetime configuration
- Displays a table of configured identity providers with:
  - Provider name
  - Provider type
  - Mapping method
- Shows alerts for newly added providers that are still being configured

## User Actions
- Adding new identity providers via dropdown
- Navigating to cluster operator status for authentication
- Editing raw YAML configuration

## Dependencies
- **Components:**
  - PatternFly components for UI elements
  - ResourceSummary for displaying resource metadata
  - DetailsPage for layout structure
  
- **Models:**
  - ClusterOperatorModel
  - OAuthModel
  
- **Utils:**
  - formatPrometheusDuration for displaying token lifetimes
  - resourcePathFromModel for generating URLs

## Implementation Notes
- Uses React hooks for state management
- Integrated with i18n translation system
- Shows notifications when identity providers are being reconfigured
- Provides links to authentication status when changes are in progress
- Identity providers are configured as part of the OAuth custom resource
