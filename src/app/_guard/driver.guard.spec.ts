import { TestBed, async, inject } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { LocalStorageService } from 'angular-2-local-storage';

import { DriverGuard } from './driver.guard';

import { MyMockStorageService } from '../_mocks/mocks';

describe('AuthGuard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ DriverGuard, { provide: LocalStorageService, useClass: MyMockStorageService } ],
      imports: [ HttpModule, ReactiveFormsModule, FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should ...', inject([ DriverGuard ], (guard: DriverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
