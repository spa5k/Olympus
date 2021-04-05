import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokensWhereInput } from "../../../inputs/TokensWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTokensArgs {
  @TypeGraphQL.Field(_type => TokensWhereInput, {
    nullable: true
  })
  where?: TokensWhereInput | undefined;
}
