import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesComponent } from "./products/favorites/favorites.component";
import { ProductsComponent } from "./products/products.component";

const routes: Routes = [
  { path: "", component: ProductsComponent },

  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "favorites",
    component: FavoritesComponent,
  },

  { path: "**", redirectTo: "/shop/products", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopProductsRoutingModule {}
