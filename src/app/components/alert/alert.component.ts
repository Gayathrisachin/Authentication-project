import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    public dialogRef: MatDialogRef<AlertComponent>) {
    if (data) {
      // this.message = data.message || this.message;
      // if (data.buttonText) {
      //   this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
      //   this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
      }
    }
  

  ngOnInit(): void {
  }

}
