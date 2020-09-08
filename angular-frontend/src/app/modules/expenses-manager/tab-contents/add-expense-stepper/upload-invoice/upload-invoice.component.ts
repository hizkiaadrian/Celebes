import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-upload-invoice',
  templateUrl: './upload-invoice.component.html',
  styleUrls: ['./upload-invoice.component.scss']
})
export class UploadInvoiceComponent implements OnInit {
  fileToUpload: File
  @Input() uploadInvoiceForm: FormGroup

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  selectFile = event => {
    if (!event.target.files[0] || event.target.files[0].length == 0) {

      this.snackBar.open("You must select an image","",{panelClass:['error-snackbar']})
      return;
    }

    if(event.target.files[0].type.match(/image\/*/) == null) {
      this.snackBar.open("Only images are supported","",{panelClass:['error-snackbar']})
      return;
    }

    this.fileToUpload = event.target.files[0];
    console.log(this.fileToUpload)
  }

}
