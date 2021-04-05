import * as TypeGraphQL from "type-graphql";
import { UpdateSessionArgs } from "./args/UpdateSessionArgs";
import { Session } from "../../../models/Session";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class UpdateSessionResolver {
  @TypeGraphQL.Mutation(_returns => Session, {
    nullable: true
  })
  async updateSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.update(args);
  }
}
