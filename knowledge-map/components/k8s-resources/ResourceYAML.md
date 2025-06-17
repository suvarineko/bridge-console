# ResourceYAML Component

The ResourceYAML component provides a specialized interface for viewing and editing Kubernetes resources in YAML format within the OpenShift Console.

## Overview

ResourceYAML offers a powerful YAML editor for direct interaction with Kubernetes resource definitions. It combines syntax highlighting, validation, and auto-completion with save capabilities to provide a comprehensive editing experience for advanced users who prefer working with raw YAML.

## Key Features

### YAML Editing

Full-featured YAML editing capabilities:
- Syntax highlighting for YAML and Kubernetes schemas
- Intelligent indentation and formatting
- Line numbers and gutter indicators
- Error and warning visualization
- Fold/unfold sections
- Search and replace
- Multi-cursor editing

### Schema Validation

Real-time validation against Kubernetes schemas:
- Validation against API schemas
- Required field checking
- Type validation
- Format validation
- Structural validation
- Custom validation rules for OpenShift resources
- Warning and error indicators

### Auto-Completion

Intelligent assistance for editing:
- Resource kind-specific field suggestions
- API version and kind completion
- Label and annotation key completion
- Value suggestions for known fields
- Documentation tooltips
- Reference links to API documentation
- Keyboard shortcuts for completion

### Save and Apply

Resource update capabilities:
- Save changes to cluster
- Validation before save
- Difference highlighting
- Conflict detection and resolution
- Success/failure feedback
- Undo/redo capability
- Change preview

## Implementation Details

The ResourceYAML component is implemented using:
- Monaco Editor or CodeMirror for the editor experience
- Integration with Kubernetes API for saving
- JSON Schema validation for YAML
- Custom OpenShift validation rules
- React for component structure
- Redux for state management

## Advanced Features

Additional capabilities for power users:
- YAML sample templates
- Common resource snippets
- Switch between YAML and JSON
- Download YAML to file
- Copy to clipboard
- Full-screen editing mode
- Editor preferences (theme, font size, etc.)

## Keyboard Shortcuts

Productivity-enhancing shortcuts:
- Common editor shortcuts (save, find, etc.)
- YAML-specific shortcuts
- Kubernetes-specific shortcuts
- Custom configurable shortcuts
- Shortcut reference guide
- Keyboard accessibility

## Integration Points

The ResourceYAML integrates with:
- **Kubernetes API**: For loading and saving resources
- **API Schema System**: For validation and completion
- **Resource Details**: As a tab in detail views
- **Create Flow**: For YAML-based resource creation
- **Import Flow**: For importing YAML resources
- **Compare View**: For comparing revisions

## Related Components

- [ResourceDetails](./ResourceDetails.md): Shows resources with YAML tab
- [ResourceList](./ResourceList.md): Lists resources that can be edited
- [ResourceFactory](./ResourceFactory.md): Creates specialized components
- [ResourceModels](./ResourceModels.md): Provides schema information
