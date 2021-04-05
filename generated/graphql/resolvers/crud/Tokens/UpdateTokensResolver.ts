import * as TypeGraphQL from "type-graphql";
import { UpdateTokensArgs } from "./args/UpdateTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class UpdateTokensResolver {
  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: true
  })
  async updateTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.update(args);
  }
}
