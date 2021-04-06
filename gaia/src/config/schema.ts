import {
  resolvers,
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "@olympus/tg";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { LoginMutation } from "../modules/login";
import { RegisterMutation } from "../modules/register";
import { VerifyUser } from "../modules/verifyUser";
import { ChangePassword } from "../modules/changePassword";
import { ForgetPassword } from "../modules/forgetPassword";
import { LogoutMutation } from "../modules/logout";
import { MeQuery } from "../modules/me";
import { VerificationEmailAgainMutation } from "../modules/verificationEmailAgain";

const resolversEnhancerMap: ResolversEnhanceMap = {
  User: {
    deleteUser: [],
  },
};

applyResolversEnhanceMap(resolversEnhancerMap);
export const createSchema = async (): Promise<GraphQLSchema> => {
  return await buildSchema({
    resolvers: [
      ...resolvers,
      LoginMutation,
      RegisterMutation,
      VerifyUser,
      ChangePassword,
      ForgetPassword,
      LogoutMutation,
      MeQuery,
      VerificationEmailAgainMutation,
    ],
    validate: true,
    emitSchemaFile: true,
  });
};
