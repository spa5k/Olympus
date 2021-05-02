import React from "react";
import { CheckoutForm } from "../components/checkoutForm";
import { getApollo } from "../config/getApollo";

const CheckoutPage = () => {
  return <CheckoutForm />;
};

export default getApollo({ ssr: false })(CheckoutPage);
