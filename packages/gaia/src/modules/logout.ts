import { Ctx, Mutation, Resolver } from "type-graphql";
import { GaiaContext } from "../config/context";
import { User } from "@generated/type-graphql";

@Resolver(User)
export class LogoutMutation {
  @Mutation(() => Boolean)
  async Logout(
    @Ctx() { req: request, res: response }: GaiaContext
  ): Promise<boolean> {
    return new Promise((resolve) =>
      request.session.destroy((error) => {
        response.clearCookie("prisma_id");

        if (error) {
          resolve(false);
          return;
        }
        resolve(true);
      })
    );
  }
}
