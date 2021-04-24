import { User, Patronage } from "@generated/type-graphql";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

import { GaiaContext } from "../../config/context";
import { stripe } from "@olympus/stripe";

@Resolver(User)
export class CreateSubscription {
  @Mutation(() => Boolean)
  async createSubscription(
    @Arg("type") type: "GOLD" | "SILVER" | "COPPER",
    @Ctx() { req, prisma }: GaiaContext
  ): Promise<boolean> {
    if (!req.session || !req.session.userId) {
      return false;
    }

    const user = await prisma.user.findUnique({
      where: {
        id: req.session.userId,
      },
    });

    if (!user) {
      return false;
    }

    const { stripeId } = user;

    let planId: string;
    if (type === "GOLD") {
      planId = process.env.GOLD_PLAN_ID;
    } else if (type === "SILVER") {
      planId = process.env.SILVER_PLAN_ID;
    } else {
      planId = process.env.COPPER_PLAN_ID;
    }

    if (!stripeId) {
      await stripe.customers.create({
        email: user.email,
      });
    }

    const subs = await stripe.subscriptions.create({
      customer: stripeId,
      items: [
        {
          price: planId,
          quantity: 1,
        },
      ],
    });

    console.log(subs);
    return true;
  }
}
