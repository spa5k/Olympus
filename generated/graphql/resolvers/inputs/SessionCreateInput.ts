import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class SessionCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  sid!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: false
  })
  sess!: Prisma.InputJsonValue;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  expire!: Date;
}
