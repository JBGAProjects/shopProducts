import { Shop } from "./shop.interface";

export interface ShopState {
  loading: boolean;
  shop: Readonly<Shop>;
}
