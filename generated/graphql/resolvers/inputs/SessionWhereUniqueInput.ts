import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  sid?: string | undefined;
}
