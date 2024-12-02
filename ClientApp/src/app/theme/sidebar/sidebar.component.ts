import { Component, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';
import { IdmUser } from '@shared/interfaces/Idm-user';
import { InfoUtente } from '@shared/interfaces/info-utente';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
  @Input() showToggle = true;
  @Input() showUser = true;
  @Input() showHeader = true;
  @Input() toggleChecked = false;

  @Output() toggleCollapsed = new EventEmitter<void>();

  // nomeUtente: string = ' ';
  // matricolaUtente: string = ' ';
  // cognomeUtente: string = ' ';
  // // appRoles: string[] = [];

  constructor(private infoUtentiService: InfoUtentiService) {}

  ngOnInit() {

    // this.infoUtentiService.newInfoUtente().subscribe((info : IdmUser)=>{
    //   this.nomeUtente = info.firstName;
    //   this.cognomeUtente = info.lastName;
    //   this.matricolaUtente = info.matricula;
    //   // this.appRoles = info.appRoles;
    // });

  }
}
