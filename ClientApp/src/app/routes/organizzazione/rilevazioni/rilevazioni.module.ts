import { ChangeDetectionStrategy, NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RilevazioniRoutingModule } from './rilevazioni-routing.module';
import { RilevazioniComponent } from './rilevazioni.component';
import { RilevazioniNuovaComponent } from './rilevazioni-nuova/rilevazioni-nuova.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { RilevazioniModificaComponent } from './rilevazioni-modifica/rilevazioni-modifica.component';
// import { RilevazioniGestioneComponent } from './rilevazioni-gestione/rilevazioni-gestione.component';
// import { Step1ParametriComponent } from './rilevazioni-gestione/step1-parametri/step1-parametri.component';
// import { Step2FlussoLavoroComponent } from './rilevazioni-gestione/step2-flusso-lavoro/step2-flusso-lavoro.component';
// import { Step3GestioneRicorsiComponent } from './rilevazioni-gestione/step3-gestione-ricorsi/step3-gestione-ricorsi.component';
// import { Step4RilevazioneComponent } from './rilevazioni-gestione/step4-rilevazione/step4-rilevazione.component';
// import { DialogNoteComponent } from './rilevazioni-gestione/step4-rilevazione/dialog-note/dialog-note.component';
// import { ConfirmSaveComponent } from './rilevazioni-gestione/confirm-save/confirm-save.component';
// import { RilevazioniDialogComponent } from './rilevazioni-dialog/rilevazioni-dialog.component';
// import { DialogErroreComponent } from './rilevazioni-gestione/dialog-errore/dialog-errore.component';
import { StepperDialogModificaComponent } from './stepper-dialog-modifica/stepper-dialog-modifica.component';
import { StepperDialogCreazioneAspettoComponent } from './stepper-dialog-creazione-aspetto/stepper-dialog-creazione-aspetto.component';
import { PaginaRisolviAspettoComponent } from './pagina-risolvi-aspetto/pagina-risolvi-aspetto.component';
import { ModaleTestiAspettiComponent } from './modale-testi-aspetti/modale-testi-aspetti.component';
import { ModalRisolviComponent } from './modal-risolvi/modal-risolvi.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {NativeDateAdapter} from '@angular/material/core';
import { GestioneSegnalazioneGerarchicoComponent } from './gestione-segnalazione-gerarchico/gestione-segnalazione-gerarchico.component';
import { ModalModificaSegnalazioneComponent } from './modal-modifica-segnalazione/modal-modifica-segnalazione.component';
import { ModalRisolviContenziosoComponent } from './modal-risolvi-contenzioso/modal-risolvi-contenzioso.component';
import { ModalDettagliGestioneComponent } from './modal-dettagli-gestione/modal-dettagli-gestione.component';
import { ModalDettalgiGestioneContenziosiComponent } from './modal-dettagli-gestione-contenziosi/modal-dettalgi-gestione-contenziosi.component';
import { ApprovazioniComponent } from './approvazione/approvazioni/approvazioni.component';
import { GestioneFileComponent } from './gestione-file/gestione-file.component';
import { ModalDettagliSegnalazioneComponent } from './modal-dettagli-segnalazione/modal-dettagli-segnalazione.component';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


const COMPONENTS: any[] = [
  RilevazioniComponent,
  RilevazioniNuovaComponent,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule,
            RilevazioniRoutingModule,
            DragDropModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule,
            MatInputModule,
            MatAutocompleteModule,
            MatDialogModule,
            MatDatepickerModule,
            ],
            providers: [NativeDateAdapter],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, /*RilevazioniDialogComponent, RilevazioniModificaComponent, RilevazioniGestioneComponent, Step1ParametriComponent, Step2FlussoLavoroComponent, Step3GestioneRicorsiComponent, Step4RilevazioneComponent, DialogNoteComponent, ConfirmSaveComponent, DialogErroreComponent,*/ StepperDialogModificaComponent, StepperDialogCreazioneAspettoComponent, PaginaRisolviAspettoComponent, ModaleTestiAspettiComponent, ModalRisolviComponent, GestioneSegnalazioneGerarchicoComponent, ModalModificaSegnalazioneComponent, ModalRisolviContenziosoComponent, ModalDettagliGestioneComponent, ModalDettalgiGestioneContenziosiComponent, ApprovazioniComponent, GestioneFileComponent, ModalDettagliSegnalazioneComponent],
})
export class RilevazioniModule {}
