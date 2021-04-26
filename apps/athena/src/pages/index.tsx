import NextLink from "next/link";
import React from "react";

import { getApollo } from "../config/getApollo";
import { useLogoutMutation } from "../graphql/mutations/Logout.graphql";
import { useMeQuery, MeQuery, MeDocument } from "../graphql/queries/Me.graphql";
import { isServer } from "../utils/isServer";

function Index(): JSX.Element {
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  const [logout] = useLogoutMutation();

  return (
    <div>
      {!data?.me.user && (
        <>
          <NextLink href="/login">login</NextLink>
          <NextLink href="/register">register</NextLink>
        </>
      )}
      <div>
        {data?.me.user && (
          <div>
            <p>{data?.me?.user?.id}</p>
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
        )}
      </div>
    </div>
  );
}

export default getApollo({ ssr: true })(Index);
