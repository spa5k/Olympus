import { cacheExchange } from "@urql/exchange-graphcache";
import { dedupExchange, fetchExchange, ssrExchange } from "urql";
import { devtoolsExchange } from "@urql/devtools";

import {
  LoginMutation,
  LogoutMutation,
  MeDocument,
  MeQuery,
  RegisterMutation,
} from "../src/generated/graphql";
import schema from "../src/generated/introspection";
import { betterUpdateQuery } from "../src/utils/betterUpdateQuery";
import { isServer } from "../src/utils/isServer";

const ssr = ssrExchange({
  isClient: !isServer(),
  // @ts-ignore
  initialState: !isServer() ? window.__URQL_DATA__ : undefined,
});

const cache = cacheExchange({
  schema,
  updates: {
    Mutation: {
      login: (_result, _args, cache, _info) => {
        betterUpdateQuery<LoginMutation, MeQuery>(
          cache,
          { query: MeDocument },
          _result,
          (result, query): MeQuery => {
            if (result.login.errors) {
              return query;
            } else {
              return {
                me: {
                  user: result.login.user,
                },
              };
            }
          }
        );
      },
      register: (_result, _args, cache, _info) => {
        betterUpdateQuery<RegisterMutation, MeQuery>(
          cache,
          { query: MeDocument },
          _result,
          (result, query): MeQuery => {
            if (result.register.errors) {
              return query;
            } else {
              return {
                me: {
                  user: result.register.user,
                },
                // me: result.login.user,
              };
            }
          }
        );
      },
      Logout: (_result, _args, cache, _info) => {
        betterUpdateQuery<LogoutMutation, MeQuery>(
          cache,
          { query: MeDocument },
          _result,
          () => ({
            me: {
              user: null,
            },
          })
        );
      },
    },
  },
  keys: {
    FieldError: () => null,
    UserResponse: (data) => data.id as string,
  },
  // schema: schema,
});

export const urqlClient = (ctx: any) => {
  let cookie: string | undefined = "";
  if (isServer()) {
    cookie = ctx.req?.headers.cookie;
  }
  return {
    url: "http://localhost:4000/graphql",
    fetchOptions: {
      credentials: "include" as const,
      headers: cookie
        ? {
            cookie,
          }
        : undefined,
    },
    exchanges: [
      devtoolsExchange,
      dedupExchange,
      cache,
      ssr, // Add `ssr` in front of the `fetchExchange`
      fetchExchange,
    ],
  };
};
