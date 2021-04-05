import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SessionOrderByInput } from "../../../inputs/SessionOrderByInput";
import { SessionWhereInput } from "../../../inputs/SessionWhereInput";
import { SessionWhereUniqueInput } from "../../../inputs/SessionWhereUniqueInput";
import { SessionScalarFieldEnum } from "../../../../enums/SessionScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstSessionArgs {
  @TypeGraphQL.Field(_type => SessionWhereInput, {
    nullable: true
  })
  where?: SessionWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SessionOrderByInput], {
    nullable: true
  })
  orderBy?: SessionOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => SessionWhereUniqueInput, {
    nullable: true
  })
  cursor?: SessionWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [SessionScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"sid" | "sess" | "expire"> | undefined;
}
