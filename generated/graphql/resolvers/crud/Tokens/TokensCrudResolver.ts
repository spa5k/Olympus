import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateTokensArgs } from "./args/AggregateTokensArgs";
import { CreateTokensArgs } from "./args/CreateTokensArgs";
import { DeleteManyTokensArgs } from "./args/DeleteManyTokensArgs";
import { DeleteTokensArgs } from "./args/DeleteTokensArgs";
import { FindFirstTokensArgs } from "./args/FindFirstTokensArgs";
import { FindManyTokensArgs } from "./args/FindManyTokensArgs";
import { FindUniqueTokensArgs } from "./args/FindUniqueTokensArgs";
import { UpdateManyTokensArgs } from "./args/UpdateManyTokensArgs";
import { UpdateTokensArgs } from "./args/UpdateTokensArgs";
import { UpsertTokensArgs } from "./args/UpsertTokensArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Tokens } from "../../../models/Tokens";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateTokens } from "../../outputs/AggregateTokens";

@TypeGraphQL.Resolver(_of => Tokens)
export class TokensCrudResolver {
  @TypeGraphQL.Query(_returns => Tokens, {
    nullable: true
  })
  async findUniqueTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Tokens, {
    nullable: true
  })
  async findFirstTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Tokens], {
    nullable: false
  })
  async findManyTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTokensArgs): Promise<Tokens[]> {
    return getPrismaFromContext(ctx).tokens.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: false
  })
  async createTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTokensArgs): Promise<Tokens> {
    return getPrismaFromContext(ctx).tokens.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: true
  })
  async deleteTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: true
  })
  async updateTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTokensArgs): Promise<Tokens | null> {
    return getPrismaFromContext(ctx).tokens.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTokensArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tokens.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyTokensArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).tokens.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Tokens, {
    nullable: false
  })
  async upsertTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTokensArgs): Promise<Tokens> {
    return getPrismaFromContext(ctx).tokens.upsert(args);
  }

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
