import { TestBed, inject } from '@angular/core/testing';

import { UsersaveService } from './usersave.service';

describe('UsersaveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersaveService]
    });
  });

  it('should be created', inject([UsersaveService], (service: UsersaveService) => {
    expect(service).toBeTruthy();
  }));
});
