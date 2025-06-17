# ProjectAccess Component

The ProjectAccess component provides a specialized interface for managing access control within the context of a project in the OpenShift Developer Console.

## Overview

ProjectAccess simplifies the complex Kubernetes RBAC (Role-Based Access Control) system into a developer-friendly interface, allowing project owners and contributors to manage who has what level of access to project resources without requiring deep knowledge of Kubernetes security concepts.

## Key Features

### Role Management

Simplified role management:
- Pre-defined role templates (Admin, Edit, View)
- Role assignment to users and groups
- Role binding visualization
- Permission scope indication
- Custom role selection

### User and Group Assignment

Streamlined access control:
- Add users to project roles
- Add groups to project roles
- Service account management
- Bulk user/group operations
- Search and filtering capabilities

### Access Overview

Comprehensive access visualization:
- Current project access summary
- User/group role assignment list
- Filter by user, group, or role
- Sort by name, role, or binding type
- Service account access display

### Permission Management

Intuitive permission controls:
- Add new role bindings
- Remove existing access
- Modify role assignments
- Temporary access options
- Role binding details

## Implementation Details

ProjectAccess is implemented as:
- A React component using PatternFly components
- A tabular interface for role bindings
- Form-based controls for modifying access
- Integration with Kubernetes RBAC API
- User-friendly error handling and validation

## Access Levels

The component supports standard OpenShift roles:
- **Admin**: Full control over all resources
- **Edit**: Modify most resources but cannot manage roles
- **View**: Read-only access to most resources
- **Custom roles**: When available in the cluster

## User Experience

The interface prioritizes usability:
- Clear indication of current access state
- Simple forms for adding new access
- Confirmation for removal of access
- Explanations of role capabilities
- Contextual help for RBAC concepts

## Integration Points

The component integrates with:
- **Kubernetes RBAC API**: For role binding management
- **User Management**: For user and group information
- **Service Account System**: For service account access
- **Project System**: For project-scoped permissions
- **Audit Logging**: For access changes tracking

## Related Components

- [ProjectOverview](./ProjectOverview.md): Project context for access control
- [UserManagement](../admin-console/UserManagement.md): Cluster-wide user management
- [Settings](../admin-console/Settings.md): Related security settings
