import { HttpErrorResponse } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { Component, Inject, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { Sort } from '@angular/material/sort';
import { LogsService } from '@shared/services/logs.service';
@Component({
  selector: 'app-log-applicativo-dialog',
  templateUrl: './log-applicativo-dialog.component.html',
  styleUrls: ['./log-applicativo-dialog.component.scss'],
})
export class LogApplicativoDialogComponent implements OnInit {
  constructor(public logSrv: LogsService,public dialogRef: MatDialogRef<LogApplicativoDialogComponent>) {}

  dataSource2: any[] = [];
  ordine = '';
  result: any | undefined;
  IsHidden= true;

  ngOnInit(): void {
    this.popolaRis();
  }

  popolaRis() {
    this.logSrv.getLogsId(this.logSrv.idAttivo).subscribe(data => {
      this.result = data;
      this.logSrv.idAttivo = this.result.logSrv.id;
    });
  }

  sortData(sort: Sort) {
    this.ordine = '';
    if (sort.direction) this.ordine = sort.active + '_' + sort.direction;
  }

  vediStack(){
    if(this.IsHidden==true) {
      this.IsHidden=false;
    }else {
  this.IsHidden=true;
    }
  }

}
