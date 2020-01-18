import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookLanguage} from '../model/book-language.enum';
import {BookOrder} from '../model/book-order.enum';
import {BookFilter} from '../model/book-filter.enum';
import {BookMaxAllowedMaturityRating} from '../model/book-max-allowed-maturity-rating.enum';
import {BookPrintType} from '../model/book-print-type.enum';
import {BookProjection} from '../model/book-projection.enum';
import {BookSellAbility} from '../model/book-sell-ability.enum';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
  }]
})
export class AdvancedSearchComponent implements OnInit {
  @Output() booksValues = new EventEmitter();
  langRestrict = BookLanguage;
  orderBy = BookOrder;
  filter = BookFilter;
  maxAllowedMaturityRating = BookMaxAllowedMaturityRating;
  printType = BookPrintType;
  projection = BookProjection;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      orderBy: ['', Validators.required],
      langRestrict: [''],
      filter: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      maxAllowedMaturityRating: ['', Validators.required],
      printType: ['', Validators.required],
      projection: ['', Validators.required],
    });
  }
  send() {
    this.booksValues.emit({
      firstFormGroup: this.firstFormGroup.value,
      secondFormGroup: this.secondFormGroup.value
    });
  }
}
