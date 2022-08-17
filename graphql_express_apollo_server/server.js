const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./apolloServer/typeDefs/students");
const rootResolver = require("./apolloServer/resolvers/rootResolver");

async function startServer() {
  // create express application
  const app = express();

  // create apollo server instance
  const apolloserver = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: rootResolver,
    csrfPrevention: true,
    cache: "bounded",
  });

  // start apollo server
  await apolloserver.start();
  apolloserver.applyMiddleware({ app: app, path: "/" });

  const PORT = "8585";
  app.listen(PORT, () => {
    console.log(`Your server is running at PORT ${PORT} ...`);
  });
}

startServer();
