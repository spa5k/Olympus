import * as TypeGraphQL from "type-graphql";
import { DeleteSessionArgs } from "./args/DeleteSessionArgs";
import { Session } from "../../../models/Session";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class DeleteSessionResolver {
  @TypeGraphQL.Mutation(_returns => Session, {
    nullable: true
  })
  async deleteSession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteSessionArgs): Promise<Session | null> {
    return getPrismaFromContext(ctx).session.delete(args);
  }
}
