import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionUpdateInput } from "../../../inputs/SessionUpdateInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateSessionArgs {
  @TypeGraphQL.Field(_type => SessionUpdateInput, {
    nullable: false
  })
  data!: SessionUpdateInput;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;
}
