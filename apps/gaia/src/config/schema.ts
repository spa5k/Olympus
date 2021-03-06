import {
  resolvers,
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { LoginMutation } from "../modules/Auth/login";
import { RegisterMutation } from "../modules/Auth/register";
import { VerifyUser } from "../modules/Helpers/verifyUser";
import { ChangePassword } from "../modules/Helpers/changePassword";
import { ForgetPassword } from "../modules/Helpers/forgetPassword";
import { LogoutMutation } from "../modules/Auth/logout";
import { MeQuery } from "../modules/me";
import { VerificationEmailAgainMutation } from "../modules/Helpers/verificationEmailAgain";
import { CreateSubscription } from "../modules/Payments/CreateSubscription";
import { PricesQuery } from "../modules/Payments/Prices";

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
      CreateSubscription,
      PricesQuery,
    ],
    validate: true,
    emitSchemaFile: true,
  });
};
