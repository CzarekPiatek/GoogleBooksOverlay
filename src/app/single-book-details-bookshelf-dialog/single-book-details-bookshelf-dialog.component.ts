import {Component, Inject, OnInit} from '@angular/core';
import {MDC_DIALOG_DATA, MdcDialogRef} from '@angular-mdc/web';

@Component({
  selector: 'app-single-book-details-bookshelf-dialog',
  templateUrl: './single-book-details-bookshelf-dialog.component.html',
  styleUrls: ['./single-book-details-bookshelf-dialog.component.scss']
})
export class SingleBookDetailsBookshelfDialogComponent implements OnInit {
  data;

  constructor(public dialogRef: MdcDialogRef<SingleBookDetailsBookshelfDialogComponent>,
              @Inject(MDC_DIALOG_DATA) data) {
    this.data = data;
  }

  closeDialog(id: string): void {
    this.dialogRef.close(id);
  }

  ngOnInit() {
  }
}
