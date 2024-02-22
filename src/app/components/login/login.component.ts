import { Component, NgZone } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  error: string = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  public onSubmit(): void {
    this.authService
      .login({ username: this.username, password: this.password })
      .subscribe({
        next: (res: any) => {
          //If there is access, user will be redirect to products page
          this.ngZone.run(() => {
            this.router.navigateByUrl("/shop");
          });
          //Token will be save as session item
          sessionStorage.setItem("isLogged", res.token);
        },
        error: () => {
          this.error = "Error trying to log in";
          setTimeout(() => {
            //Error message will be set empty
            this.error = "";
          }, 5000);
        },
      });
  }
}
