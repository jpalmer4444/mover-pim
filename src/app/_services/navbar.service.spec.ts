import { TestBed, inject } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

import { NavbarService } from './navbar.service';

describe('NavbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NavbarService ],
      imports: [ RouterTestingModule ]
    });
  });

  it('should be created', inject([NavbarService], (service: NavbarService) => {
    expect(service).toBeTruthy();
  }));
});
