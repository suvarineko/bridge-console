# Topology Components

The Topology view in the OpenShift console provides a visual representation of applications, services, and their connections, allowing users to visualize and interact with their Kubernetes resources in an intuitive way.

## Key Topology Components

### [TopologyView](./TopologyView.md)
The main view component that renders the application topology graph.

### [GraphView](./GraphView.md)
Visual graph representation of the application topology with interactive nodes and edges.

### [ListView](./ListView.md)
Alternative list representation of the resources in the topology.

### [TopologyControlBar](./TopologyControlBar.md)
Controls for filtering, grouping, and customizing the topology view.

### [TopologySidePanel](./TopologySidePanel.md)
Side panel that shows details and actions for selected resources.

## Topology Data Model

The topology system uses a graph-based data model:

1. **Resources**: Kubernetes resources represented as graph nodes
2. **Relationships**: Connections between resources represented as graph edges
3. **Groups**: Logical grouping of related resources
4. **Decorators**: Visual indicators for resource status and metadata
5. **Filters**: Rules for including/excluding resources from the view

## Visualization Features

### Resource Representation
- Different node types for different resource kinds (Deployments, Services, Routes, etc.)
- Visual indicators for resource status (running, failed, building, etc.)
- Resource metadata displayed in node labels and tooltips

### Relationship Visualization
- Connection lines between related resources
- Different connection styles for different relationship types
- Traffic visualization for network connections

### Interaction Capabilities
- Node selection and highlighting
- Drag and drop for resource creation and connection
- Context menus for resource actions
- Zooming and panning the topology view
- Resource filtering and grouping

## Extension Points

The topology system is extensible through the plugin framework:

1. **Custom Node Types**: Plugins can register custom node types
2. **Custom Edge Types**: Plugins can register custom connection types
3. **Custom Decorators**: Plugins can add custom visual decorators
4. **Custom Groups**: Plugins can define custom resource grouping
5. **Custom Actions**: Plugins can add actions to topology resources

## Integration Points

The topology system integrates with several other components:

1. **Kubernetes API**: For resource data
2. **Monitoring**: For resource health and metrics
3. **Build System**: For build status
4. **Serverless**: For serverless application visualization
5. **Pipelines**: For CI/CD pipeline visualization

## Related Components

- [Developer Console](../dev-console/README.md): Parent context for the Topology view
- [Monitoring](../monitoring/README.md): Provides health and status information
- [Plugin System](../plugins/README.md): Extension mechanism for the Topology view
