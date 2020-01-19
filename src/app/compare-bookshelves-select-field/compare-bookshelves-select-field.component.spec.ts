import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareBookshelvesSelectFieldComponent } from './compare-bookshelves-select-field.component';

describe('CompareBookshelvesSelectFieldComponent', () => {
  let component: CompareBookshelvesSelectFieldComponent;
  let fixture: ComponentFixture<CompareBookshelvesSelectFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompareBookshelvesSelectFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareBookshelvesSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
