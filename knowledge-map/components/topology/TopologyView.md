# TopologyView

**Path:** `/projects/Dropbox/_git/web-console/frontend/packages/topology/src/components/graph-view/TopologyView.tsx`

## Purpose
The TopologyView component is the main container for the application topology visualization in the OpenShift console. It provides an interactive graph visualization of applications, services, and their connections, allowing users to understand and manage their application architecture.

## Component Structure

```tsx
export const TopologyView: React.FC<TopologyViewProps> = ({
  model,
  namespace,
  selectedIds,
  onSelect,
  onSelectTab,
  selectedTab,
  contextToolbar,
  viewToolbar,
  controlBar,
  detailsPanel,
  // Additional props...
}) => {
  // Implementation...
  return (
    <div className="odc-topology">
      <div className="odc-topology__header">
        {viewToolbar}
        {contextToolbar}
      </div>
      <div className="odc-topology__content">
        <div className="odc-topology__graph-container">
          {controlBar}
          <TopologyGraphView
            model={model}
            selectedIds={selectedIds}
            onSelect={onSelect}
            // ...
          />
        </div>
        {detailsPanel && <div className="odc-topology__details-panel">{detailsPanel}</div>}
      </div>
    </div>
  );
};
```

## Key Properties

### Data Model Properties
- `model`: The topology data model containing nodes and edges
- `namespace`: The current namespace context
- `selectedIds`: IDs of currently selected elements

### Control Properties
- `onSelect`: Callback when elements are selected
- `onSelectTab`: Callback when tabs are selected
- `selectedTab`: Currently selected tab

### UI Component Properties
- `contextToolbar`: Toolbar with context-sensitive actions
- `viewToolbar`: Toolbar with view controls (zoom, layout)
- `controlBar`: Control bar with filters and display options
- `detailsPanel`: Panel showing details of selected elements

## Key Features

### Interactive Visualization
- Zoomable and pannable graph view
- Element selection and highlighting
- Connectors showing relationships between components

### Layout Management
- Force-directed layout algorithm
- Group and ungroup related elements
- Compact and expanded views

### Filtering and Display Options
- Filter by resource type
- Filter by label or annotation
- Toggle display of different resource types
- Application and resource grouping options

### Context-Sensitive Actions
- Right-click menu for resource actions
- Create connections between resources
- Access to resource details and logs

## Topology Model

The topology view uses a graph data model:

```typescript
interface TopologyModel {
  nodes: Node[];        // Application components, services, etc.
  edges: Edge[];        // Connections between components
  groups: Group[];      // Logical groupings (applications, etc.)
  dataModel: Model;     // Underlying data objects
}
```

## Integration Points

### Resource Integration
- Visualizes Kubernetes resources (Deployments, Services, Routes, etc.)
- Shows build and deployment status
- Integrates with monitoring for health status

### Plugin Integration
- Extensible via topology plugins
- Custom decorators and visualization elements
- Application-specific behavior

### Action Integration
- Context menu actions for resources
- Drag and drop for resource creation
- Connection management between resources

## Visualization Elements

### Nodes
- Different shapes for different resource types
- Visual indicators for resource status
- Badges for additional information

### Edges
- Different line styles for different relationship types
- Directional arrows showing data flow
- Traffic visualization for network connections

### Groups
- Visual grouping of related resources
- Collapsible/expandable groups
- Hierarchical grouping support

## Related Components

- [TopologyGraphView](./TopologyGraphView.md): Graph rendering component
- [TopologySidePanel](./TopologySidePanel.md): Side panel for details
- [TopologyControlBar](./TopologyControlBar.md): Control bar component
- [TopologyDataModel](./TopologyDataModel.md): Data model documentation
