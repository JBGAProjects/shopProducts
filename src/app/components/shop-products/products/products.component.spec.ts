import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProductsComponent } from "./products.component";
import { loadProducts } from "../../ngrx/products.actions";
import { UtilsService } from "src/app/services/utils.service";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { Store } from "@ngrx/store";
import { PageEvent } from "@angular/material/paginator";
import { Products } from "src/app/models/shop.interface";

describe("ProductsComponent", () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let store: MockStore;
  let utilsSvc: UtilsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState: {} }), UtilsService],
      imports: [AngularMaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    store = TestBed.inject<Store<any>>(Store) as MockStore<any>;
    utilsSvc = TestBed.inject(UtilsService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("ngOnInit should dispatch loadProducts", () => {
    const load = jest.spyOn(store, "dispatch");
    component.ngOnInit();
    expect(load).toHaveBeenCalledWith(loadProducts());
  });

  it("onPageChange pageIndex should have the same number of our eventMock", () => {
    const event: PageEvent = {
      pageIndex: 2,
      pageSize: 2,
      length: 2,
    };
    component.onPageChange(event);
    expect(component.pageIndex).toBe(2);
  });

  it("toggleFavorite should call utilService toggleFavorite", () => {
    const product: Products = {
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
    jest.spyOn(utilsSvc, "toggleFavorite");
    component.toggleFavorite(product);
    expect(utilsSvc.toggleFavorite).toHaveBeenCalledWith(product);
  });
});
