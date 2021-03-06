import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "@generated/type-graphql";
import { GaiaContext } from "../../config/context";

@Resolver(User)
export class VerifyUser {
  @Mutation(() => Boolean)
  async verifyUser(
    @Arg("token") token: string,
    @Ctx() { req, prisma }: GaiaContext
  ): Promise<boolean> {
    const tokenRes = await prisma.tokens.findFirst({
      where: {
        type: "ACCOUNT_VERIFICATION",
        token,
      },
    });

    if (tokenRes?.userId) {
      req.session.userId = tokenRes.userId;

      await prisma.$transaction([
        prisma.user.update({
          where: {
            id: tokenRes.userId,
          },
          data: {
            verified: true,
          },
        }),
        prisma.tokens.delete({
          where: {
            token: tokenRes.token,
          },
        }),

        prisma.tokens.deleteMany({
          where: {
            expireAt: {
              gt: new Date().toISOString(),
            },
          },
        }),
      ]);

      return true;
    } else {
      return false;
    }
  }
}
