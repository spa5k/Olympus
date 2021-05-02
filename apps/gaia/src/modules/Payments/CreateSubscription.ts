import { User } from "@generated/type-graphql";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

import { GaiaContext } from "../../config/context";
import { stripe } from "@olympus/stripe";
import { logger } from "@olympus/logger";
import Stripe from "stripe";

@Resolver(User)
export class CreateSubscription {
  @Mutation(() => Boolean)
  async createSubscription(
    @Arg("type") type: "GOLD" | "SILVER" | "COPPER",
    @Arg("id") id: string,
    @Arg("address") address: string,
    @Ctx() { req, prisma }: GaiaContext
  ): Promise<boolean> {
    if (!req.session || !req.session.userId) {
      return false;
    }

    logger.info("address", address);

    const user = await prisma.user.findUnique({
      where: {
        id: req.session.userId,
      },
    });

    if (!user) {
      return false;
    }

    const { stripeId } = user;

    let priceId: string;
    if (type === "GOLD") {
      priceId = process.env.GOLD_PLAN_ID;
    } else if (type === "SILVER") {
      priceId = process.env.SILVER_PLAN_ID;
    } else {
      priceId = process.env.COPPER_PLAN_ID;
    }

    if (!stripeId) {
      const stripeData = await stripe.customers.create({
        email: user.email,
        name: user.name,
        address: {
          line1: address,
          city: "California",
          country: "US",
          state: "CA",
        },
      });

      await prisma.user.update({
        where: {
          id: req.session.userId,
        },
        data: {
          stripeId: stripeData.id,
        },
      });
    }

    let paymentMethod;

    if (stripeId || user.stripeId) {
      try {
        paymentMethod = await stripe.paymentMethods.attach(id, {
          customer: stripeId ? stripeId : user.stripeId,
        });
      } catch (error) {
        logger.error("paymentMethod Error", error);
      }
    }
    logger.info("paymentMethod successful");

    let subscription: Stripe.Response<Stripe.Subscription>;

    if (paymentMethod) {
      try {
        subscription = await stripe.subscriptions.create({
          customer: user.stripeId,
          default_payment_method: paymentMethod.id,
          items: [
            {
              price: priceId,
            },
          ],
        });
        logger.info("subscription successful");
      } catch (error) {
        logger.error("subscription error", error);
      }
    }

    logger.info("subscription", subscription);
  }
}
