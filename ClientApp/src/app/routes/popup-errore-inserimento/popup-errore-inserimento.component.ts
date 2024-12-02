import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-errore-inserimento',
  templateUrl: './popup-errore-inserimento.component.html',
  styleUrls: ['./popup-errore-inserimento.component.scss']
})
export class PopupErroreInserimentoComponent {

  constructor(public dialogRef: MatDialogRef<PopupErroreInserimentoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }


  onClose(): void {
    this.dialogRef.close();
  }
}
