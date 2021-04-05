import * as TypeGraphQL from "type-graphql";
import { CreateTokensArgs } from "./args/CreateTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class CreateTokensResolver {
  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: false
  })
  async createTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTokensArgs): Promise<Tokens> {
    return getPrismaFromContext(ctx).tokens.create(args);
  }
}
