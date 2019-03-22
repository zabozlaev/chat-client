import Vue from "vue";

import VueApollo from "vue-apollo";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import ApolloClient from "apollo-client";
import { ApolloLink, concat, split } from "apollo-link";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

export const gqlQuery = (query, variables) => {
  return apolloClient.query({
    query,
    variables
  });
};

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: localStorage.getItem("accessToken") || ""
    }
  });

  return forward(operation);
});

export const gqlMutation = (mutation, variables) => {
  return apolloClient.mutate({
    mutation,
    variables
  });
};

const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql"
});
const wsLink = new WebSocketLink({
  uri: "ws://localhost:4000/graphql",
  options: {
    reconnect: true,
    connectionParams: {
      authorization: localStorage.getItem("accessToken") || ""
    }
  }
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, link),
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
});

Vue.use(VueApollo);

export default apolloProvider;
