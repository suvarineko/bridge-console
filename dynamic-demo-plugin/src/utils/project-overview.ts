export const getUtilizationQuery = (namespace: string) =>
    `count(node_namespace_pod:kube_pod_info:{namespace='${namespace}'}) BY (namespace)`
    // `count(kube_running_pod_ready{namespace='${namespace}'}) BY (namespace)`
