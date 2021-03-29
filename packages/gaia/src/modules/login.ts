import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User, UserCreateInput } from "@generated/type-graphql";
import { GaiaContext } from "../config/context";

@Resolver(() => User)
export class LoginMutation {
  /**
   * ! @param Input: usernameOrEmail + passsword
   * * @name: Login
   * ? @type: Auth
   * TODO: Need to add authorization
   */

  @Mutation(() => Boolean)
  async login(
    @Arg("options") options: UserCreateInput,
    @Ctx() { req, prisma }: GaiaContext
  ): Promise<Boolean> {
    const user = await prisma.user.create({
      data: options,
    });

    req.session.userId = await user.id;
    console.log(req.session);

    return true;
  }
}
