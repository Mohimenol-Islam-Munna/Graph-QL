import "../styles/globals.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "bootstrap/dist/css/bootstrap.css";

export const client = new ApolloClient({
  uri: "https://graphql-compose.herokuapp.com/northwind",
  cache: new InMemoryCache(),
});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      {" "}
      <Component {...pageProps} />{" "}
    </ApolloProvider>
  );
}

export default MyApp;
