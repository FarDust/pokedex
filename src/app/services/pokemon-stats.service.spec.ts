import { TestBed } from '@angular/core/testing';

import { PokemonStatsService } from './pokemon-stats.service';

describe('PokemonStatsService', () => {
  let service: PokemonStatsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonStatsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
