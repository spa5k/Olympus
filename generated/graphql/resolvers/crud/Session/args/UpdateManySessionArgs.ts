import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionUpdateManyMutationInput } from "../../../inputs/SessionUpdateManyMutationInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySessionArgs {
  @TypeGraphQL.Field(_type => SessionUpdateManyMutationInput, {
    nullable: false
  })
  data!: SessionUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  where?: SessionWhereInput | undefined;
}
