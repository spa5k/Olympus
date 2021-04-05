import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokensCreateInput } from "../../../inputs/TokensCreateInput";

@TypeGraphQL.ArgsType()
export class CreateTokensArgs {
  @TypeGraphQL.Field(_type => TokensCreateInput, {
    nullable: false
  })
  data!: TokensCreateInput;
}
