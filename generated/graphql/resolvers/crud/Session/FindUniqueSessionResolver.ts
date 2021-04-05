import * as TypeGraphQL from "type-graphql";
import { FindUniqueSessionArgs } from "./args/FindUniqueSessionArgs";
import { Session } from "../../../models/Session";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class FindUniqueSessionResolver {
  @TypeGraphQL.Query(_returns => Session, {
    nullable: true
  })
  async session(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.findUnique(args);
  }
}
