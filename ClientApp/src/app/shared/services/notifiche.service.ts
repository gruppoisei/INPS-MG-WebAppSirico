import { Injectable } from '@angular/core';
import { environment } from '@env/environment.prod';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificheService {

  private hubConnection: signalR.HubConnection;
  private notificationsCountSubject  = new BehaviorSubject<number>(0);
  notificationsCount$ = this.notificationsCountSubject.asObservable();

  private countSegnalazioni30DaysSubject  = new BehaviorSubject<number>(0);
  count30Days$ = this.countSegnalazioni30DaysSubject.asObservable();

  private countSegnalazioni30To45DaysSubject = new BehaviorSubject<number>(0);
  count30To45Days$ = this.countSegnalazioni30To45DaysSubject.asObservable();

  private countSegnalazioni45To60DaysSubject = new BehaviorSubject<number>(0);
  count45To60Days$ = this.countSegnalazioni45To60DaysSubject.asObservable();

  private baseUrl =  environment.MS_SIRICOAPI + environment.API_URI + 'notification';
  //private mgUrl = environment.MG_URL + 'NotificationHubGateway/';

  constructor() {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.baseUrl)
    //.withUrl(this.mgUrl)
    .build();

  this.hubConnection.on('ReceiveNotificationCount', (count: number) => {
    this.notificationsCountSubject.next(count);
  });

  this.hubConnection.on('Receive30DaysCount', (count: number) =>{
    this.countSegnalazioni30DaysSubject.next(count);
  });

  this.hubConnection.on('ReceiveFrom30To45Days', (count: number) => {
    this.countSegnalazioni30To45DaysSubject.next(count);
  });

  this.hubConnection.on('ReceiveFrom45To60Days', (count: number) =>{
    this.countSegnalazioni45To60DaysSubject.next(count);
  });

  this.startConnection();
   }

   private requestCounts() {
    this.requestNotificationCount();
    this.request30DaysCount();
    this.requestFrom30To45Days();
    this.requestFrom45To60Days();
  }

  private startConnection() {
    this.hubConnection
      .start()
      .then(() => this.requestCounts())
      .catch(() => setTimeout(() => this.startConnection(), 5000));

    this.hubConnection.onclose(() => this.startConnection());
  }


  private requestNotificationCount() {
    this.hubConnection.invoke('SendNotificationCount')
      .catch(err => console.error(err));
  }

  private request30DaysCount() {
    this.hubConnection.invoke('SendSegnalazioniLess30Days')
      .catch(error => console.error(error));
  }

  private requestFrom30To45Days(){
    this.hubConnection.invoke('SendSegnalazioniFrom30To45')
      .catch(error => console.error(error));
  }

  private requestFrom45To60Days(){
    this.hubConnection.invoke('SendSegnalazioniFrom45To60')
      .catch(error => console.error(error))
  }
}
