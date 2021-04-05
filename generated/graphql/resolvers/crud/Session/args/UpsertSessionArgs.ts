import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionCreateInput } from "../../../inputs/SessionCreateInput";
import { SessionUpdateInput } from "../../../inputs/SessionUpdateInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertSessionArgs {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;

  @TypeGraphQL.Field(_type => SessionCreateInput, {
    nullable: false
  })
  create!: SessionCreateInput;

  @TypeGraphQL.Field(_type => SessionUpdateInput, {
    nullable: false
  })
  update!: SessionUpdateInput;
}
