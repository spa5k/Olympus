import {
  resolvers,
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "../../../generated/graphql";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { LoginMutation } from "../modules/login";
import { RegisterMutation } from "../modules/register";
import { VerifyUser } from "../modules/verifyUser";
import { ChangePassword } from "../modules/changePassword";
import { ForgetPassword } from "../modules/forgetPassword";
import { LogoutMutation } from "../modules/logout";
import { MeQuery } from "../modules/me";

const resolversEnhancerMap: ResolversEnhanceMap = {
  User: {
    deleteUser: [],
  },
};

applyResolversEnhanceMap(resolversEnhancerMap);
export const createSchema = async (): Promise<GraphQLSchema> => {
  return buildSchema({
    resolvers: [
      ...resolvers,
      LoginMutation,
      RegisterMutation,
      VerifyUser,
      ChangePassword,
      ForgetPassword,
      LogoutMutation,
      MeQuery,
    ],
    validate: true,
    emitSchemaFile: true,
  });
};
