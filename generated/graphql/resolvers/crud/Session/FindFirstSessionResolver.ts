import * as TypeGraphQL from "type-graphql";
import { FindFirstSessionArgs } from "./args/FindFirstSessionArgs";
import { Session } from "../../../models/Session";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class FindFirstSessionResolver {
  @TypeGraphQL.Query(_returns => Session, {
    nullable: true
  })
  async findFirstSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.findFirst(args);
  }
}
