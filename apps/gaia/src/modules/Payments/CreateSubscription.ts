import { User } from '@generated/type-graphql';
import { Arg, Ctx, Mutation, Resolver } from 'type-graphql';

import { GaiaContext } from '../../config/context';
import { stripe } from '@olympus/stripe';

@Resolver(User)
export class CreateSubscription {
  @Mutation(() => Boolean)
  async createSubscription(
    @Arg('type') type: string,
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

    const { stripeId } = user;

    if (!stripeId) {
      await stripe.customers.create({
        email: user.email,
      });
    }
  }
}
