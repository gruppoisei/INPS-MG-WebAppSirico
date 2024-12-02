import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-errore-allegato-dialog',
  templateUrl: './errore-allegato-dialog.component.html',
  styleUrls: ['./errore-allegato-dialog.component.scss']
})
export class ErroreAllegatoDialogComponent implements OnInit {

  errorMessage : string;

  constructor(@Inject (MAT_DIALOG_DATA) public data : any) {
    this.errorMessage = data.errorMessage;
   }

  ngOnInit(): void {
  }

}
