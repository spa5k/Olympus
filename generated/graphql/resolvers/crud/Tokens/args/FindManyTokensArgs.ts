import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TokensOrderByInput } from "../../../inputs/TokensOrderByInput";
import { TokensWhereInput } from "../../../inputs/TokensWhereInput";
import { TokensWhereUniqueInput } from "../../../inputs/TokensWhereUniqueInput";
import { TokensScalarFieldEnum } from "../../../../enums/TokensScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTokensArgs {
  @TypeGraphQL.Field(_type => TokensWhereInput, {
    nullable: true
  })
  where?: TokensWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TokensOrderByInput], {
    nullable: true
  })
  orderBy?: TokensOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TokensWhereUniqueInput, {
    nullable: true
  })
  cursor?: TokensWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TokensScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "type" | "userId" | "expire" | "createdAt" | "token"> | undefined;
}
