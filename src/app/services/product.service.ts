import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private productsUrl = "https://dummyjson.com/products";

  constructor(private http: HttpClient) {}

  // Método para obtener la lista de productos desde la API
  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.productsUrl);
  }
}
