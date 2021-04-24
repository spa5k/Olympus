import { CheckoutForm } from "src/components/checkoutForm";
import { getApollo } from "src/config/getApollo";

const CheckoutPage = () => {
  return <CheckoutForm />;
};

export default getApollo({ ssr: false })(CheckoutPage);
