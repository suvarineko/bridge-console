# ProjectOverview Component

The ProjectOverview component provides a summarized view of a project's resources, status, and activity in the OpenShift Developer Console.

## Overview

The ProjectOverview serves as a dashboard that gives developers a quick understanding of their project's status, including deployed applications, resource utilization, and recent activity. It acts as a starting point for navigating to more detailed views of specific resources or features.

## Key Features

### Resource Summary

Comprehensive resource visibility:
- Deployment status and counts
- Pod running status
- Build status and history
- Configuration resources
- Storage resources
- Networking resources
- Recent updates and changes

### Resource Utilization

Project resource monitoring:
- CPU and memory usage
- Storage utilization
- Quota consumption
- Resource constraint warnings
- Comparison to limits and requests
- Historical utilization trends

### Activity Feed

Recent project activity:
- Deployment events
- Build status changes
- Configuration updates
- Creation and deletion events
- Error and warning events
- User actions and changes

### Quick Actions

Common project operations:
- Add new resources
- Create new applications
- Access project settings
- Configure monitoring
- Set up pipelines
- Manage access control
- View resource details

## Implementation Details

The ProjectOverview is implemented as:
- A React component using PatternFly components
- Dashboard cards for different resource types
- Real-time updates for status changes
- Integration with Kubernetes watches
- Responsive design for different screen sizes

## Resource Categories

Resources organized by functional areas:
- **Applications**: Deployments, StatefulSets, etc.
- **Builds**: BuildConfigs, Builds
- **Pipelines**: Pipeline resources
- **Configuration**: ConfigMaps, Secrets
- **Networking**: Services, Routes
- **Storage**: PVCs, StorageClasses
- **Events**: Recent activity and changes

## Customization

The overview supports customization:
- Filter resources by type or label
- Custom grouping of related resources
- Expand/collapse sections
- Sort options for different views
- Save custom view preferences
- Default view configuration

## Integration Points

The component integrates with:
- **Kubernetes API**: For resource data
- **Monitoring**: For resource utilization
- **Events**: For project activity
- **Projects**: For project metadata
- **User Preferences**: For view customization
- **RBAC**: For permission-based view filtering

## Related Components

- [AddPage](./AddPage.md): Creating new resources in the project
- [TopologyView](./TopologyView.md): Detailed application relationships
- [Monitoring](./Monitoring.md): Detailed monitoring for the project
- [ProjectAccess](./ProjectAccess.md): Managing project access
