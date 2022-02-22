import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  split,
  HttpLink,
} from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { WebSocketLink } from "@apollo/client/link/ws";
import { BrowserRouter } from "react-router-dom";

// query and mutation link
const httpLink = new HttpLink({
  uri: "https://graphql-compose.herokuapp.com/northwind",
});

// subscription link
const wsLink = new WebSocketLink({
  uri: "wss://graphql-compose.herokuapp.com/northwind",
  options: {
    reconnect: true,
  },
});

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

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
