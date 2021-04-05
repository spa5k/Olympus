import * as TypeGraphQL from "type-graphql";

export enum UserRole {
  ADMIN = "ADMIN",
  MODERATOR = "MODERATOR",
  PREMIUM = "PREMIUM",
  FREE = "FREE"
}
TypeGraphQL.registerEnumType(UserRole, {
  name: "UserRole",
  description: undefined,
});
