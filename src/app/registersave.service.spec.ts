import { TestBed, inject } from '@angular/core/testing';

import { RegistersaveService } from './registersave.service';

describe('RegistersaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistersaveService]
    });
  });

  it('should be created', inject([RegistersaveService], (service: RegistersaveService) => {
    expect(service).toBeTruthy();
  }));
});
