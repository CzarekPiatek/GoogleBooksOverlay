import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfCardListComponent } from './bookshelf-card-list.component';

describe('BookshelfCardListComponent', () => {
  let component: BookshelfCardListComponent;
  let fixture: ComponentFixture<BookshelfCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookshelfCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
