import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBookshelvesComponent } from './compare-bookshelves.component';

describe('CompareBookshelvesComponent', () => {
  let component: CompareBookshelvesComponent;
  let fixture: ComponentFixture<CompareBookshelvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBookshelvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBookshelvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
