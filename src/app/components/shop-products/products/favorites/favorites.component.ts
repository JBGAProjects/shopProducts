import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadFavorites } from "src/app/components/ngrx/products.actions";
import { selectProductsFavoritesLoad } from "src/app/components/ngrx/products.selectors";
import { Products } from "src/app/models/shop.interface";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrl: "./favorites.component.scss",
})
export class FavoritesComponent {
  favorites$: Observable<Products[]> = new Observable();

  constructor(private store: Store<any>, private utilsSvc: UtilsService) {}

  ngOnInit(): void {
    this.store.dispatch(loadFavorites());
    this.favorites$ = this.store.select(selectProductsFavoritesLoad);
  }

  // function to mark or unmark as favorite
  public toggleFavorite(product: Products) {
    this.utilsSvc.toggleFavorite(product);
  }
}
