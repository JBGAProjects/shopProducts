import { Shop } from "src/app/models/shop.interface";
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
  loadFavorites,
  addFavorite,
  removeFavorite,
  clearFavorites,
} from "./products.actions";

describe("Shop Actions", () => {
  // Test loadProducts action
  it("should create a loadProducts action", () => {
    const action = loadProducts();
    expect(action.type).toEqual("[Api Load] Load Products");
  });

  // Test loadProductsSuccess action
  it("should create a loadProductsSuccess action with a shop payload", () => {
    const shop: Shop = {
      products: [
        {
          id: "21sde1",
          title: "Product",
          description: "test",
          price: 0,
          discountPercentage: 0,
          rating: 0,
          stock: 0,
          brand: "test",
          category: "test",
          thumbnail: "test",
          images: [],
        },
      ],
      total: 0,
      skip: 0,
      limit: 0,
    };
    const action = loadProductsSuccess({ shop });
    expect(action.type).toEqual("[Api Success] Load Product Success");
    expect(action.shop).toEqual(shop);
  });

  // Test loadProductsError action
  it("should create a loadProductsError action", () => {
    const action = loadProductsError();
    expect(action.type).toEqual("[Api Error] Load Product Error");
  });

  // Test loadFavorites action
  it("should create a loadFavorites action", () => {
    const action = loadFavorites();
    expect(action.type).toEqual("[Load favorites] Load Favorites");
  });

  // Test addFavorite action
  it("should create an addFavorite action with a product payload", () => {
    const product = {
      id: "21sde1",
      title: "Product",
      description: "test",
      price: 0,
      discountPercentage: 0,
      rating: 0,
      stock: 0,
      brand: "test",
      category: "test",
      thumbnail: "test",
      images: [],
    };
    const action = addFavorite({ product });
    expect(action.type).toEqual("[Add favorites] Add Favorites");
    expect(action.product).toEqual(product);
  });

  // Test removeFavorite action
  it("should create a removeFavorite action with a productId payload", () => {
    const productId = "4";
    const action = removeFavorite({ productId });
    expect(action.type).toEqual("[Favorites] Remove Favorite");
    expect(action.productId).toEqual(productId);
  });

  // Test clearFavorites action
  it("should create a clearFavorites action", () => {
    const action = clearFavorites();
    expect(action.type).toEqual("[Clear Favorites] Remove Favorite list");
  });
});
