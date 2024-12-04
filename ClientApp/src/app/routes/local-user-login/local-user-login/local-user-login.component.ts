import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-user-login',
  templateUrl: './local-user-login.component.html',
  styleUrls: ['./local-user-login.component.scss']
})
export class LocalUserLoginComponent implements OnInit {

  
  ngOnInit(): void {
    
  }
  
  // onRoleChange(selectedRole: string) {
  //   // Filtra le sedi in base al ruolo selezionato
  //   const sediAutorizzate = this.listaSedi.filter(sede => sede.role === selectedRole);

  //   const inpsSediControl = this.form1.get('inpsSedi');
  //   if (sediAutorizzate.length > 0) {
  //     const sediCodes = sediAutorizzate.map(sede => sede.sedeCode);
  //     if (sediAutorizzate.length === 1) {
  //       if (inpsSediControl) {
  //         inpsSediControl.setValue([sediAutorizzate[0].sedeCode]);
  //       }
  //     } else if (inpsSediControl) {
  //       inpsSediControl.setValue(sediCodes);
  //     }
  //   } else {
  //     // Se nessuna sede è autorizzata per il ruolo selezionato
  //     if (inpsSediControl) {
  //       inpsSediControl.setValue([]);
  //     }
  //   }
  // }

  


  


}
