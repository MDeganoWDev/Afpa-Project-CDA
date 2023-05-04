import { TestBed } from '@angular/core/testing';

import { MoteurRechercheService } from './moteur-recherche.service';

describe('MoteurRechercheService', () => {
  let service: MoteurRechercheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoteurRechercheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
