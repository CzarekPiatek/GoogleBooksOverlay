import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBookshelvesTableComponent } from './compare-bookshelves-table.component';

describe('CompareBookshelvesTableComponent', () => {
  let component: CompareBookshelvesTableComponent;
  let fixture: ComponentFixture<CompareBookshelvesTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBookshelvesTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBookshelvesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
