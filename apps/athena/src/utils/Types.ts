export type Prices = {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  livemode: boolean;
  lookup_key: null;
  metadata: Metadata;
  nickname: null;
  product: Product;
  recurring: Recurring;
  tiers_mode: null;
  transform_quantity: null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
};

export type Metadata = Record<string, unknown>;

export type Product = {
  id: string;
  object: string;
  active: boolean;
  attributes: unknown[];
  created: number;
  description: null;
  images: unknown[];
  livemode: boolean;
  metadata: Metadata;
  name: string;
  package_dimensions: null;
  shippable: null;
  statement_descriptor: null;
  type: string;
  unit_label: null;
  updated: number;
  url: null;
};

export type Recurring = {
  aggregate_usage: null;
  interval: string;
  interval_count: number;
  trial_period_days: null;
  usage_type: string;
};
