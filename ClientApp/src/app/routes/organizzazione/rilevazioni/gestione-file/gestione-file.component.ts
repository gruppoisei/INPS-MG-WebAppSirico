import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DocumentiService } from '@shared/services/documenti.service';
import { ErroreAllegatoDialogComponent } from 'app/routes/errore-allegato-dialog/errore-allegato-dialog.component';


@Component({
  selector: 'app-gestione-file',
  templateUrl: './gestione-file.component.html',
  styleUrls: ['./gestione-file.component.scss']
})
export class GestioneFileComponent implements OnInit{
  selectedFile: File | null = null;
  showDeletePopup: boolean = false;

  @ViewChild('fileUploader') fileUploader!: ElementRef
  @Input() idAspetto?: number;
  @Output() fileEvent = new EventEmitter()
  @Output() fileEvents = new EventEmitter<{ file: File, idAspetto?: number }>();
  @Output() fileRemovedEvent = new EventEmitter()
  @Output() fileRemovedEvents = new EventEmitter<{ file: File, idAspetto?: number }>();

  constructor(private serviceDocumenti: DocumentiService, private dialog : MatDialog){}
  ngOnInit(): void {}

  sendFile() {
    if (this.idAspetto === 0) {
      // Se idAspetto è uguale a 0, emetti solo il file
      this.fileEvent.emit(this.selectedFile);
    } else {
      if(this.selectedFile)
      // Altrimenti, emetti file e idAspetto
      this.fileEvents.emit({ file: this.selectedFile, idAspetto: this.idAspetto });
    }
  }

   addFile()
  {
    if(this.selectedFile)
    {
      this.serviceDocumenti.verificaAllegato(this.selectedFile).subscribe(
        {
          next: (res) =>
          {
            if(res.valido)
            {
              this.sendFile();
            }
          },
           error : (err) =>
            {
              const dialogConfig = new MatDialogConfig();
              dialogConfig.autoFocus = true;
              dialogConfig.width = 'auto';
              dialogConfig.height = 'auto';
              dialogConfig.data = {errorMessage: err.error.message};
              this.dialog.open(ErroreAllegatoDialogComponent, dialogConfig)
              this.fileUploader.nativeElement.value= "";
              this.selectedFile = null;
            }
        })
    }
    else
    {
      alert('Nessun file selezionato!')
    }
  }

    onFileSelected(event: any)
    {
      this.selectedFile = event.target.files[0];
      if(this.selectedFile !== null)
        this.addFile();
    }

    getFileSize(size : number)
    {
      const fileSizeinBytes = size;
      const fileSizeinKb = fileSizeinBytes / 1024
      return fileSizeinKb.toFixed(0) + 'KB';
    }


    removeFile() {
      if (this.selectedFile &&  this.idAspetto === 0) {
        this.fileRemovedEvent.emit(this.selectedFile);
        this.selectedFile = null;
        this.fileUploader.nativeElement.value = "";
      }
      else if(this.selectedFile && this.idAspetto !==0){
        this.fileRemovedEvents.emit({ file: this.selectedFile, idAspetto: this.idAspetto });
        this.selectedFile = null;
        this.fileUploader.nativeElement.value = "";
      }
      this.showDeletePopup = false
    }

/*     downloadFile(file : File)
    {
      const url = URL.createObjectURL(file);
      const a = document.createElement('a');

      a.href = url;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } */
}

