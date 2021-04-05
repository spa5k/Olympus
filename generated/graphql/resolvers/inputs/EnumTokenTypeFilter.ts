import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { NestedEnumTokenTypeFilter } from "../inputs/NestedEnumTokenTypeFilter";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTokenTypeFilter {
  @TypeGraphQL.Field(_type => TokenType, {
    nullable: true
  })
  equals?: "FORGET_PASSWORD" | "ACCOUNT_VERIFICATION" | undefined;

  @TypeGraphQL.Field(_type => [TokenType], {
    nullable: true
  })
  in?: Array<"FORGET_PASSWORD" | "ACCOUNT_VERIFICATION"> | undefined;

  @TypeGraphQL.Field(_type => [TokenType], {
    nullable: true
  })
  notIn?: Array<"FORGET_PASSWORD" | "ACCOUNT_VERIFICATION"> | undefined;

  @TypeGraphQL.Field(_type => NestedEnumTokenTypeFilter, {
    nullable: true
  })
  not?: NestedEnumTokenTypeFilter | undefined;
}
