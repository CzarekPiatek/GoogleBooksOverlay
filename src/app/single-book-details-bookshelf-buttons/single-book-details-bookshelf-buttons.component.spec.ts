import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookDetailsBookshelfButtonsComponent } from './single-book-details-bookshelf-buttons.component';

describe('AddBookToBookshelfButtonComponent', () => {
  let component: SingleBookDetailsBookshelfButtonsComponent;
  let fixture: ComponentFixture<SingleBookDetailsBookshelfButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookDetailsBookshelfButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookDetailsBookshelfButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
