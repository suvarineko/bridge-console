# TopologySidePanel Component

The TopologySidePanel component provides a contextual panel for displaying details and actions for selected resources in the OpenShift Console's Topology view.

## Overview

The TopologySidePanel serves as a complementary interface to the topology visualization, showing detailed information about selected resources without requiring navigation away from the topology view. It provides resource-specific details, metrics, related resources, and actions in a side panel that works in coordination with the main topology visualization.

## Key Features

### Resource Details

Comprehensive information display:
- Resource metadata and properties
- Status and health information
- Label and annotation display
- Owner and dependency information
- Configuration details
- Resource-specific properties
- Creation time and last update
- Resource metrics and utilization

### Action Panel

Contextual actions for resources:
- Resource-specific action menus
- Edit resource options
- Delete and recreate options
- Scale controls for scalable resources
- Route and URL access
- Log viewing shortcuts
- Terminal access shortcuts
- Build and deployment triggers

### Multi-select Support

Handling multiple selected items:
- Group details for multiple selections
- Common actions for multiple resources
- Selection count and summary
- Bulk operation options
- Common properties display
- Relationship visualization
- Selection filtering
- Group/ungroup actions

### Resource Tabs

Organized information presentation:
- **Details**: Core resource information
- **Resources**: Related Kubernetes resources
- **Monitoring**: Performance metrics
- **Events**: Related events
- **YAML**: Raw resource definition
- **Logs**: Container logs (where applicable)
- **Terminal**: Terminal access (where applicable)
- **Custom tabs**: Extension-provided tabs

## Implementation Details

The TopologySidePanel is implemented using:
- React components with PatternFly
- Responsive design for different widths
- Dynamic content based on resource type
- Tab-based organization of content
- Resizable panel width
- Sticky header for resource identification
- Lazy-loaded tab content

## Panel States

The side panel has several possible states:
- **Closed**: No panel shown (or minimized)
- **Single Resource**: Details for one selected resource
- **Multi-select**: Details for multiple selected resources
- **Group**: Details for a selected resource group
- **No Selection**: General information or help
- **Loading**: Loading state for resource details
- **Error**: Error state for failed data loading

## Resource Visualization

Enhanced resource visualization:
- Compact topology preview of related resources
- Contextual relationship diagram
- Health status visualization
- Configuration overview
- Status timeline
- Utilization graphs
- Event timeline
- Owner hierarchy

## Integration Points

The side panel integrates with:
- **GraphView**: Synchronized with selection
- **ListView**: Synchronized with selection
- **Resource Details**: Detailed resource information
- **Monitoring**: Resource metrics and health
- **YAML Editor**: Resource YAML viewing
- **Terminal**: Container terminal access
- **Log Viewer**: Container log viewing
- **Plugin System**: For custom tab extensions

## Related Components

- [TopologyView](./TopologyView.md): Parent component
- [GraphView](./GraphView.md): Selection source for the panel
- [ListView](./ListView.md): Alternative selection source
- [TopologyControlBar](./TopologyControlBar.md): Controls that affect the panel
