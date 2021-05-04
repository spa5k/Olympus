import { ApolloClient, InMemoryCache } from "@apollo/client";
import type { NextPageContext } from "next";
import { withApollo } from "next-apollo";
import { TypedTypePolicies } from "../graphql/fragments/FieldError.graphql";

// Remember to change the location on this path according to where stuff is getting generated

const typePolicies: TypedTypePolicies = {
  User: {
    keyFields: ["id"],
  },
  UserResponse: {
    keyFields: [],
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

export const getApollo = withApollo(createClient);
