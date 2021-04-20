import { urqlClient } from "../config/urqlClient";
import { useLoginMutation } from "../src/generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Form, Formik, Field } from "formik";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [, login] = useLoginMutation();

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
        }}
        onSubmit={async (values) => {
          const response = await login(values);
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
export default withUrqlClient(urqlClient)(Login);
