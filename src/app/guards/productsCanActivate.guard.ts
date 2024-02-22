import { Inject } from "@angular/core";
import { Router, type CanActivateFn } from "@angular/router";

export const productsCanActivateGuard: CanActivateFn = (route, state) => {
  const router = Inject(Router);

  if (sessionStorage.getItem("isLogged")) {
    return true;
  } else {
    return router.createUrlTree(["/login"]); // Redirects to login pagen when user is not log in
  }
};
