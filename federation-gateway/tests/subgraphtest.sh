echo "fetching accounts subgraph..."
rover subgraph introspect http://localhost:4001 > accounts.graphql

echo "fetching reviews subgraph..."
rover subgraph introspect http://localhost:4002 > reviews.graphql

echo "fetching products subgraph..."
rover subgraph introspect http://localhost:4003 > products.graphql

echo "fetching inventory subgraph..."
rover subgraph introspect http://localhost:4004 > inventory.graphql
echo "done."