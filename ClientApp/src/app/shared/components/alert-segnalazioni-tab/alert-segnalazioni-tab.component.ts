import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificheService } from '@shared/services/notifiche.service';

@Component({
  selector: 'app-alert-segnalazioni-tab',
  templateUrl: './alert-segnalazioni-tab.component.html',
  styleUrls: ['./alert-segnalazioni-tab.component.scss']
})
export class AlertSegnalazioniTabComponent implements OnInit {

  count30Days: number = 0;
  countFrom30To45Days: number = 0;
  countFrom45To60Days: number = 0;

  constructor(private notificationService: NotificheService, private router: Router) { }

  ngOnInit(): void {
    this.notificationService.count30Days$.subscribe(count =>{
      this.count30Days = count;
    });
    this.notificationService.count30To45Days$.subscribe(count =>{
      this.countFrom30To45Days = count;
    });
    this.notificationService.count45To60Days$.subscribe(count =>{
      this.countFrom45To60Days = count;
    });
  }

  navigateWithDates(dataFine: number | null, dataInizio: number) {
    const today = new Date();
    const endDate = new Date(today);
    if(dataFine !== null){
      endDate.setDate(today.getDate() - dataFine);
    }

    let startDate = null;
    if (dataInizio !== null) {
      startDate = new Date(today);
      startDate.setDate(today.getDate() - dataInizio);
    }

    this.router.navigate(['/segnalazione/gestione'], {
      queryParams: {
        startDate: startDate ? startDate.toISOString().split('T')[0] : null,
        endDate: endDate.toISOString().split('T')[0],
        toggle: true
      }
    });
  }

}
