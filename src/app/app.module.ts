import { NgModule, isDevMode } from "@angular/core";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AngularMaterialModule } from "./angular-material.module";
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCERS } from "./components/ngrx/app.state";
import { EffectsModule } from "@ngrx/effects";
import { ProductEffects } from "./components/ngrx/products.effects";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PageBarComponent } from "./components/shop-products/page-bar/page-bar.component";
import { ProductsComponent } from "./components/shop-products/products/products.component";
import { FavoritesComponent } from "./components/shop-products/products/favorites/favorites.component";
import { ShopProductsComponent } from "./components/shop-products/shop-products.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageBarComponent,
    ShopProductsComponent,
    ProductsComponent,
    FavoritesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    EffectsModule.forRoot(ProductEffects),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
