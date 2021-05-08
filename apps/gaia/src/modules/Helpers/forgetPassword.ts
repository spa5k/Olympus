import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "@generated/type-graphql";
import { GaiaContext } from "../../config/context";
import { v4 } from "uuid";
import { minutesAdder } from "../../utils/minutesAdder";
import { mail } from "@olympus/mail";
@Resolver(User)
export class ForgetPassword {
  @Mutation(() => Boolean)
  async forgetPassword(
    @Arg("email") email: string,
    @Ctx() { prisma }: GaiaContext
  ): Promise<boolean> {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return true;
    }
    const token: string = v4();

    await prisma.tokens.create({
      data: {
        token,
        userId: user.id,
        type: "FORGET_PASSWORD",
        expireAt: minutesAdder(new Date(), 60 * 2).toISOString(),
      },
    });
    const url = `http://localhost:3000/verify/${token}`;

    await mail(user.email, url, user.name, "FORGET_PASSWORD");
    return true;
  }
}
