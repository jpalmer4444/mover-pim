import { TestBed, async, inject } from '@angular/core/testing';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';

import { LocalStorageService } from 'angular-2-local-storage';

import { MoverGuard } from './mover.guard';

import { MyMockStorageService } from '../_mocks/mocks';

describe('MoverGuard', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ MoverGuard, { provide: LocalStorageService, useClass: MyMockStorageService } ],
      imports: [ HttpModule, ReactiveFormsModule, FormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  it('should ...', inject([ MoverGuard ], (guard: MoverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
