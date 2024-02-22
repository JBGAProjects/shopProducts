//This file is for create the "bbdd" store, here we can see our tables

import { ActionReducerMap } from "@ngrx/store";
import { favoritesReducer, shopReducer } from "./products.reducers";
import { Products } from "src/app/models/shop.interface";
import { ShopState } from "src/app/models/shop.state";

//we type the interface according to the data that arrives
export interface AppState {
  shop: ShopState;
  favorites: ReadonlyArray<Products[]>;
}

// Here is declared an exportable const action map where we declare our attribute "shop" and refer it to its reducer "shopReducer"
export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  shop: shopReducer,
  favorites: favoritesReducer,
};
