import { HttpClient } from '@angular/common/http';
import {
  Component,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { environment } from '@env/environment.prod';
import screenfull from 'screenfull';
import { InfoUtentiService } from '@shared/services/info-utenti.service';
import { InfoUtente } from '@shared/interfaces/info-utente';
import { NotificheService } from '@shared/services/notifiche.service';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { StorageService } from '@shared';

declare var require: any
const FileSaver = require('file-saver');

@Component({
  selector: 'app-header',
  host: {
    class: 'matero-header',
  },
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
   changeDetection: ChangeDetectionStrategy.Default,
})
export class HeaderComponent implements  AfterViewInit{
  @Input() showToggle = true;
  @Input() showBranding = false;

  public notificationsCount: number = 0;

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleSidenavNotice = new EventEmitter<void>();

    versioneSoftware ?: string;
    ruolo: string = '';


  constructor(private notificationService: NotificheService, private storageService: StorageService){
  }

  ngOnInit(): void {
    this.notificationService.notificationsCount$.subscribe(count => {
      this.notificationsCount = count;
    });
    this.ruolo = this.storageService.getItem('allroles')
  }

   ngAfterViewInit(): void{
/*       this.http.get<string>(environment.MS_SIRICOAPI + environment.API_URI+'infoApplicativo/versione', {responseType:'text' as 'json'}).subscribe(
            version => {
                this.versioneSoftware = version;
      }) */

/*       this.infoUtentiService.infoUtente().subscribe((info: InfoUtente) => {
        //leggo ruolo e matricola dell'utente connesso
          this.ruolo = info.authorities[0].role;
      }) */
  }

  toggleFullscreen() {
    if (screenfull.isEnabled) {
      screenfull.toggle();
    }
  }

  hasRoleforNotification(): boolean{
    if(this.ruolo.split(';').map(ruolo => ruolo.trim()).includes("P12689") || this.ruolo.split(';').map(ruolo => ruolo.trim()).includes("P12690")){
      return true
    }
    return false
  }

  scaricaManualeUtente(){
    const pdfUrl = './assets/manuali-utente/ManualeUtenteSirico2.0.pdf';
    //const pdfUrl = './assets/manuali-utente/manualeutente' + this.ruolo + '.pdf';
    const pdfName = 'ManualeUtente.pdf';
    // console.log('pdfUrl: ', pdfUrl, ' pdfName: ', pdfName)
    FileSaver.saveAs(pdfUrl, pdfName);
  }





}
