import { TestBed } from "@angular/core/testing";
import { ProductService } from "./product.service";

import { HttpClientModule } from "@angular/common/http";
import { of } from "rxjs";

describe("ProductService", () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [],
    });

    service = TestBed.inject(ProductService);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("login should call getProducts", () => {
    jest.spyOn(service, "getProducts").mockReturnValue(of([]));
    service.getProducts().subscribe((res) => {
      expect(res).toBe([]);
    });
    expect(service.getProducts).toHaveBeenCalled();
  });
});
