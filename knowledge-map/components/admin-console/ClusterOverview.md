# Cluster Overview Component

The Cluster Overview component provides administrators with a comprehensive dashboard displaying the high-level health, status, and configuration of an OpenShift cluster.

## Overview

The Cluster Overview serves as the primary landing page for cluster administrators, offering a consolidated view of critical cluster information. It's designed to provide immediate insight into the cluster's operational state and highlight any issues requiring attention.

## Key Features

### Status Cards

The component displays a set of status cards that show:
- Cluster details (version, update status)
- Control plane health
- Cluster operators status
- Node health and capacity
- Cluster resource utilization
- Alert status and notifications

### Resource Summaries

Provides overviews of key resources:
- Projects and namespace counts
- Pod distribution across nodes
- Storage utilization
- Network policy status
- Security compliance status

### Health Monitoring

Offers real-time health indicators:
- Kubernetes API responsiveness
- etcd health status
- Critical component status
- Resource constraint warnings
- Certificate expiration alerts

### Inventory Panels

Shows inventory counts and statuses for:
- Nodes (master, worker, infra)
- Cluster operators
- Persistent volumes
- Storage classes
- Machine sets/machines

## Dashboard Layout

The dashboard is organized into several sections:
1. **Status Section**: Critical cluster status indicators
2. **Details Section**: Basic cluster configuration and identification
3. **Utilization Section**: Resource consumption metrics
4. **Activity Section**: Recent events and changes
5. **Inventory Section**: Resource counts and quick links
6. **Updates Section**: Cluster update status and controls

## Data Sources

The Cluster Overview aggregates data from multiple sources:
- Kubernetes API server
- OpenShift API
- Prometheus metrics
- OpenShift monitoring stack
- Operator status APIs
- Cluster Version Operator

## Component Implementation

The Cluster Overview is implemented as a modular dashboard:
- Uses PatternFly dashboard card components
- Implements responsive layout for various screen sizes
- Supports plugin extensions for additional cards
- Provides asynchronous data loading with proper loading states
- Implements real-time updates for critical metrics

## Integration Points

The component integrates with:
- Cluster Version Operator for update information
- Monitoring stack for metrics and alerts
- Node management for node status
- Operator Lifecycle Manager for operator status
- Cluster authentication operator for authentication status

## Related Components

- [Workloads](./Workloads.md): Manages workload resources shown in inventory
- [Operators](./Operators.md): Details on the operators summarized in the overview
- [Monitoring Components](../monitoring/README.md): Provides the metrics displayed
- [Storage](./Storage.md): Details on storage resources summarized in the overview
