const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./apolloServer/typeDefs/students");
const rootResolver = require("./apolloServer/resolvers/rootResolver");

async function startServer() {
  // create express application
  const app = express();

  // to access .env file in express application
  const config = dotenv.config();

  // create apollo server instance
  const apolloserver = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: rootResolver,
    csrfPrevention: true,
    cache: "bounded",
  });

  try {
    // start apollo server
    await apolloserver.start();
    apolloserver.applyMiddleware({ app: app, path: "/graphql" });

    mongoose
      .connect(`${process.env.DATABASE_CONNECTION_URL}`)
      .then((res) => {
        app.listen(`${process.env.DB_PORT}`, () => {
          console.log(
            `Your server is running at PORT ${process.env.DB_PORT} ...`
          );
        });
      })
      .catch((err) => {
        console.log("database connection error", err);
      });
  } catch (err) {
    console.log("apollo server connection error", err);
  }
}

startServer();
