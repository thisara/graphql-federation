import pkgApolloServer from 'apollo-server';
import pkg from '@apollo/gateway';
import express from 'express';
import ns from 'node-schedule';

const { ApolloGateway } = pkg;
const { ApolloServer } = pkgApolloServer
const app = express();
const { schedule } = ns;

/*
* check all service availability
*/
/*
const executor = async () => {
  const fetchResult = await fetch("http://192.168.1.7:4001/graphql", {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      }
  });
  return fetchResult.json();
};
*/
//console.log(executor());

const gateway = new ApolloGateway({

  serviceList: [
    { name: "accounts", url: "http://192.168.1.7:4001/graphql" },
    { name: "reviews", url: "http://192.168.1.7:4002/graphql" },
    { name: "products", url: "http://192.168.1.7:4003/graphql" },
    { name: "inventory", url: "http://192.168.1.7:4004/graphql" }
  ],

  //experimental_pollInterval:1000,
  __exposeQueryPlanExperimental: false
  
});

app.get('/refresh', (request, response) => {
  gateway.load();
  response.sendStatus(200);
  console.log('Gateway refreshed!')
});

const job = ns.scheduleJob('*/1 * * * *', function(){
  gateway.load();
  console.log('Refreshed!');
});

const server = new ApolloServer({
  gateway,
  engine: false,
  subscriptions: false,
});

server.listen().then(({ url }) => {
  console.log(`Server started on ${url}`);
});
