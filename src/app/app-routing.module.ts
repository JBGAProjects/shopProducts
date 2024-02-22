import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/shop-products/products/products.component";
import { productsCanActivateGuard } from "./guards/productsCanActivate.guard";
import { FavoritesComponent } from "./components/shop-products/products/favorites/favorites.component";
import { ShopProductsComponent } from "./components/shop-products/shop-products.component";
/* 
import { FavoritesComponent } from "./components/favorites/favorites.component";
 */
const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  {
    path: "shop",
    component: ShopProductsComponent,
    canActivate: [productsCanActivateGuard],
    loadChildren: () =>
      import("./components/shop-products/shop-products-routing.module").then(
        (m) => m.ShopProductsRoutingModule
      ),
  },

  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
