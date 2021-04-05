import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokensCreateInput } from "../../../inputs/TokensCreateInput";
import { TokensUpdateInput } from "../../../inputs/TokensUpdateInput";
import { TokensWhereUniqueInput } from "../../../inputs/TokensWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertTokensArgs {
  @TypeGraphQL.Field(_type => TokensWhereUniqueInput, {
    nullable: false
  })
  where!: TokensWhereUniqueInput;

  @TypeGraphQL.Field(_type => TokensCreateInput, {
    nullable: false
  })
  create!: TokensCreateInput;

  @TypeGraphQL.Field(_type => TokensUpdateInput, {
    nullable: false
  })
  update!: TokensUpdateInput;
}
