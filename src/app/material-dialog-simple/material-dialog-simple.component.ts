import {Component, Inject, OnInit} from '@angular/core';
import {MDC_DIALOG_DATA, MdcDialogRef} from "@angular-mdc/web";

@Component({
  selector: 'app-material-dialog-simple',
  templateUrl: './material-dialog-simple.component.html',
  styleUrls: ['./material-dialog-simple.component.scss']
})
export class MaterialDialogSimpleComponent implements OnInit {
  data;
  constructor(public dialogRef: MdcDialogRef<MaterialDialogSimpleComponent>,
              @Inject(MDC_DIALOG_DATA) data) {
    this.data = data;
  }
  closeDialog(id: string): void {
    this.dialogRef.close(id);
  }
  ngOnInit() {
  }
}
