import NextLink from "next/link";
import React from "react";
import { getApollo } from "src/config/getApollo";
import { useLogoutMutation } from "src/graphql/mutations/Logout.graphql";
import {
  MeDocument,
  MeQuery,
  useMeQuery,
} from "src/graphql/queries/me.graphql";
import { isServer } from "src/utils/isServer";

function Index(): JSX.Element {
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  const [logout] = useLogoutMutation();

  let body = null;

  // data is loading
  if (loading) {
    // user not logged in
  } else if (!data?.me.user) {
    body = (
      <>
        <NextLink href="/login">login</NextLink>
        <NextLink href="/register">register</NextLink>
      </>
    );
    // user is logged in
  } else {
    body = (
      <div>
        <p>{data.me.user.id}</p>

        <button
          onClick={async () => {
            await logout({
              update: (cache) => {
                cache.writeQuery<MeQuery>({
                  query: MeDocument,
                  data: {
                    __typename: "Query",
                    me: {
                      user: null,
                      __typename: "UserResponse",
                    },
                  },
                });
              },
            });
          }}
        >
          logout
        </button>
      </div>
    );
  }

  return <div>{body}</div>;
}

export default getApollo({ ssr: true })(Index);
