import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TokenType } from "../../enums/TokenType";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumTokenTypeFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => TokenType, {
    nullable: true
  })
  set?: "FORGET_PASSWORD" | "ACCOUNT_VERIFICATION" | undefined;
}
