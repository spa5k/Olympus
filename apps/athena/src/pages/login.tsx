import { Field, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React from "react";

import { getApollo } from "../config/getApollo";
import { useLoginMutation } from "../graphql/mutations/Login.graphql";

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
        onSubmit={async (values) => {
          const response = await login({ variables: values });
          if (response.data?.login.errors) {
            console.log("err", response.data.login.errors);
          } else if (response.data?.login.user) {
            console.log(response.data.login.user);
            router.push("/");
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
