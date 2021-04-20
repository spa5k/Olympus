import { Ctx, Mutation, Resolver } from "type-graphql";
import { GaiaContext } from "../../config/context";
import { User } from "@generated/type-graphql";

@Resolver(User)
export class LogoutMutation {
  @Mutation(() => Boolean)
  async logout(@Ctx() { req, res }: GaiaContext): Promise<boolean> {
    return new Promise((resolve) =>
      req.session.destroy((error) => {
        res.clearCookie("olympus");

        if (error) {
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
