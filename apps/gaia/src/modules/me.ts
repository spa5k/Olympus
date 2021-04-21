import { Ctx, Query, Resolver } from "type-graphql";
import { User } from "@generated/type-graphql";
import { GaiaContext } from "../config/context";
import { UserResponse } from "../types/response/UserResponse";

@Resolver(User)
export class MeQuery {
  @Query(() => UserResponse)
  async me(@Ctx() { req, prisma }: GaiaContext): Promise<UserResponse> {
    if (req.session.userId) {
      const user = await prisma.user.findUnique({
        where: {
          id: req.session.userId,
        },
      });
      return { user };
    }
    return {
      errors: [
        {
          field: "user",
          message: "no such user",
        },
      ],
    };
  }
}
