import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { SubscriptionClient } from "subscriptions-transport-ws";
import { WebSocketLink } from "@apollo/client/link/ws";

// query and mutation link
const httpLink = new HttpLink({
  uri: "https://graphql-compose.herokuapp.com/northwind",
});

// subscription link
const wsLink = new WebSocketLink(
  new SubscriptionClient({
    uri: "ws://localhost:4000/subscriptions",
  }),
);

// conditionally setup link for query and mutation or subscription
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// Initialize ApolloClient
const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />{" "}
    </ApolloProvider>
  );
}

export default MyApp;
