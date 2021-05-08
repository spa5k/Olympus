import React, { useEffect, useState } from "react";
import { getApollo } from "../config/getApollo";
import { usePricesQuery } from "../graphql/queries/Prices.graphql";
import { Prices as PricesType } from "../utils/Types";

const Prices = () => {
  const { data, error } = usePricesQuery();
  const [prices, setPrices] = useState<PricesType[]>();
  useEffect(() => {
    if (data?.prices.pricesJson && data?.prices.pricesJson.length > 0) {
      setPrices(JSON.parse(data.prices.pricesJson));
    }
  }, [data?.prices.pricesJson]);
  console.log(data);

  return (
    <div>
      {prices?.map((price) => {
        return (
          <div key={price.id}>
            <h3>{price.product.name}</h3>

            <p>${price.unit_amount / 100} / month</p>

            <button onClick={() => console.log(price.id)}>Select</button>
          </div>
        );
      })}
    </div>
  );
};

export default getApollo({ ssr: true })(Prices);
