import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchForBooksSingleCardComponent } from './search-for-books-single-card.component';

describe('MaterialCardComponent', () => {
  let component: SearchForBooksSingleCardComponent;
  let fixture: ComponentFixture<SearchForBooksSingleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchForBooksSingleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchForBooksSingleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
