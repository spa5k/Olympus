import * as TypeGraphQL from "type-graphql";
import { FindManySessionArgs } from "./args/FindManySessionArgs";
import { Session } from "../../../models/Session";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class FindManySessionResolver {
  @TypeGraphQL.Query(_returns => [Session], {
    nullable: false
  })
  async sessions(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManySessionArgs): Promise<Session[]> {
    return getPrismaFromContext(ctx).session.findMany(args);
  }
}
