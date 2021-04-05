import * as TypeGraphQL from "type-graphql";
import { DeleteTokensArgs } from "./args/DeleteTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class DeleteTokensResolver {
  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: true
  })
  async deleteTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.delete(args);
  }
}
