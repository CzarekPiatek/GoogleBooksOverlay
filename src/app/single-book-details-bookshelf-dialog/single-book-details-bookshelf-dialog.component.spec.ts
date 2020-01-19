import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBookDetailsBookshelfDialogComponent } from './single-book-details-bookshelf-dialog.component';

describe('MaterialDialogSimpleComponent', () => {
  let component: SingleBookDetailsBookshelfDialogComponent;
  let fixture: ComponentFixture<SingleBookDetailsBookshelfDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBookDetailsBookshelfDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBookDetailsBookshelfDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
