import { Ctx, Mutation, Resolver } from "type-graphql";
import { GaiaContext } from "../../config/context";
import { User } from "@olympus/tg";

@Resolver(User)
export class LogoutMutation {
  @Mutation(() => Boolean)
  async Logout(@Ctx() { req, res }: GaiaContext): Promise<boolean> {
    return new Promise((resolve) =>
      req.session.destroy((error) => {
        res.clearCookie("prisma_id");

        if (error) {
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
