import fetch from "cross-fetch";
import merge from "deepmerge";
import { useMemo } from "react";
import isEqual from "lodash/isEqual";
import { ApolloClient, InMemoryCache } from "@apollo/client/core";
import { from } from "@apollo/client/link/core";
import { onError } from "@apollo/client/link/error";
import { HttpLink } from "@apollo/client/link/http";

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_BASE_URL,
  fetch,
});

const errorLink = onError(
  ({ graphQLErrors, networkError, response, operation, forward }) => {
    if (graphQLErrors) {
      for (const { extensions } of graphQLErrors) {
        switch (extensions.code) {
          case "401": {
          }
        }
      }
    }
  },
);

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: from([errorLink, httpLink]),
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: "network-only",
      },
    },
  });
};

type Apollo = ReturnType<typeof createApolloClient>;

let apolloClient: Apollo;

export const initializeApollo = (initialState = null): Apollo => {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(existingCache, initialState, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    _apolloClient.cache.restore(data);
  }
  // ssg or ssr always create a new apollo client
  if (typeof window === "undefined") return _apolloClient;

  // create the apollo client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
};

export const useApollo = (initialState: any): Apollo => {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
};
