import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { UserRole } from "../../enums/UserRole";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class EnumUserRoleFieldUpdateOperationsInput {
  @TypeGraphQL.Field(_type => UserRole, {
    nullable: true
  })
  set?: "ADMIN" | "MODERATOR" | "PREMIUM" | "FREE" | undefined;
}
