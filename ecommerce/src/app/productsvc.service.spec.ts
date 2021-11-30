import { TestBed } from '@angular/core/testing';

import { ProductsvcService } from './productsvc.service';

describe('ProductsvcService', () => {
  let service: ProductsvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
