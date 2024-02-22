//Selector file to get "our table from our bbdd" AppState
import { createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

//Select is declared and we choose the table
export const selectShopFeature = (state: AppState) => state.shop;
export const selectProductsFavorites = (state: AppState) => state.favorites;

//This select will return products
export const selectShopProducts = createSelector(
  selectShopFeature,
  (state: any) => state.products
);

//This select will return loading state
export const selectLoading = createSelector(
  selectShopFeature,
  (state: any) => state.loading
);

//this select will return favorites
export const selectProductsFavoritesLoad = createSelector(
  selectProductsFavorites,
  (state: any) => state.favorites
);
