import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { take } from "rxjs";
import {
  removeFavorite,
  addFavorite,
  loadFavorites,
} from "../components/ngrx/products.actions";
import { selectProductsFavoritesLoad } from "../components/ngrx/products.selectors";
import { Products } from "../models/shop.interface";

@Injectable({
  providedIn: "root",
})
export class UtilsService {
  constructor(private store: Store<any>) {}

  toggleFavorite(product: Products) {
    // Verificar si el producto ya está marcado como favorito
    this.store
      .select(selectProductsFavoritesLoad)
      .pipe(take(1))
      .subscribe((products) => {
        const isFavorite = products.some((p: any) => p.id === product.id);
        if (isFavorite) {
          // Si el producto ya es un favorito, lo eliminamos de la lista de favoritos
          this.store.dispatch(removeFavorite({ productId: product.id }));
        } else {
          // Si el producto no es un favorito, lo agregamos a la lista de favoritos
          this.store.dispatch(addFavorite({ product }));
        }
      });

    this.store.dispatch(loadFavorites());
  }
}
