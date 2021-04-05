import * as TypeGraphQL from "type-graphql";

export enum SessionScalarFieldEnum {
  sid = "sid",
  sess = "sess",
  expire = "expire"
}
TypeGraphQL.registerEnumType(SessionScalarFieldEnum, {
  name: "SessionScalarFieldEnum",
  description: undefined,
});
