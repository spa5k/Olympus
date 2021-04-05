import * as TypeGraphQL from "type-graphql";
import { UpsertTokensArgs } from "./args/UpsertTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class UpsertTokensResolver {
  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: false
  })
  async upsertTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTokensArgs): Promise<Tokens> {
    return getPrismaFromContext(ctx).tokens.upsert(args);
  }
}
