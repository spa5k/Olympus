import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User, UserCreateInput } from "@generated/type-graphql";
import { GaiaContext } from "../config/context";
import argon2 from "argon2";
import { UserResponse } from "../types/response/UserResponse";

@Resolver(() => User)
export class LoginMutation {
  /**
   * ! @param Input: usernameOrEmail + passsword
   * * @name: Login
   * ? @type: Auth
   * TODO: Need to add authorization
   */

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UserCreateInput,
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
