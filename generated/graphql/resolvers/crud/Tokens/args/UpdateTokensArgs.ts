import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokensUpdateInput } from "../../../inputs/TokensUpdateInput";
import { TokensWhereUniqueInput } from "../../../inputs/TokensWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateTokensArgs {
  @TypeGraphQL.Field(_type => TokensUpdateInput, {
    nullable: false
  })
  data!: TokensUpdateInput;

  @TypeGraphQL.Field(_type => TokensWhereUniqueInput, {
    nullable: false
  })
  where!: TokensWhereUniqueInput;
}
