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
import { isServer } from "../utils/isServer";

const Checkout = ({ type }: { type: "GOLD" | "SILVER" | "COPPER" }) => {
  const stripe = useStripe();
  const router = useRouter();
  const elements = useElements();
  const [subscription] = useCreateSubscriptionMutation();
  const { data } = useMeQuery({ skip: isServer() });
  const [messages, setMessages] = useState("");
  const [address, setAddress] = useState<string>("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  if (!data?.me.user) {
    return (
      <>
        <button onClick={() => router.push("/register")}>register</button>
        <button onClick={() => router.push("/login")}>login</button>
      </>
    );
  }

  if (data.me.user.patronageType !== "FREE") {
    return (
      <>
        <p>You are already subscribed- {data.me.user.patronageType}</p>
        <button onClick={() => router.push("/")}>Homepage</button>
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
          placeholder="address"
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

export const CheckoutForm = () => {
  return <div></div>;
};

{
  /* <Elements
        stripe={stripePromise}
        key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}
      >
        <Checkout type="COPPER" />
      </Elements> */
}
