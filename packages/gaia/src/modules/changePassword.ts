import { Arg, Ctx, Mutation, Resolver } from "type-graphql";
import { User } from "@generated/type-graphql";
import { UserResponse } from "../types/response/UserResponse";
import { GaiaContext } from "../config/context";
import argon2 from "argon2";
@Resolver(User)
export class ChangePassword {
  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Ctx() { prisma, req }: GaiaContext
  ): Promise<UserResponse> {
    const tokenStatus = await prisma.tokens.findUnique({
      where: {
        token,
      },
    });

    if (!tokenStatus) {
      return {
        errors: [
          {
            field: "token",
            message: "token expired",
          },
        ],
      };
    }

    const user = await prisma.user.findUnique({
      where: {
        id: tokenStatus.userId,
      },
    });

    if (!user) {
      await prisma.tokens.delete({
        where: {
          token,
        },
      });

      return {
        errors: [
          {
            field: "token",
            message: "this user no longer exists",
          },
        ],
      };
    }

    await prisma.$transaction([
      prisma.user.update({
        where: {
          id: tokenStatus.userId,
        },
        data: {
          password: await argon2.hash(newPassword),
        },
      }),
      prisma.tokens.delete({
        where: {
          token,
        },
      }),
      prisma.tokens.deleteMany({
        where: {
          expire: {
            gt: new Date().toISOString(),
          },
        },
      }),
    ]);

    req.session.userId = user.id;

    return { user };
  }
}
