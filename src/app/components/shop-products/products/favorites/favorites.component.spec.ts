import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FavoritesComponent } from "./favorites.component";

import { UtilsService } from "src/app/services/utils.service";
import { MockStore, provideMockStore } from "@ngrx/store/testing";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { Products } from "src/app/models/shop.interface";
import { loadFavorites } from "src/app/components/ngrx/products.actions";
import { Store } from "@ngrx/store";

describe("FavoritesComponent", () => {
  let component: FavoritesComponent;
  let fixture: ComponentFixture<FavoritesComponent>;
  let store: MockStore;
  let utilsSvc: UtilsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritesComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [provideMockStore({ initialState: {} }), UtilsService],
      imports: [AngularMaterialModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    utilsSvc = TestBed.inject(UtilsService);
    store = TestBed.inject<Store<any>>(Store) as MockStore<any>;
  });

  it("ngOnInit should dispatch loadFavorites", () => {
    const loadFavs = jest.spyOn(store, "dispatch");
    component.ngOnInit();
    expect(loadFavs).toHaveBeenCalledWith(loadFavorites());
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
