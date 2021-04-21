import { urqlClient } from "../config/urqlClient";
import { useRegisterMutation } from "../src/generated/graphql";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Form, Formik, Field } from "formik";
import { useRouter } from "next/router";

const Register = () => {
  const router = useRouter();
  const [, register] = useRegisterMutation();

  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
          name: "",
        }}
        onSubmit={async (values) => {
          const response = await register(values);
          if (response.data?.register.user) {
            router.push("/");
          }
        }}
      >
        <Form>
          <Field name="email" placeholder="email" />
          <Field name="password" placeholder="password" type="password" />
          <Field name="name" placeholder="name" type="text" />
          <button type="submit">register</button>
        </Form>
      </Formik>
    </div>
  );
};
export default withUrqlClient(urqlClient)(Register);
