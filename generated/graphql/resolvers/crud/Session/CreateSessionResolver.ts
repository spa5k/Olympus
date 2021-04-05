import * as TypeGraphQL from "type-graphql";
import { CreateSessionArgs } from "./args/CreateSessionArgs";
import { Session } from "../../../models/Session";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class CreateSessionResolver {
  @TypeGraphQL.Mutation(_returns => Session, {
    nullable: false
  })
  async createSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateSessionArgs): Promise<Session> {
    return getPrismaFromContext(ctx).session.create(args);
  }
}
