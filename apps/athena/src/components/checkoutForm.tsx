/* eslint-disable @typescript-eslint/ban-ts-comment */
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useCreateSubscriptionMutation } from "../graphql/mutations/CreateSubscription.graphql";
import { useMeQuery } from "../graphql/queries/Me.graphql";
import { useState } from "react";
import { useRouter } from "next/router";

const Checkout = ({ type }: { type: "GOLD" | "SILVER" | "COPPER" }) => {
  const stripe = useStripe();
  const router = useRouter();
  const elements = useElements();
  const [subscription] = useCreateSubscriptionMutation();
  const { data } = useMeQuery();
  const [messages, setMessages] = useState("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // @ts-ignore
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      // @ts-ignore
      card: elements?.getElement(CardElement),
      billing_details: {
        name: data?.me.user?.name as string,
        email: data?.me.user?.email as string,
        address: {
          line1: address,
          city: "California",
          country: "US",
          state: "CA",
        },
      },
    });
    console.log(paymentMethod);
    if (error) {
      setMessages(error.message);
      return;
    }
    setMessages(`Payment method created ${paymentMethod.id}`);

    await subscription({
      variables: {
        type,
        id: paymentMethod.id,
        address,
      },
    });
  };

  if (!data?.me.user) {
    return (
      <>
        <button onClick={() => router.push("/register")}>register</button>
        <button onClick={() => router.push("/login")}>login</button>

        <p>Fk off</p>
      </>
    );
  }

  return (
    <>
      <p>{messages}</p>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "400px", margin: "20px auto" }}
      >
        <input
          type="text"
          name="address"
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <CardElement />
        <button
          type="submit"
          disabled={!stripe}
          style={{ margin: "20px auto" }}
        >
          Pay for {type}
        </button>
      </form>
    </>
  );
};

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export const CheckoutForm = () => {
  return (
    <div>
      <Elements
        stripe={stripePromise}
        key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      >
        <Checkout type="COPPER" />
      </Elements>
      {/* <Elements
        stripe={stripePromise}
        key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      >
        <Checkout type="SILVER" />
      </Elements>
      <Elements
        stripe={stripePromise}
        key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      >
        <Checkout type="GOLD" />
      </Elements> */}
    </div>
  );
};
