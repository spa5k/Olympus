import * as TypeGraphQL from "type-graphql";
import { UpdateManySessionArgs } from "./args/UpdateManySessionArgs";
import { Session } from "../../../models/Session";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Session)
export class UpdateManySessionResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManySession(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManySessionArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).session.updateMany(args);
  }
}
