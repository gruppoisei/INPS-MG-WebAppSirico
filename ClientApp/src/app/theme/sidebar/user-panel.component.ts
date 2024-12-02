import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@core/authentication';
import { InfoUtente } from '@shared/interfaces/info-utente';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
import { SwichtRuoloService } from '@shared/services/swicht-ruolo.service';
import { UserService } from '@shared/services/user.service';

@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss'],
})
export class UserPanelComponent implements OnInit {
  idMatricola = '';
  idNome = '';
  idCognome = '';
  dataSource: any[] = [];
  user!: User;

  isAmministratore: boolean = false;

  constructor(
    private infoUtentiService: InfoUtentiService,
    private router: Router,
    private auth: AuthService,
    private swichtRuolo: SwichtRuoloService
  ) {}
  ngOnInit(): void {
    /*     this.utente.getUser(this.idMatricola, this.idCognome,this.idNome).subscribe(data=> {
      this.dataSource = data;
    }) */
    this.auth.user().subscribe(user => (this.user = user));

 /*    this.infoUtentiService.infoUtente().subscribe((info: InfoUtente) => {
      this.isAmministratore = info.amministratore;
    }); */
  }

  logout() {
    this.auth.logout().subscribe(() => this.router.navigateByUrl('/auth/login'));
  }

  onRuoloSelected(ruoloSelezioninato: string) {
    switch (ruoloSelezioninato) {
      case 'amministratore': {
        this.swichtRuolo.SwitchRuolo(true);
        break;
      }
      case 'dirigente': {
        this.swichtRuolo.SwitchRuolo(false);
        break;
      }
      default: {
        // console.log('ruolo selezionato non valido');
        break;
      }
    }
  }
}
