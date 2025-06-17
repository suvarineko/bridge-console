# YAML Editor Component

The YAML Editor component provides a specialized interface for viewing and editing Kubernetes resource definitions in YAML format within the OpenShift Console frontend.

## Overview

The YAML Editor offers a powerful text-based editing experience for Kubernetes resources, catering to advanced users who prefer direct YAML manipulation. It combines syntax highlighting, validation, schema assistance, and error detection to create a robust editing environment for resource definitions.

## Key Features

### YAML Editing

Comprehensive editing capabilities:
- Syntax highlighting for YAML
- Line numbers and gutter indicators
- Code folding for nested structures
- Search and replace functionality
- Undo/redo history
- Keyboard shortcuts
- Multiple selection and editing
- Auto-indentation and formatting

### Schema Integration

Kubernetes schema assistance:
- Resource schema validation
- Property auto-completion
- Schema-based snippets
- Documentation tooltips
- Required field indication
- Type checking
- Format validation
- Enum value suggestions

### Validation and Errors

Robust error handling:
- Syntax error detection
- Schema validation errors
- Kubernetes API validation
- Error indicators in gutter
- Inline error messages
- Quick fixes for common errors
- Warning for potential issues
- Validation summary

### Resource Operations

Standard resource actions:
- Save/update resources
- Create new resources
- Download YAML content
- Copy to clipboard
- Resource templates and samples
- Import from file
- Compare with live version
- Split view for differences

## Implementation Details

The YAML Editor is implemented using:
- Monaco Editor or CodeMirror
- React for component integration
- Kubernetes schema integration
- YAML parsing and validation libraries
- Custom language server integration
- Redux for state management
- API client for resource operations

## Editor Features

Advanced editor capabilities:
- **Intelligent Autocomplete**: Context-aware suggestions
- **Snippets**: Common YAML patterns
- **Schema Hover**: Documentation on hover
- **Quick Fix**: Automated error correction
- **Format Document**: YAML formatting
- **Go to Definition**: Jump to references
- **Find References**: Find usage of fields
- **Custom Actions**: Resource-specific actions

## Resource Templates

Support for starter templates:
- New resource templates
- Common resource patterns
- Resource examples
- Customizable templates
- Template parameters
- Template categories
- Template documentation
- Plugin-provided templates

## Integration Points

The YAML Editor integrates with:
- **API Client**: For resource operations
- **ResourceModels**: For schema information
- **Validation System**: For YAML validation
- **ResourceDetails**: As a tab in resource details
- **Create Flow**: For YAML-based creation
- **Plugin System**: For editor extensibility
- **Keyboard Shortcuts**: For editor operations
- **Notification System**: For operation results

## User Experience Considerations

Usability enhancements:
- Split view for side-by-side comparison
- Diff view for version comparison
- Full-screen editing mode
- Editor preferences (theme, font size)
- Persistent editor state
- Confirm unsaved changes
- Auto-save drafts
- Keyboard accessibility

## Related Components

- [ResourceDetails](./ResourceDetails.md): Details with YAML tab
- [Forms](./Forms.md): Alternative to YAML editing
- [ResourceList](./ResourceList.md): List view of resources
- [PageLayout](./PageLayout.md): Page structure for the editor
