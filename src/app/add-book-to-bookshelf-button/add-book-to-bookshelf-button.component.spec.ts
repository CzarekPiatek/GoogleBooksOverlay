import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookToBookshelfButtonComponent } from './add-book-to-bookshelf-button.component';

describe('AddBookToBookshelfButtonComponent', () => {
  let component: AddBookToBookshelfButtonComponent;
  let fixture: ComponentFixture<AddBookToBookshelfButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBookToBookshelfButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookToBookshelfButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
