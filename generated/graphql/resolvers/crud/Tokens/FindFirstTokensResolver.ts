import * as TypeGraphQL from "type-graphql";
import { FindFirstTokensArgs } from "./args/FindFirstTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class FindFirstTokensResolver {
  @TypeGraphQL.Query(_returns => Tokens, {
    nullable: true
  })
  async findFirstTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.findFirst(args);
  }
}
