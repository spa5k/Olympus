import { loadStripe, StripeCardElement } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    console.log("n");
    const payment = await stripe?.createPaymentMethod({
      type: "card",
      card: elements?.getElement(CardElement) as StripeCardElement,
    });
    console.log(payment?.paymentMethod);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export const CheckoutForm = () => (
  <Elements
    stripe={stripePromise}
    key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
  >
    <Checkout />
  </Elements>
);
