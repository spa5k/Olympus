import { ObjectType, Field } from "type-graphql";

@ObjectType({ simpleResolvers: true })
export class PricesResponse {
  @Field(() => String, { simple: true })
  pricesJson: string;
}
