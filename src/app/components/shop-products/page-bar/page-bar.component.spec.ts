import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PageBarComponent } from "./page-bar.component";

import { Store } from "@ngrx/store";
import { RouterTestingModule } from "@angular/router/testing";
import { clearFavorites, loadFavorites } from "../../ngrx/products.actions";
import { provideMockStore, MockStore } from "@ngrx/store/testing";
import { Router } from "@angular/router";
import { AngularMaterialModule } from "src/app/angular-material.module";

describe("PageBarComponent", () => {
  let component: PageBarComponent;
  let fixture: ComponentFixture<PageBarComponent>;
  let store: MockStore;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageBarComponent],
      imports: [RouterTestingModule, AngularMaterialModule],
      providers: [provideMockStore({ initialState: {} })],
    }).compileComponents();

    fixture = TestBed.createComponent(PageBarComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    store = TestBed.inject<Store<any>>(Store) as MockStore<any>;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("ngOnInit should dispatch loadFavorites", () => {
    const loadFavoritesSpy = jest.spyOn(store, "dispatch");
    component.ngOnInit();
    expect(loadFavoritesSpy).toHaveBeenCalledWith(loadFavorites());
  });

  it("logout should dispatch clearFavorites and navigate to login when log out", () => {
    const clearFavoritesSpy = jest.spyOn(store, "dispatch");
    jest.spyOn(router, "navigate");
    jest
      .spyOn(window.sessionStorage["__proto__"], "getItem")
      .mockReturnValue("true");
    component.logout();
    expect(clearFavoritesSpy).toHaveBeenCalledWith(clearFavorites());
    expect(router.navigate).toHaveBeenCalledWith(["/login"]);
  });
});
