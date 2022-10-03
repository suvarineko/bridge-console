#!/usr/bin/env bash

set -exuo pipefail

./bin/bridge \
    --public-dir=./frontend/public/dist \
    --config=./examples/console-config.yaml \
    --service-ca-file=./examples/ca.crt \
    --user-auth=oidc \
    --k8s-auth=oidc \
    --user-auth-oidc-issuer-url=https://dex.apps.k8s.ose-testing.solution.sbt \
    --v=10 \
    --user-auth-logout-redirect=https://console.apps.k8s.ose-testing.solution.sbt \
    --base-address=https://localhost:9000 \
    --k8s-mode=off-cluster \
    --k8s-mode-off-cluster-endpoint=https://api.k8s.ose-testing.solution.sbt:6443 \
    --k8s-mode-off-cluster-skip-verify-tls=true \
    $@