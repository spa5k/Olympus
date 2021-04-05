import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSessionArgs {
  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: false
  })
  where!: SessionWhereUniqueInput;
}
