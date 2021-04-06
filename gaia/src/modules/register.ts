import argon2 from "argon2";
import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { v4 } from "uuid";

import { User, UserCreateInput } from "@olympus/tg";
import { GaiaContext } from "../config/context";
import { UserResponse } from "../types/response/UserResponse";
import { minutesAdder } from "../utils/minutesAdder";
import { sendEmail } from "../utils/sendEmail";

const { env } = process;
@Resolver(() => User)
export class RegisterMutation {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UserCreateInput,
    @Ctx() { req, prisma }: GaiaContext
  ): Promise<UserResponse> {
    const password = await argon2.hash(options.password);
    const user = await prisma.user.create({
      data: {
        email: options.email,
        password,
        name: options.name,
      },
    });

    req.session.userId = user.id;

    if (user) {
      const token = v4();
      const verificationLink = `<a href="http://localhost:3000/verify/${token}">Verify your account</a>`;
      await prisma.tokens.create({
        data: {
          userId: user.id,
          type: "ACCOUNT_VERIFICATION",
          expire: minutesAdder(new Date(), 60).toISOString(),
          token,
        },
      });

      await sendEmail(user.email, verificationLink);

      return { user };
    } else {
      return {
        errors: [
          {
            field: "user",
            message: "not found",
          },
        ],
      };
    }
  }
}
