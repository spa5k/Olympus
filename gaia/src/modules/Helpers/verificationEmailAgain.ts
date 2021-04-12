import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "@olympus/tg";
import { GaiaContext } from "../../config/context";
import { v4 } from "uuid";
import { minutesAdder } from "../../utils/minutesAdder";
import { sendEmail } from "../../utils/sendEmail";

@Resolver(User)
export class VerificationEmailAgainMutation {
  @Mutation(() => Boolean)
  async requestVerificationAgain(
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

    await prisma.tokens.deleteMany({
      where: {
        userId: user.id,
        type: "ACCOUNT_VERIFICATION",
      },
    });

    const token: string = v4();
    const verificationLink: string = `<a href="http://localhost:3000/verify/${token}">Verify your account</a>`;
    await prisma.tokens.create({
      data: {
        userId: user.id,
        type: "ACCOUNT_VERIFICATION",
        expire: minutesAdder(new Date(), 60).toISOString(),
        token,
      },
    });

    await prisma.tokens.deleteMany({
      where: {
        expire: {
          lt: new Date().toISOString(),
        },
      },
    });
    await sendEmail(user.email, verificationLink);
    return true;
  }
}
