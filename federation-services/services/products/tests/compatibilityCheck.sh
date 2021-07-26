echo "fetching accounts subgraph..."
rover subgraph introspect http://localhost:4001 > accounts.graphql

echo "fetching reviews subgraph..."
rover subgraph introspect http://localhost:4002 > reviews.graphql

echo "fetching products subgraph..."
rover subgraph introspect http://localhost:4003 > products.graphql

echo "fetching inventory subgraph..."
rover subgraph introspect http://localhost:4004 > inventory.graphql
echo "done."

echo "composing live supergraph :"
rover supergraph compose --config ./live_supergraph.yaml > ./live_supergraph.graphql
echo "done."

echo "composing supergraph with product subgraph:"
rover supergraph compose --config ./supergraph.yaml > ./supergraph.graphql
echo "done."

echo "compatibility checking for local and live supergraphs..."
graphql-inspector diff live_supergraph.graphql supergraph.graphql