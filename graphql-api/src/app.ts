import { ApolloServer } from "apollo-server";

import { ApolloGateway } from "@apollo/gateway";

const gateway = new ApolloGateway({
  serviceList: [
    { name: "albums", url: "http://localhost:8001" },
    { name: "artists", url: "http://localhost:8002" },
  ],
});
const server = new ApolloServer({
  gateway,
});

server.listen().then(({ url }) => {
  console.log(`🚀 GraphQL server ready at ${url}`);
});
