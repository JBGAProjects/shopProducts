import { ProductService } from "src/app/services/product.service";
import { of, throwError } from "rxjs";
import { Actions } from "@ngrx/effects";
import { TestBed } from "@angular/core/testing";
import {
  loadProducts,
  loadProductsSuccess,
  loadProductsError,
} from "./products.actions";
import { ProductEffects } from "./products.effects";
import { Shop } from "src/app/models/shop.interface";
import { HttpClientModule } from "@angular/common/http";

describe("ProductEffects", () => {
  let effects: ProductEffects;
  let actions$: Actions;
  let service: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      schemas: [],
      providers: [],
      imports: [HttpClientModule],
    }).compileComponents();
  });

  beforeEach(() => {
    service = TestBed.inject(ProductService);
    actions$ = new Actions(of(loadProducts()));
    effects = new ProductEffects(actions$, service);
  });

  it("should create an instance", () => {
    expect(effects).toBeTruthy();
  });

  it("should dispatch loadProductsSuccess action with shop payload when service succeeds", () => {
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
    jest.spyOn(service, "getProducts").mockReturnValue(of([shop]));
    effects.loadProducts$.subscribe((action) => {
      expect(action).toEqual(loadProductsSuccess({ shop }));
    });
  });

  it("should dispatch loadProductsError action with error message when service fails", () => {
    const error = new Error("Internal Error");
    jest.spyOn(service, "getProducts").mockReturnValue(throwError(() => error));
    effects.loadProducts$.subscribe((action) => {
      expect(action).toEqual(loadProductsError());
    });
  });
});
