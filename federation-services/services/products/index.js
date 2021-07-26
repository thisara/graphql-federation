import apollo from 'apollo-server';
import federation from '@apollo/federation';

import typeDefs from './schema/index.js';

import products from './data/products.js'

const { ApolloServer } = apollo;
const  { buildFederatedSchema } = federation;

const resolvers = {
  Product: {
    __resolveReference(object) {
      return products.find(product => product.upc === object.upc);
    }
  },
  Query: {
    topProducts(_, args) {
      return products.slice(0, args.first);
    }
  }/*,
  Mutation = {
    createProduct:(root,args,context,info) => {
        return db.products.create({
            id:args.id,
            name:args.name,
            price:args.price,
            categoryId:args.categoryId
        });
    }*/
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers,
      async onHealthCheck() {    
        console.log('check');
        // Replace the `true` in this conditional with more specific checks!    
        if (true) {      
          return;    
        } else {      
          throw new Error('...');    
        }  
      }
    }
  ])
});

server.listen({ port: 4003 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
