/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JuicioService } from './juicio.service';

describe('JuicioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JuicioService]
    });
  });

  it('should ...', inject([JuicioService], (service: JuicioService) => {
    expect(service).toBeTruthy();
  }));
});
