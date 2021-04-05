import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokensUpdateManyMutationInput } from "../../../inputs/TokensUpdateManyMutationInput";
import { TokensWhereInput } from "../../../inputs/TokensWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTokensArgs {
  @TypeGraphQL.Field(_type => TokensUpdateManyMutationInput, {
    nullable: false
  })
  data!: TokensUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TokensWhereInput, {
    nullable: true
  })
  where?: TokensWhereInput | undefined;
}
