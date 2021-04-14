import { User } from "@olympus/tg";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

import { GaiaContext } from "../../config/context";
import { stripe } from "./Stripe";

@Resolver(User)
export class CreateSubscription {
  @Mutation(() => Boolean)
  async createSubscription(
    @Arg("type") type: String,
    @Ctx() { req, prisma }: GaiaContext
  ) {
    if (!req.session.userId) {
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

    let { stripeId } = user;

    if (!stripeId) {
      const customer = await stripe.customers.create({
        email: user.email,
      });
    }
  }
}
