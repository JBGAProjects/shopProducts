//se encarga de hacer la conexión con las APIS

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of } from "rxjs";
import { ProductService } from "src/app/services/product.service";

@Injectable()
export class ProductEffects {
  constructor(private actions$: Actions, private productSvc: ProductService) {}

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Api Load] Load Products"),
      mergeMap(() =>
        this.productSvc.getProducts().pipe(
          map(
            (shop) => ({
              type: "[Api Success] Load Product Success",
              shop,
            }),
            catchError((error) => {
              return of({
                type: "[Api Error] Load Product Error",
                error: error.message,
              });
            })
          )
        )
      )
    )
  );
}
