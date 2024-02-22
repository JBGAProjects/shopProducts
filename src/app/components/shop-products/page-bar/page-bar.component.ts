import { Component, NgZone, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Products } from "src/app/models/shop.interface";
import { clearFavorites, loadFavorites } from "../../ngrx/products.actions";
import { selectProductsFavoritesLoad } from "../../ngrx/products.selectors";

@Component({
  selector: "app-page-bar",
  templateUrl: "./page-bar.component.html",
  styleUrls: ["./page-bar.component.scss"],
})
export class PageBarComponent {
  favorites$: Observable<Products[]> = new Observable();

  // Referencia al paginador
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private store: Store<any>,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadFavorites());
    this.favorites$ = this.store.select(selectProductsFavoritesLoad);
  }

  //Function to redirect to login when log out and clear favorites
  public logout() {
    if (sessionStorage.getItem("isLogged")) {
      sessionStorage.removeItem("isLogged");
      this.store.dispatch(clearFavorites());
      this.ngZone.run(() => {
        this.router.navigate(["/login"]);
      });
    }
  }
}
