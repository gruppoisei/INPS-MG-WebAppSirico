import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogApplicativoComponent } from './log-applicativo/log-applicativo.component';
import { AreaAmministrativaRoutingModule } from './area-amministrativa-routing.module';
import { LogApplicativoDialogComponent } from './log-applicativo-dialog/log-applicativo-dialog.component';
import { SharedModule } from '@shared/shared.module';
import { ComunicazioniComponent } from './comunicazioni/comunicazioni.component';
import { ComunicazioneNuovaComponent } from './comunicazioni/comunicazione-nuova/comunicazione-nuova.component';
import { ComunicazioneAggiornaComponent } from './comunicazioni/comunicazione-aggiorna/comunicazione-aggiorna.component';
import { ListaUtentiComponent } from './lista-utenti/lista-utenti.component';
import { GestioneSegnalazioneGerarchicoComponent } from '../organizzazione/rilevazioni/gestione-segnalazione-gerarchico/gestione-segnalazione-gerarchico.component';
import { DettaglioComunicazioneComponent } from './dettaglio-comunicazione/dettaglio-comunicazione.component';
import { ListaUtentiModificaComponent } from './lista-utenti-modifica/lista-utenti-modifica.component';




@NgModule({
  declarations: [

    ComunicazioniComponent,
    ComunicazioneAggiornaComponent,
    ComunicazioneNuovaComponent,
    LogApplicativoComponent,
    LogApplicativoDialogComponent,
    ListaUtentiComponent,
    DettaglioComunicazioneComponent,
    ListaUtentiModificaComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [SharedModule,
    CommonModule,
    AreaAmministrativaRoutingModule

  ],
})
export class AreaAmministrativaModule { }
