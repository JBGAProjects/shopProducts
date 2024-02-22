import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { LoginComponent } from "./login.component";

import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AngularMaterialModule } from "src/app/angular-material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { of, throwError } from "rxjs";

describe("LoginComponent", () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [AuthService, Router],
      imports: [
        HttpClientModule,
        FormsModule,
        AngularMaterialModule,
        BrowserAnimationsModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("onSubmit should log success", () => {
    jest.spyOn(authService, "login").mockReturnValue(of({ token: "fake" }));
    jest.spyOn(router, "navigateByUrl");
    (component.username = "kminchelle"), (component.password = "0lelplR");
    fixture.detectChanges();
    component.onSubmit();
    expect(router.navigateByUrl).toHaveBeenCalledWith("/shop");
  });

  it("onSubmit should handle error response", () => {
    jest.spyOn(authService, "login").mockReturnValue(throwError(() => "error"));
    component.username = "kmincdfdfshelle";
    component.password = "0ldfdselplR";
    component.onSubmit();
    expect(component.error).toBe("Error trying to log in");
  });
});
