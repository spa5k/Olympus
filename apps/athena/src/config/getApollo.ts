import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { NextPageContext } from "next";
import { withApollo as createWithApollo } from "next-apollo";
import { TypedTypePolicies } from "src/graphql/queries/me.graphql";

// Remember to change the location on this path according to where stuff is getting generated

const typePolicies: TypedTypePolicies = {};

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
