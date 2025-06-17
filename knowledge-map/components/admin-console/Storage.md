# Storage Components

The Storage components in the Administrator Console provide interfaces for managing cluster storage resources, configurations, and provisioning.

## Overview

The Storage section enables administrators to configure, monitor, and manage all aspects of persistent storage within an OpenShift cluster. It provides tools for managing both infrastructure-level storage resources and application-level storage claims.

## Key Components

### Storage Classes

Interfaces for managing StorageClass resources:
- Storage class creation and configuration
- Provider-specific parameter management
- Default storage class designation
- Reclaim policy configuration
- Volume binding mode management

### Persistent Volumes

Components for PersistentVolume resources:
- PV listing with status and capacity
- PV details and configuration
- Manual PV provisioning
- PV reclamation and lifecycle management
- Volume attachment status

### Persistent Volume Claims

Interfaces for PVC resources:
- PVC creation and management
- Storage request configuration
- Access mode selection
- Volume mode configuration
- Claim status and binding visualization

### Volume Snapshots

Components for VolumeSnapshot resources:
- Snapshot class configuration
- Volume snapshot creation
- Snapshot restoration to new volumes
- Snapshot status monitoring
- Snapshot scheduling integration

### Object Bucket Claims

Interfaces for S3-compatible object storage:
- Object bucket claim creation
- Bucket access management
- Object storage browsing
- Bucket policy configuration
- Bucket metrics and utilization

### Storage Operators

Components for storage-related operators:
- OpenShift Container Storage operator
- CSI driver operators
- Storage provider-specific operators
- Local storage operator
- Storage configuration operators

## Common Functionality

All storage components provide:
- Resource YAML editing
- Status monitoring and visualization
- Event tracking for storage operations
- Multi-namespace views
- Capacity and usage visualization

## Implementation Details

The storage components utilize:
- Storage provider-specific form fields
- Dynamic provisioning workflows
- Status polling for long-running operations
- Integration with CSI drivers
- Resource validation against storage limits

## Storage Visualization

Specialized visualization features include:
- PV-to-PVC relationship diagrams
- Storage class usage breakdowns
- Capacity utilization graphs
- Volume snapshot lineage
- Storage topology visualization

## Integration Points

Storage components integrate with:
- Container Storage Interface (CSI) drivers
- Cloud provider storage APIs
- Storage operators
- Cluster resource management
- Workload volume mounts
- Operator Lifecycle Manager for storage operators

## Related Components

- [ClusterOverview](./ClusterOverview.md): Summary of storage health and capacity
- [Workloads](./Workloads.md): Workloads using persistent storage
- [Operators](./Operators.md): Storage-related operators management
- [Settings](./Settings.md): Cluster-wide storage settings
