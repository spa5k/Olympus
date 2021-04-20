import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { NextPageContext } from "next";
import { withApollo as createWithApollo } from "next-apollo";

import type { TypedTypePolicies } from "graphql-let/__generated__/apps/athena/src/graphql/queries/me.graphql";

const typePolicies: TypedTypePolicies = {
  Review: {
    fields: {
      description: {
        merge: true,
      },
    },
  },
};

const createClient = (ctx?: NextPageContext) =>
  new ApolloClient({
    cache: new InMemoryCache({
      typePolicies,
    }),
    credentials: "include",
    headers: {
      cookie:
        (typeof window === "undefined"
          ? ctx?.req?.headers.cookie
          : undefined) ?? "",
    },

    uri: "http://localhost:4000/graphql",
    queryDeduplication: true,
    connectToDevTools: true,
  });

export const getApollo = createWithApollo(createClient);
