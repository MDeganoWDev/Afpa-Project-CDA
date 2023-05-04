import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRechercheComponent } from './list-recherche.component';

describe('ListRechercheComponent', () => {
  let component: ListRechercheComponent;
  let fixture: ComponentFixture<ListRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRechercheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
