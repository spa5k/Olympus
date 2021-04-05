import * as TypeGraphQL from "type-graphql";
import { UpdateManyTokensArgs } from "./args/UpdateManyTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class UpdateManyTokensResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTokensArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tokens.updateMany(args);
  }
}
