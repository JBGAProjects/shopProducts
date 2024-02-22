import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  convertToParamMap,
} from "@angular/router";
import { RouterTestingModule } from "@angular/router/testing";
import { productsCanActivateGuard } from "./productsCanActivate.guard";
import { TestBed } from "@angular/core/testing";
import { ProductsComponent } from "../components/shop-products/products/products.component";
import { LoginComponent } from "../components/login/login.component";

describe("productsCanActivateGuard", () => {
  let router: Router;
  let navigateSpy: jest.SpyInstance;
  let guard: CanActivateFn;

  const mockActivatedRouteSnapshot: ActivatedRouteSnapshot = {
    url: [],
    params: {},
    queryParams: {},
    fragment: null,
    data: {},
    outlet: "",
    component: null,
    routeConfig: null,
    title: "test",
    root: new ActivatedRouteSnapshot(),
    parent: new ActivatedRouteSnapshot(),
    firstChild: new ActivatedRouteSnapshot(),
    children: [new ActivatedRouteSnapshot()],
    pathFromRoot: [new ActivatedRouteSnapshot()],
    paramMap: convertToParamMap({}),
    queryParamMap: convertToParamMap({}),
  };

  const mockRouterStateSnapShot: RouterStateSnapshot = {
    url: "",
    root: new ActivatedRouteSnapshot(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: "products", component: ProductsComponent },
          { path: "login", component: LoginComponent },
        ]),
      ],
    });
    router = TestBed.inject(Router);
    navigateSpy = jest.spyOn(router, "createUrlTree");
    guard = productsCanActivateGuard;
  });

  it("should return true when user is logged in", () => {
    sessionStorage.setItem("isLogged", "true");
    const result = guard(mockActivatedRouteSnapshot, mockRouterStateSnapShot);
    expect(result).toBe(true);
    expect(navigateSpy).not.toHaveBeenCalled();
  });

  xit("should return a UrlTree when user is not logged in", () => {
    sessionStorage.removeItem("isLogged");
    const result = guard(mockActivatedRouteSnapshot, mockRouterStateSnapShot);
    expect(result).toEqual(router.createUrlTree(["/login"]));
    expect(navigateSpy).toHaveBeenCalledWith(["/login"]);
  });
});
