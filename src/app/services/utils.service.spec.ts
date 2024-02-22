import { TestBed } from "@angular/core/testing";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { UtilsService } from "./utils.service";
import {
  removeFavorite,
  addFavorite,
  loadFavorites,
} from "../components/ngrx/products.actions";
import { selectProductsFavoritesLoad } from "../components/ngrx/products.selectors";
import { Products } from "../models/shop.interface";

describe("UtilsService", () => {
  let service: UtilsService;
  let store: MockStore;
  let mockProducts: Products[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UtilsService, provideMockStore()],
    });
    service = TestBed.inject(UtilsService);
    store = TestBed.inject(MockStore);
    mockProducts = [
      {
        id: "1",
        title: "Product 1",
        price: 10,
        description: "test",
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "string",
        category: "string",
        thumbnail: "string",
        images: [],
      },
      {
        id: "2",
        title: "Product 2",
        price: 20,
        description: "test",
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "string",
        category: "string",
        thumbnail: "string",
        images: [],
      },
      {
        id: "3",
        title: "Product 3",
        price: 30,
        description: "test",
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "string",
        category: "string",
        thumbnail: "string",
        images: [],
      },
    ];
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should dispatch removeFavorite action if product is already favorite", () => {
    const product = mockProducts[0];
    store.overrideSelector(selectProductsFavoritesLoad, mockProducts);
    store.refreshState();
    const spy = jest.spyOn(store, "dispatch");
    service.toggleFavorite(product);
    expect(spy).toHaveBeenCalledWith(removeFavorite({ productId: product.id }));
  });

  it("should dispatch addFavorite action if product is not favorite", () => {
    const product = mockProducts[0];
    store.overrideSelector(selectProductsFavoritesLoad, mockProducts.slice(1));
    store.refreshState();
    const spy = jest.spyOn(store, "dispatch");
    service.toggleFavorite(product);
    expect(spy).toHaveBeenCalledWith(addFavorite({ product }));
  });

  it("should dispatch loadFavorites action after toggling favorite", () => {
    const product = mockProducts[0];
    store.overrideSelector(selectProductsFavoritesLoad, mockProducts);
    store.refreshState();
    const spy = jest.spyOn(store, "dispatch");
    service.toggleFavorite(product);
    expect(spy).toHaveBeenCalledWith(loadFavorites());
  });
});
