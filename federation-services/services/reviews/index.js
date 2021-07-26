import apollo from 'apollo-server';
import federation from '@apollo/federation';

const { ApolloServer } = apollo;
const  { buildFederatedSchema } = federation;

import typeDefs from './schema/index.js';

const resolvers = {
  Review: {
    author(review) {
      return { __typename: "User", id: review.authorID };
    }
  },
  User: {
    reviews(user) {
      return reviews.filter(review => review.authorID === user.id);
    },
    numberOfReviews(user) {
      return reviews.filter(review => review.authorID === user.id).length;
    },
    username(user) {
      const found = usernames.find(username => username.id === user.id);
      return found ? found.username : null;
    }
  },
  Product: {
    reviews(product) {
      return reviews.filter(review => review.product.upc === product.upc);
    }
  },
  Query: {
    topReviews(_, args) {
      return reviews.slice(0, args.first);
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

server.listen({ port: 4002 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

const usernames = [
  { id: "1", username: "@ada" },
  { id: "2", username: "@complete" }
];
const reviews = [
  {
    id: "251",
    authorID: "1",
    product: { upc: "1" },
    body: "Love it!"
  },
  {
    id: "2",
    authorID: "1",
    product: { upc: "252" },
    body: "Too expensive."
  },
  {
    id: "3",
    authorID: "2",
    product: { upc: "253" },
    body: "Could be better."
  },
  {
    id: "4",
    authorID: "2",
    product: { upc: "253" },
    body: "Prefer something else."
  }
];
