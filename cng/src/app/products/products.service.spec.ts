import { createServiceFactory, createSpyObject, mockProvider, SpectatorService } from '@ngneat/spectator';
import { ProductsService } from './products.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';



describe('ProductsService', () => {
  let spectator: SpectatorService<ProductsService>;
  const createService = createServiceFactory(ProductsService);

  let mockHttpClient = createSpyObject(HttpClient);
  
  beforeEach(() => spectator = createService({
    providers:[mockProvider(HttpClient, mockHttpClient)]
  }));

  it('should call http GET  when fetching products', () => {
    mockHttpClient.get.andReturn(of({}))
    spectator.service.fetchProducts();

    expect(mockHttpClient.get).toHaveBeenCalled()
  });
  it('should get value from httpCLient to product$ Observable after fetching', () => {
    mockHttpClient.get.andReturn(of([{ test: 1 }]))
    spectator.service.fetchProducts();

    spectator.service.products$.subscribe(v => {
        expect(v).toEqual([{ test: 1 }] as any)
    })
  });
});