import { TestBed } from "@angular/core/testing";
import { AuthService } from "./auth.service";

import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";

describe("AuthService", () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });

    service = TestBed.inject(AuthService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("login should call login", () => {
    jest.spyOn(service, "login").mockReturnValue(of({ token: "test" }));
    const credentials = { username: "test", password: "test" };
    service.login(credentials).subscribe((res) => {
      expect(res.token).toBe("test");
    });
    expect(service.login).toHaveBeenCalledWith(credentials);
  });
});
