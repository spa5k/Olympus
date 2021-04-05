import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../client";
import { DecimalJSScalar } from "../../scalars";
import { TokensCountAggregate } from "../outputs/TokensCountAggregate";
import { TokensMaxAggregate } from "../outputs/TokensMaxAggregate";
import { TokensMinAggregate } from "../outputs/TokensMinAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTokens {
  @TypeGraphQL.Field(_type => TokensCountAggregate, {
    nullable: true
  })
  count!: TokensCountAggregate | null;

  @TypeGraphQL.Field(_type => TokensMinAggregate, {
    nullable: true
  })
  min!: TokensMinAggregate | null;

  @TypeGraphQL.Field(_type => TokensMaxAggregate, {
    nullable: true
  })
  max!: TokensMaxAggregate | null;
}
