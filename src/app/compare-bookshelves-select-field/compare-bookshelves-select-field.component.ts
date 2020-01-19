import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-compare-bookshelves-select-field',
  templateUrl: './compare-bookshelves-select-field.component.html',
  styleUrls: ['./compare-bookshelves-select-field.component.scss']
})
export class CompareBookshelvesSelectFieldComponent implements OnInit {
  @Input() allBookshelves;
  @Output() idOfBookshelf = new EventEmitter<string>();
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      idOfBookshelf: ['', Validators.required],
    });
  }

  search() {
    if (this.formGroup.value.idOfBookshelf !== '') {
      this.idOfBookshelf.emit(this.formGroup.value.idOfBookshelf);
    }
  }
}
