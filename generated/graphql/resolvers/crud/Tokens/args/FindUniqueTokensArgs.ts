import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokensWhereUniqueInput } from "../../../inputs/TokensWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTokensArgs {
  @TypeGraphQL.Field(_type => TokensWhereUniqueInput, {
    nullable: false
  })
  where!: TokensWhereUniqueInput;
}
