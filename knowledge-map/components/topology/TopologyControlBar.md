# TopologyControlBar Component

The TopologyControlBar component provides a set of controls and filters for customizing the display and interaction with the Topology view in the OpenShift Console.

## Overview

The TopologyControlBar serves as the primary interface for manipulating how topology data is displayed and filtered. It offers tools for view switching, filtering, grouping, and display options that allow users to tailor the topology visualization to their specific needs.

## Key Features

### View Switching

Controls for alternate visualizations:
- Graph view / List view toggle
- Fullscreen mode toggle
- Condensed view option
- Fit-to-screen control
- Zoom controls (zoom in, zoom out, reset zoom)
- View mode presets (application view, resource view)
- View state persistence

### Resource Filtering

Comprehensive filtering capabilities:
- Filter by resource kind
- Filter by application
- Filter by label
- Filter by name
- Filter by status
- Saved filter presets
- Filter combination and chaining
- Filter persistence

### Display Options

Visualization customization:
- Display options for node badges
- Health visualization options
- Traffic visualization toggle
- Label visibility options
- Icon size controls
- Connection style options
- Animation toggle
- Detail level adjustment

### Grouping Controls

Resource organization options:
- Group by application
- Group by label
- Group by namespace
- Group by owner
- Nested grouping options
- Group expansion controls
- Group visualization options
- Custom grouping rules

## Implementation Details

The TopologyControlBar is implemented using:
- React components with PatternFly
- Responsive design for different screen sizes
- Filter state management with Redux
- User preference persistence
- Keyboard accessibility
- Tab-based organization of controls
- Dynamic control visibility based on context

## Control Categories

The controls are organized into categories:
- **View Controls**: Graph/List toggle, fullscreen, etc.
- **Filter Controls**: Resource type, name, label filters
- **Display Controls**: Visual options, detail level
- **Layout Controls**: Grouping, layout algorithm
- **Zoom Controls**: Zoom in/out, fit to screen
- **Action Controls**: Create, import, add resources

## User Experience

The control bar prioritizes usability:
- Contextual tooltips for controls
- Visual feedback for active filters
- Filter badge count indicators
- Common presets for quick access
- Keyboard shortcuts for frequent operations
- Responsive design for different screens
- Collapsible sections for mobile

## Filter Mechanism

The filtering system supports:
- Simple key-value filters
- Complex expression filters
- Regular expression matching
- Inclusive and exclusive filters
- Multiple filter combination
- Filter persistence between sessions
- Filter sharing between views
- Default filters by context

## Integration Points

The control bar integrates with:
- **GraphView**: Controls visualization options
- **ListView**: Controls list display options
- **TopologySidePanel**: Coordinated selection
- **User Preferences**: Persists user choices
- **URL Parameters**: For sharable filter state
- **Plugin System**: For custom filter extensions
- **Search System**: For resource name filtering

## Related Components

- [TopologyView](./TopologyView.md): Parent component
- [GraphView](./GraphView.md): Graph visualization controlled by the bar
- [ListView](./ListView.md): List view controlled by the bar
- [TopologySidePanel](./TopologySidePanel.md): Coordinated with selection
