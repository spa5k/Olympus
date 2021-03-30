import {
  resolvers,
  ResolversEnhanceMap,
  applyResolversEnhanceMap,
} from "@generated/type-graphql";
import { GraphQLSchema } from "graphql";
import { buildSchema } from "type-graphql";
import { LoginMutation } from "../modules/login";
import { LogoutMutation } from "../modules/logout";
import { RegisterMutation } from "../modules/register";

const resolversEnhancerMap: ResolversEnhanceMap = {
  User: {
    deleteUser: [],
  },
};

applyResolversEnhanceMap(resolversEnhancerMap);
export const createSchema = async (): Promise<GraphQLSchema> => {
  return buildSchema({
    resolvers: [...resolvers, LoginMutation, LogoutMutation, RegisterMutation],
    validate: true,
    emitSchemaFile: true,
  });
};
