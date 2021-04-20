import { User } from "@generated/type-graphql";
import argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";

import { GaiaContext } from "../../config/context";
import { LoginInput } from "../../types/inputs/LoginInput";
import { UserResponse } from "../../types/response/UserResponse";

@Resolver(() => User)
export class LoginMutation {
  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: LoginInput,
    @Ctx() { req, prisma }: GaiaContext
  ): Promise<UserResponse> {
    const user = await prisma.user.findUnique({
      where: {
        email: options.email,
      },
    });

    if (!user) {
      return {
        errors: [
          {
            field: "login",
            message: "user not found",
          },
        ],
      };
    }

    const validPassword = await argon2.verify(user.password, options.password);

    if (!validPassword) {
      return {
        errors: [
          {
            field: "password",
            message: "password is wrong",
          },
        ],
      };
    }

    req.session.userId = user.id;
    return { user };
  }
}
