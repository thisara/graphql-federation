import apollo from 'apollo-server';
import federation from '@apollo/federation';

const { ApolloServer } = apollo;
const  { buildFederatedSchema } = federation;

import typeDefs from './schema/index.js';

const resolvers = {
  Query: {
    me() {
      return users[0];
    }
  },
  User: {
    __resolveReference(object) {
      return users.find(user => user.id === object.id);
    }
  }
};

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 4001 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const users = [
  {
    id: "1",
    name: "John",
    birthDate: "1990-12-10",
    username: "@john"
  },
  {
    id: "2",
    name: "Alan",
    birthDate: "1990-06-23",
    username: "@alan"
  }
];
