import * as TypeGraphQL from "type-graphql";
import { FindUniqueTokensArgs } from "./args/FindUniqueTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class FindUniqueTokensResolver {
  @TypeGraphQL.Query(_returns => Tokens, {
    nullable: true
  })
  async findUniqueTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.findUnique(args);
  }
}
