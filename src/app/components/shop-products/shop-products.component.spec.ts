import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ShopProductsComponent } from "./shop-products.component";
import { PageBarComponent } from "./page-bar/page-bar.component";
import { provideMockStore } from "@ngrx/store/testing";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("ShopProductsComponent", () => {
  let component: ShopProductsComponent;
  let fixture: ComponentFixture<ShopProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [],
      declarations: [ShopProductsComponent, PageBarComponent],
      providers: [provideMockStore({ initialState: {} })],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ShopProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
