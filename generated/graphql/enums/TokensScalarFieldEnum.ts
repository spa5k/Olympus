import * as TypeGraphQL from "type-graphql";

export enum TokensScalarFieldEnum {
  id = "id",
  type = "type",
  userId = "userId",
  expire = "expire",
  createdAt = "createdAt",
  token = "token"
}
TypeGraphQL.registerEnumType(TokensScalarFieldEnum, {
  name: "TokensScalarFieldEnum",
  description: undefined,
});
