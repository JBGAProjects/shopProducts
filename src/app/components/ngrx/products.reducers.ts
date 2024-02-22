//Listener file for actions
import { createReducer, on } from "@ngrx/store";
import {
  addFavorite,
  clearFavorites,
  loadFavorites,
  loadProducts,
  loadProductsError,
  loadProductsSuccess,
  removeFavorite,
} from "./products.actions";
import { Products } from "src/app/models/shop.interface";
import { ShopState } from "src/app/models/shop.state";

//Initialstate for the reducers shop products, variables must be initialized
export const initialState: ShopState = {
  loading: false,
  shop: {
    products: [],
    skip: 0,
    limit: 0,
    total: 0,
  },
};

//Initialstate for the reducers favorites, variables must be initialized
export const initialStateFavorites: any = {
  favorites: [],
};

//Reducer with multiple reducers for the products load
export const shopReducer = createReducer(
  initialState,
  on(loadProducts, (state) => {
    return { ...state, loading: true };
  }),
  //when the load is success, the reducer returns loading false and the current products list
  on(loadProductsSuccess, (state, { shop }) => {
    return { ...state, loading: false, products: shop.products };
  }),

  //when the load is error, the reducer returns loading false
  on(loadProductsError, (state) => {
    return { ...state, loading: false };
  })
);

//Reducer for favorites actions
export const favoritesReducer = createReducer(
  initialStateFavorites,
  on(loadFavorites, (state) => {
    return { ...state };
  }),
  on(addFavorite, (state, { product }) => {
    //check if it exists in favorite list
    const existingProduct = state.favorites?.find(
      (p: any) => p.id === product.id
    );

    //if not exists (add product)
    if (!existingProduct) {
      return {
        ...state,
        favorites: [...state.favorites, product],
      };
    }

    //if exist (return current state)
    return state;
  }),

  //If the product exist in favorite list is removed
  on(removeFavorite, (state, { productId }) => ({
    ...state,
    favorites: state.favorites.filter(
      (product: Products) => product.id !== productId
    ),
  })),

  //The favorite list is removed
  on(clearFavorites, (state) => {
    return { ...state, favorites: [] };
  })
);
