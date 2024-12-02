import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { RoutesRoutingModule } from './routes-routing.module';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { LoginComponent } from './sessions/login/login.component';
// import { RegisterComponent } from './sessions/register/register.component';
import { Error403Component } from './sessions/403.component';
import { Error404Component } from './sessions/404.component';
import { Error500Component } from './sessions/500.component';
import { PopupComunicazioniComponent } from './popup-comunicazioni/popup-comunicazioni.component';
// import { PopupAlertScadenzeComponent } from './popup-alert-scadenze/popup-alert-scadenze.component';
import { LocalUserLoginComponent } from './local-user-login/local-user-login/local-user-login.component';
import { PopupErroreInserimentoComponent } from './popup-errore-inserimento/popup-errore-inserimento.component';
import { ErroreAllegatoDialogComponent } from './errore-allegato-dialog/errore-allegato-dialog.component';
import { ModalDettagliDashboardComponent } from './dashboard/modal-dettagli-dashboard/modal-dettagli-dashboard.component';


const COMPONENTS: any[] = [
  DashboardComponent,
  // LoginComponent,
  // RegisterComponent,
  Error403Component,
  Error404Component,
  Error500Component,
];
const COMPONENTS_DYNAMIC: any[] = [];

@NgModule({
  imports: [SharedModule, RoutesRoutingModule,MatInputModule,FormsModule],
  declarations: [...COMPONENTS, ...COMPONENTS_DYNAMIC, PopupComunicazioniComponent, /*PopupAlertScadenzeComponent,*/ LocalUserLoginComponent, PopupErroreInserimentoComponent, ErroreAllegatoDialogComponent, ModalDettagliDashboardComponent],
  entryComponents: [
    PopupErroreInserimentoComponent // Assicurati che il componente sia anche qui se necessario per i dialoghi dinamici
  ],
})
export class RoutesModule {}
