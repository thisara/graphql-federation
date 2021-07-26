//curl -sSL https://rover.apollo.dev/nix/latest | sh

//rover subgraph introspect http://localhost:4001 > accounts.graphql
//rover subgraph introspect http://localhost:4002 > reviews.graphql
//rover subgraph introspect http://localhost:4003 > products.graphql
//rover subgraph introspect http://localhost:4004 > inventory.graphql

//rover supergraph compose --config ./supergraph.yaml

//rover subgraph publish my-graph@local --name $APOLLO_SUBGRAPH_NAME --schema ./schema.graphql --routing-url http://localhost:$APOLLO_LOCAL_PORT/graphql
//rover graph check my-graph@test --schema ./supergraph.graphql

/*
pipelines:
  default:
    - step: *rover-subgraph-check

  branches:
    '{main,master}':
      - step: *rover-subgraph-check
      - step: *local-publish

      */