import * as TypeGraphQL from "type-graphql";
import { DeleteManySessionArgs } from "./args/DeleteManySessionArgs";
import { Session } from "../../../models/Session";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class DeleteManySessionResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManySession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManySessionArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).session.deleteMany(args);
  }
}
