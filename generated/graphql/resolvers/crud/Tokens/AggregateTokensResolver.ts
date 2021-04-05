import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTokensArgs } from "./args/AggregateTokensArgs";
import { Tokens } from "../../../models/Tokens";
import { AggregateTokens } from "../../outputs/AggregateTokens";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tokens)
export class AggregateTokensResolver {
  @TypeGraphQL.Query(_returns => AggregateTokens, {
    nullable: false
  })
  async aggregateTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTokensArgs): Promise<AggregateTokens> {
    return getPrismaFromContext(ctx).tokens.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
