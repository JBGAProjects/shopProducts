import { Component, ViewChild } from "@angular/core";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { Products } from "src/app/models/shop.interface";
import { loadProducts } from "../../ngrx/products.actions";
import {
  selectLoading,
  selectShopProducts,
} from "../../ngrx/products.selectors";
import { UtilsService } from "src/app/services/utils.service";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  pageSize: number = 12; // Number of items per page
  pageIndex: number = 0; // First page
  loading$: Observable<boolean> = new Observable();
  products$: Observable<Products[]> = new Observable();

  // Paginator reference
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private store: Store<any>, private utilsSvc: UtilsService) {}

  ngOnInit(): void {
    this.store.dispatch(loadProducts());
    this.loading$ = this.store.select(selectLoading);
    this.products$ = this.store.select(selectShopProducts);
  }

  // Function to handle the change page event
  public onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.paginator.pageIndex = event.pageIndex;
  }

  // function to mark or unmark as favorite
  public toggleFavorite(product: Products) {
    this.utilsSvc.toggleFavorite(product);
  }
}
