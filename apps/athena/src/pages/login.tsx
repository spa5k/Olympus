import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";
import { getApollo } from "src/config/getApollo";
import { useLoginMutation } from "src/graphql/mutations/Login.graphql";
import { MeDocument, MeQuery } from "src/graphql/queries/me.graphql";
import { toErrorMap } from "src/utils/toErrorMap";

const Login = (): JSX.Element => {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: {
                    user: data?.login.user,
                    errors: null,
                    __typename: "UserResponse",
                  },
                },
              });
            },
          });
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              // worked
              router.push("/");
            }
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
    </div>
  );
};
export default getApollo({ ssr: false })(Login);
