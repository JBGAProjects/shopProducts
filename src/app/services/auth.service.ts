import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private apiUrl = "https://dummyjson.com/auth/login"; // URL del punto final de inicio de sesión

  constructor(private http: HttpClient) {}

  public login(credentials: {
    username: string;
    password: string;
  }): Observable<any> {
    return this.http.post<any>(this.apiUrl, credentials);
  }
}
