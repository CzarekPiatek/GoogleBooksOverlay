import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDialogSimpleComponent } from './material-dialog-simple.component';

describe('MaterialDialogSimpleComponent', () => {
  let component: MaterialDialogSimpleComponent;
  let fixture: ComponentFixture<MaterialDialogSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialDialogSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialDialogSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
