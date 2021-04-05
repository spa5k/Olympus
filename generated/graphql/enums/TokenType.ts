import * as TypeGraphQL from "type-graphql";

export enum TokenType {
  FORGET_PASSWORD = "FORGET_PASSWORD",
  ACCOUNT_VERIFICATION = "ACCOUNT_VERIFICATION"
}
TypeGraphQL.registerEnumType(TokenType, {
  name: "TokenType",
  description: undefined,
});
