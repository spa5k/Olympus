import * as TypeGraphQL from "type-graphql";
import { DeleteManyTokensArgs } from "./args/DeleteManyTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class DeleteManyTokensResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTokensArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tokens.deleteMany(args);
  }
}
