import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "@olympus/tg";
import { GaiaContext } from "../config/context";
import { v4 } from "uuid";
import { minutesAdder } from "../utils/minutesAdder";
import { sendEmail } from "../utils/sendEmail";
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
    const token = v4();

    await prisma.tokens.create({
      data: {
        token,
        userId: user.id,
        type: "FORGET_PASSWORD",
        expire: minutesAdder(new Date(), 60 * 2).toISOString(),
      },
    });
    const forgetPasswordLink: string = `<a href="http://localhost:3000/verify/${token}">Reset your password</a>`;

    await sendEmail(user.email, forgetPasswordLink);
    return true;
  }
}
