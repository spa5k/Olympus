/* eslint-disable @typescript-eslint/ban-ts-comment */
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
    @Arg("paymentMethodId") paymentMethodId: string,
    @Arg("address") address: string,
    @Ctx() { req, prisma }: GaiaContext
  ) {
    if (!req.session || !req.session.userId) {
      return false;
    }

    const { userId } = req.session;

    logger.info("address", address);

    const user = await prisma.user.findUnique({
      where: {
        id: req.session.userId,
      },
      include: {
        stripe: {
          select: {
            stripeId: true,
          },
        },
      },
    });

    if (!user) {
      return false;
    }

    let { stripeId } = user.stripe;

    let priceId: string;
    if (type === "GOLD") {
      priceId = process.env.GOLD_PLAN_ID;
    } else if (type === "SILVER") {
      priceId = process.env.SILVER_PLAN_ID;
    } else {
      priceId = process.env.COPPER_PLAN_ID;
    }

    let stripeData: Stripe.Response<Stripe.Customer>;

    if (!stripeId) {
      stripeData = await stripe.customers.create({
        email: user.email,
        name: user.name,
        address: {
          line1: address,
          city: "California",
          country: "US",
          state: "CA",
        },
      });
      // TODO: PAYMENT METHOD IS MISSING
      await prisma.user.update({
        where: {
          id: req.session.userId,
        },
        data: {
          stripe: {
            create: {
              stripeId: stripeData.id,
              name: user.name,
              email: user.email,
              address,
              metadata: stripeData.metadata,
              currency: "USD",
              shipping: address,
              description: `Account for user - ${user.name}, id - ${user.id}`,

              // phone:phone
            },
          },
        },
      });

      stripeId = stripeData.id;
    }

    if (stripeId) {
      try {
        const subscription: Stripe.Response<Stripe.Subscription> = await stripe.subscriptions.create(
          {
            customer: stripeId,
            payment_behavior: "default_incomplete",
            expand: ["latest_invoice.payment_intent"],
            items: [
              {
                price: priceId,
              },
            ],
          }
        );
        logger.info("subscription successful", subscription);

        if (subscription && subscription.status === "active") {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              patronageType: type,
              stripe: {
                connect: {
                  stripeId_userId: {
                    stripeId,
                    userId,
                  },
                },
              },
            },
          });
        }

        return {
          subscriptionId: subscription.id,
          clientSecret:
            // @ts-ignore
            subscription.latest_invoice.payment_intent.client_secret,
        };
      } catch (error) {
        logger.error("subscription error", error.message);
      }
    }

    return false;
  }
}
