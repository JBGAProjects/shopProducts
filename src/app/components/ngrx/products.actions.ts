import { createAction, props } from "@ngrx/store";
import { Products, Shop } from "src/app/models/shop.interface";

//Action LoadProducts to load all products
export const loadProducts = createAction("[Api Load] Load Products");

//When load success
export const loadProductsSuccess = createAction(
  "[Api Success] Load Product Success",
  props<{ shop: Readonly<Shop> }>()
);

//When load Error
export const loadProductsError = createAction("[Api Error] Load Product Error");

//Actions Load, add and remove favorites
export const loadFavorites = createAction("[Load favorites] Load Favorites");

export const addFavorite = createAction(
  "[Add favorites] Add Favorites",
  props<{ product: Products }>()
);

export const removeFavorite = createAction(
  "[Favorites] Remove Favorite",
  props<{ productId: string }>()
);

//When logout, favorite array is removed
export const clearFavorites = createAction(
  "[Clear Favorites] Remove Favorite list"
);
