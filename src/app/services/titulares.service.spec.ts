/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TitularesService } from './titulares.service';

describe('TitularesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TitularesService]
    });
  });

  it('should ...', inject([TitularesService], (service: TitularesService) => {
    expect(service).toBeTruthy();
  }));
});
