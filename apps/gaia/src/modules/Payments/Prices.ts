import { User } from "@generated/type-graphql";
import { logger } from "@olympus/logger";
import { stripe } from "@olympus/stripe";
import { Query, Resolver } from "type-graphql";

import { PricesResponse } from "../../types/response/PricesResponse";

@Resolver(User)
export class PricesQuery {
  @Query(() => PricesResponse)
  async prices(): Promise<PricesResponse> {
    const priceList = await (
      await stripe.prices.list({
        active: true,

        expand: ["data.product"],
      })
    ).data;

    return {
      pricesJson: JSON.stringify(priceList),
    };
  }
}
