import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateSessionArgs } from "./args/AggregateSessionArgs";
import { CreateSessionArgs } from "./args/CreateSessionArgs";
import { DeleteManySessionArgs } from "./args/DeleteManySessionArgs";
import { DeleteSessionArgs } from "./args/DeleteSessionArgs";
import { FindFirstSessionArgs } from "./args/FindFirstSessionArgs";
import { FindManySessionArgs } from "./args/FindManySessionArgs";
import { FindUniqueSessionArgs } from "./args/FindUniqueSessionArgs";
import { UpdateManySessionArgs } from "./args/UpdateManySessionArgs";
import { UpdateSessionArgs } from "./args/UpdateSessionArgs";
import { UpsertSessionArgs } from "./args/UpsertSessionArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Session } from "../../../models/Session";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateSession } from "../../outputs/AggregateSession";

@TypeGraphQL.Resolver(_of => Session)
export class SessionCrudResolver {
  @TypeGraphQL.Query(_returns => Session, {
    nullable: true
  })
  async session(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Session, {
    nullable: true
  })
  async findFirstSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Session], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySessionArgs): Promise<Session[]> {
    return getPrismaFromContext(ctx).session.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Session, {
    nullable: false
  })
  async createSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSessionArgs): Promise<Session> {
    return getPrismaFromContext(ctx).session.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Session, {
    nullable: true
  })
  async deleteSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Session, {
    nullable: true
  })
  async updateSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySessionArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).session.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySessionArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).session.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Session, {
    nullable: false
  })
  async upsertSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertSessionArgs): Promise<Session> {
    return getPrismaFromContext(ctx).session.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateSession, {
    nullable: false
  })
  async aggregateSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSessionArgs): Promise<AggregateSession> {
    return getPrismaFromContext(ctx).session.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
