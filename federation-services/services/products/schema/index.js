import pkg from 'apollo-server';
import fs from 'fs';
import path from 'path';

import load from '@graphql-tools/load';
import graphqlFileLoader from '@graphql-tools/graphql-file-loader';

const { gql } = pkg;
const { loadDocuments } = load;
const { GraphQLFileLoader } = graphqlFileLoader;
//const { path } = p;
/*
async function getTypeDefinitions() {
/*
    const typeDefs = await loadDocuments('./schema.graphql', {
        loaders: [
            new GraphQLFileLoader()
        ]
    });

    const typeDefs = fs.readFileSync('./services/products/schema/schema.graphql',{encoding:'utf-8'})

    return gql` ${typeDefs}`;
}
*/
//const typeDefs = fs.readFileSync('./services/products/schema/schema.graphql',{encoding:'utf-8'})

/*
const productsDataSource = new RemoteGraphQLDataSource({
  url: 'http://localhost:8085/graphql'
});

const introspectionResult = await introspectSchema(
  new HttpLink({ uri: 'http://localhost:8085/graphql' })
);

const schema2 = await makeRemoteExecutableSchema({
  schema: introspectionResult,
  link: new HttpLink({ uri: 'http://localhost:8085/graphql' })
});
*/

/*
const typeDefs = gql`
  extend type Query {
    topProducts(first: Int = 5): [Product]
  }

  type Product @key(fields: "upc") {
    upc: String!
    name: String
    price: Int
    weight: Int
  }`;*/

//path.resolve(__dirname,

  //const td = fs.readFileSync('./services/products/schema/schema.graphql',{encoding:'utf-8'})

  //__dirname = fs.realpathSync('.');

  const td = fs.readFileSync(path.resolve(fs.realpathSync('.'),'./schema/schema.graphql'),{encoding:'utf-8'})

  const typeDefs = gql`${td}`;

export default typeDefs;