import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
@Injectable({
  providedIn: 'root',
})
describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));
});


