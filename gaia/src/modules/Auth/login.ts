import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User, UserCreateInput } from "@olympus/tg";
import { GaiaContext } from "../../config/context";
import argon2 from "argon2";
import { UserResponse } from "../../types/response/UserResponse";

@Resolver(() => User)
export class LoginMutation {
  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UserCreateInput,
    @Ctx() { req, prisma }: GaiaContext
  ): Promise<UserResponse> {
    console.log(req);
    console.log("session", req.session);
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
