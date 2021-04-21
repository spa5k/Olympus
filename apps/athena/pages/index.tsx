import { Field, Form, Formik } from "formik";
import NextLink from "next/link";
import React from "react";

import { getApollo } from "../config/getApollo.ts";
import { useLoginMutation } from "../src/graphql/mutations/Login.graphql";
import { useLogoutMutation } from "../src/graphql/mutations/Logout.graphql";
import { useMeQuery } from "../src/graphql/queries/me.graphql";
import { isServer } from "../src/utils/isServer";

function Index() {
  const { data, loading } = useMeQuery({
    skip: isServer(),
  });
  const [logout] = useLogoutMutation();

  const [login] = useLoginMutation();
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */

  let body = null;

  // data is loading
  if (loading) {
    // user not logged in
  } else if (!data?.me.user) {
    body = (
      <>
        <NextLink href="/login">login</NextLink>
        <NextLink href="/register">register</NextLink>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
          }}
          onSubmit={async (values) => {
            const response = await login({ variables: values });
            if (response.data?.login.errors) {
              console.log("err", response.data.login.errors);
            } else if (response.data?.login.user) {
              console.log(response.data.login.user.id);
              // router.push("/");
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <Field name="email" placeholder="email" />
              <Field name="password" placeholder="password" type="password" />
              <button type="submit">login</button>
              {isSubmitting}
            </Form>
          )}
        </Formik>
      </>
    );
    // user is logged in
  } else {
    body = (
      <div>
        <p>{data.me.user.id}</p>

        <button
          onClick={() => {
            logout();
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
