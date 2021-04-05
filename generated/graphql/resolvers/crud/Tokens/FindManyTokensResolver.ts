import * as TypeGraphQL from "type-graphql";
import { FindManyTokensArgs } from "./args/FindManyTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class FindManyTokensResolver {
  @TypeGraphQL.Query(_returns => [Tokens], {
    nullable: false
  })
  async findManyTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTokensArgs): Promise<Tokens[]> {
    return getPrismaFromContext(ctx).tokens.findMany(args);
  }
}
