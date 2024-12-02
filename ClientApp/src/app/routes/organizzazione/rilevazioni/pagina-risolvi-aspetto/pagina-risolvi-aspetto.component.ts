import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Location } from '@angular/common';
import { ModaleTestiAspettiComponent } from '../modale-testi-aspetti/modale-testi-aspetti.component';
import { ModalRisolviComponent } from '../modal-risolvi/modal-risolvi.component';
import { StepperService } from '@shared/services/stepper.service';

@Component({
  selector: 'app-pagina-risolvi-aspetto',
  templateUrl: './pagina-risolvi-aspetto.component.html',
  styleUrls: ['./pagina-risolvi-aspetto.component.scss']
})
export class PaginaRisolviAspettoComponent implements OnInit {

  // aspetto: Aspetto[] = [];
  aspettoConNote: AspettoConNote | undefined = undefined;
  listaAspettiConNote: AspettoConNote[] = [];
  
  constructor(private location : Location, private dialog: MatDialog, private stepperService: StepperService){}

  ngOnInit(): void {

    for (let i=0; i<this.aspetti.length; i++) {
      this.aspettoConNote = {
        idAspetto: this.aspetti[i].idAspetto,
        nomeAspetto: this.aspetti[i].nomeAspetto,
        descrizioneCriticita: this.aspetti[i].descrizioneCriticita,
        descrizioneSuggerimento: this.aspetti[i].descrizioneSuggerimento,
        descrizioneNote: ''
        }
      this.listaAspettiConNote.push(this.aspettoConNote);
    }
  }

  goBack() {
    this.location.back();
    }

  handleSpecialClick(aspetto: Aspetto, nuovoAspetto: boolean) {
    this.stepperService.setcheckNuovoAspetto(nuovoAspetto);
    // this.stepperService.datiAspettoDaRisolvere$.next(aspetto);
    const dialogRef = this.dialog.open(ModalRisolviComponent,{
      width: '75%',
      height: '60%',
      // data: aspetto
    })
    dialogRef.afterClosed().subscribe(result => {
      // patchvalue per note
      this.stepperService.datiAspetto$.next(undefined);
    });
  }

    mostraTesto(testo: string,  id: number) {
      if(id !==9 && testo.trim() !== ''){
        this.dialog.open(ModaleTestiAspettiComponent,
          {
            // width: 'auto',
            width: '75%',
            height: '60%',
            data : {text: testo}
          });
      }
  }

  showDescrizioneTroncata(descrizione: string): string {
    if (descrizione.length > 53) { return descrizione.substring(0,50)+'...'}
    else { return descrizione; }
  }

  // eliminaAspetto(aspetto: Aspetto, event: Event) {
  //   event.stopPropagation(); // Impedisce che l'evento si propaghi alla riga
  //   this.aspetti = this.aspetti.filter(a => a.idAspetto !== aspetto.idAspetto);
  // }

 aspetti:  Aspetto[] = [
  { idAspetto: 1, nomeAspetto: 'Aspetti Informatici', descrizioneCriticita: 'Problemi di rete', descrizioneSuggerimento: 'Migliorare infrastruttura IT' },
  { idAspetto: 2, nomeAspetto: 'Aspetti Organizzativi', descrizioneCriticita: 'Scarsa comunicazione interna', descrizioneSuggerimento: 'Implementare riunioni settimanali' },
  { idAspetto: 5, nomeAspetto: 'Fattori Esogeni', descrizioneCriticita: 'Influenza esterna', descrizioneSuggerimento: '' },
  { idAspetto: 9, nomeAspetto: 'Aspetti Ambientali', descrizioneCriticita: 'Inquinamento ambientale', descrizioneSuggerimento: 'Promuovere pratiche green' },
];

//  aspettiConNote:  AspettoConNote[] = [
//   { idAspetto: 1, nomeAspetto: 'Aspetti Informatici', descrizioneCriticita: 'Problemi di rete', descrizioneSuggerimento: 'Migliorare infrastruttura IT', descrizioneNote: '' },
//   { idAspetto: 2, nomeAspetto: 'Aspetti Organizzativi', descrizioneCriticita: 'Scarsa comunicazione interna', descrizioneSuggerimento: 'Implementare riunioni settimanali', descrizioneNote: '' },
//   { idAspetto: 5, nomeAspetto: 'Fattori Esogeni', descrizioneCriticita: 'Influenza esterna', descrizioneSuggerimento: '', descrizioneNote: '' },
//   { idAspetto: 9, nomeAspetto: 'Aspetti Ambientali', descrizioneCriticita: 'Inquinamento ambientale', descrizioneSuggerimento: 'Promuovere pratiche green', descrizioneNote: '' },
// ];

}

interface Aspetto {
  idAspetto: number,
  nomeAspetto: string,
  descrizioneCriticita: string,
  descrizioneSuggerimento: string
}

interface AspettoConNote {
  idAspetto: number,
  nomeAspetto: string,
  descrizioneCriticita: string,
  descrizioneSuggerimento: string,
  descrizioneNote: string
}


