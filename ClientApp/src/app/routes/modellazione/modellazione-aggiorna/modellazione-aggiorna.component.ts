import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Aree } from '@shared/services/areeservice.service';
import { SottoareeService } from '@shared/services/sottoaree.service';
import { ProdottiService } from '@shared/services/prodotti.service';
import { TipologieLavoratoriService } from '@shared/services/tipologie-lavoratori.service';
import { ProdottiTipologieLavoratoriService } from '@shared/services/prodotti-tipologie-lavoratori.service';
import { Area } from '@shared/models/area.model';
import { Sottoarea } from '@shared/models/sottoarea.model';
import { Prodotto } from '@shared/models/prodotto.model';
import { TipologiaLavoratore } from '@shared/models/tipologia-lavoratore.model';
import { ProdottiTipologieLavoratori } from '@shared/models/prodotti-tipologie-lavoratori.model';
import { Router } from '@angular/router';
import { forkJoin, mergeMap } from 'rxjs';
import { Settore } from '@shared/models/settore-materia.model';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { AreeProdotti } from '@shared/models/areeprodotti';
import { MatSnackBar } from '@angular/material/snack-bar';


export interface DialogData {
  formAttivo: number;
  id: number
}

@Component({
  selector: 'app-modellazione-aggiorna',
  templateUrl: './modellazione-aggiorna.component.html',
  styleUrls: ['./modellazione-aggiorna.component.scss']
})

export class ModellazioneAggiornaComponent implements OnInit {
  isInputAreaFocused: boolean = false;
  isInputSettoreFocused: boolean = false;
  formAttivo = 0;
  area: Area = new Area();
  areeProdotti: AreeProdotti = new AreeProdotti()
  sottoarea: Sottoarea = new Sottoarea();
  prodotto: Prodotto = new Prodotto();
  tipologiaLavoratore: TipologiaLavoratore = new TipologiaLavoratore();
  settore: Settore = new Settore();
  buttonClicked = '';
  areaCancellabile = false;
  sottoareaCancellabile = false;
  prodottoCancellabile = false;
  tipLavCancellabile = false;
  settoreCancellabile: { esitoRimuovi: boolean, messaggio: string } = { esitoRimuovi: false, messaggio: '' }; // Definizione di settoreCancellabile
  deleteButton = false;
  tipLavModificate = false;
  listaSettori: Settore[] =[];
  // listaAree: Area[] =[];
  listaTipLav: TipologiaLavoratore[] = [];
  tipLavSelected: ProdottiTipologieLavoratori[] = [];
  idSelezionati: any[] = [];
  prodottoTipLav: ProdottiTipologieLavoratori = new ProdottiTipologieLavoratori();
  errorMessage: string | null = null;

  constructor(private formBuilder: FormBuilder,
    private areaSrv: Aree,
    private sottoAreaSrv: SottoareeService,
    private prodottoSrv: ProdottiService,
    private tipLavSrv: TipologieLavoratoriService,
    private prodottoTipLavSrv: ProdottiTipologieLavoratoriService,
    private settoreMtr : SettoreMateriaService,
    private settoreSrv: SettoreMateriaService,
    private router: Router,
    public  dialogRef: MatDialogRef<ModellazioneAggiornaComponent>,
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  form1 = this.formBuilder.group({
    inputArea: ['', [Validators.required, Validators.maxLength(50)]],
    selectSettoreMateria : ['']
  });
  form2 = this.formBuilder.group({
    inputArea: ['', Validators.required],
    inputSottoarea: ['', Validators.required]
  });
  form3 = this.formBuilder.group({
    inputArea: ['', Validators.required],
    inputSottoarea: ['', Validators.required],
    inputProdotto: ['', Validators.required],
    tiplav: [null, Validators.required]
  });
  form4 = this.formBuilder.group({
    inputTipologiaLavoratore: ['', Validators.required]
  });
  form5 = this.formBuilder.group({
    inputSettore: ['', [Validators.required, Validators.maxLength(50)]]
  });

  ngOnInit(): void {
    this.formAttivo = this.data.formAttivo;
    if (this.formAttivo === 0) {
      this.newCaricaAreeProdotto(this.data.id);
      // this.popolaAree();
    } else if (this.formAttivo === 1) {
      this.caricaSottoarea(this.data.id);
    } else if (this.formAttivo === 2) {
      this.caricaProdotto(this.data.id);
    } else if (this.formAttivo === 3) {
      this.caricaTipologiaLavoratore(this.data.id);
    } else if (this.formAttivo === 4) {
      this.caricaSettore(this.data.id);
      this.popolaSettori();
    }
  }

  onPaste(event: ClipboardEvent, maxLength: number) {
    const clipboardData = event.clipboardData || (window as any).clipboardData;
    const pastedText = clipboardData.getData('text');
    const inputElement = event.target as HTMLInputElement;
    const currentText = inputElement.value;
    const selectionStart = inputElement.selectionStart || 0;
    const selectionEnd = inputElement.selectionEnd || 0;
    const newText =
      currentText.slice(0, selectionStart) +
      pastedText +
      currentText.slice(selectionEnd);

    if (newText.length > maxLength) {
      event.preventDefault();
      this.snackBar.open(
        `Non puoi inserire più di ${maxLength} caratteri`,
        'Chiudi',
        { duration: 3000 }
      );
    }
  }

/*   caricaArea(id: number){
    forkJoin(
      [this.areaSrv.getArea(id), this.areaSrv.verificaArea(id)]
    ).subscribe (
      data => {
        this.area = data[0];
        this.form1.controls.inputArea.setValue(this.area.nome);
        this.areaCancellabile = data[1];
      });
  } */

  newCaricaAreeProdotto(id: number){
    forkJoin(
      [this.areaSrv.newGetAreaProdotto(id), this.settoreMtr.getAllSettoriMaterie(), this.areaSrv.newVerificaAreaProdotto(id)]
    ).subscribe (
      data => {
        this.areeProdotti = data[0];
        this.listaSettori = data[1];
        this.listaSettori.sort((a, b) => (a.nome > b.nome ? 1 : -1));
        this.form1.controls.inputArea.setValue(this.areeProdotti.nome);
        this.form1.controls.selectSettoreMateria.setValue(this.areeProdotti.idSettore)
        this.areaCancellabile = data[2].esitoRimuovi;
      },//);
      error => {
        this.errorMessage = 'Error fetching data';
        // console.error('Error fetching data:', error);
      });
  }

  caricaSottoarea(id: number){
    /* forkJoin(
      [this.sottoAreaSrv.getSottoArea(id), this.sottoAreaSrv.verificaSottoArea(id)]
    ).subscribe (
      data => {
        this.sottoarea = data[0];
        this.form2.controls.inputArea.setValue(this.sottoarea.area.nome);
        this.form2.controls.inputSottoarea.setValue(this.sottoarea.nome);
        this.sottoareaCancellabile = data[1];
      }); */
  }

  popolaSettori(){
    this.settoreMtr.getAllSettoriMaterie().subscribe({
      next : (data) =>{
        this.listaSettori = data;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching sectors';
      }    
    });
  }

  // popolaAree(){
  //   this.areaSrv.getAllAreaProdotto().subscribe({
  //     next : (data =>{
  //       this.listaAree = data;
  //     })
  //   });
  // }

  caricaProdotto(id: number){
    /* forkJoin(
       [this.prodottoSrv.getProdotto(id),
        this.prodottoSrv.verificaProdotto(id),
        this.tipLavSrv.getTipologieLavoratoriAll(),
        this.prodottoTipLavSrv.getTipologieLavoratori(id)]
    ).subscribe (
      data => {
        this.prodotto = data[0];
        this.form3.controls.inputArea.setValue(this.prodotto.sottoarea.area.nome);
        this.form3.controls.inputSottoarea.setValue(this.prodotto.sottoarea.nome);
        this.form3.controls.inputProdotto.setValue(this.prodotto.nome);
        this.prodottoCancellabile = data[1];
        this.listaTipLav = data[2];
        //console.log('tip lav all ', this.listaTipLav);
        this.tipLavSelected = data[3];
        //console.log('dopo lettura tipologie selezionate');
        this.tipLavSelected.forEach(el => {this.idSelezionati.push(el.tipologiaLavoratore.id)});
        //console.log('tip lav selected ', this.idSelezionati);
        this.form3.controls.tiplav.setValue(this.idSelezionati);
      }); */
  }

  caricaTipologiaLavoratore(id: number){
    /* forkJoin(
      [this.tipLavSrv.getTipologiaLavoratore(id),
      this.tipLavSrv.verificaTipologiaLavoratore(id)]
    ).subscribe (
      data => {
        this.tipologiaLavoratore = data[0];
        this.form4.controls.inputTipologiaLavoratore.setValue(this.tipologiaLavoratore.nome);
        this.tipLavCancellabile = data[1];
        console.log('tip lav cancellabile ', this.tipLavCancellabile, id)
      }); */
  }

  caricaSettore(id: number) {
    forkJoin(
        [this.settoreSrv.getSettoriMaterieById(id), this.settoreSrv.verificaRimuoviSettoreMateria(id)]
    ).subscribe(
        data => {
            this.settore = data[0]; // Imposta il valore di settoreCancellabile
            this.form5.controls.inputSettore.setValue(this.settore.nome);
            this.settoreCancellabile = data[1];
        }
    );
  }

  salvaArea(){
    this.area.nome = this.form1.value.inputArea.replace(/\s+/g,' ').trim();
    /* this.areaSrv.aggiornaArea(this.area).subscribe(
                  data => {
                              console.log(data);
                              this.dialogRef.close();
                          }); */
  }

  newAggiornaArea() {
    this.areeProdotti.nome = this.form1.value.inputArea.replace(/\s+/g,' ').trim();
    this.areeProdotti.idSettore = this.form1.value.selectSettoreMateria;
    this.areaSrv.newAggiornaAreeProdotto(this.areeProdotti).subscribe({
      next: () => {
        this.dialogRef.close(true); // Passa 'true' per indicare che l'aggiornamento è riuscito
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      }
    });
  }

  salvaSottoArea(){
    this.sottoarea.nome = this.form2.value.inputSottoarea;
    /* this.sottoAreaSrv.aggiornaSottoArea(this.sottoarea).subscribe(
                  data => {
                              console.log(data);
                              this.dialogRef.close();
                          }); */
  }

  salvaProdotto(){
    this.prodotto.nome = this.form3.value.inputProdotto;
    /* this.prodottoSrv.aggiornaProdotto(this.prodotto).subscribe(
          data => {
                      console.log(data);
                      let i: number;
                      console.log('tip lav selezionati ', this.idSelezionati);
                      //se una tipologia lavoratore selezionata sul form non è presente tra quelle associate
                      //al prodotto viene inserita sul db
                      for (i=0; i<this.idSelezionati.length; i++)
                      {
                        const presente = this.tipLavSelected.some(x => x.tipologiaLavoratore.id == this.idSelezionati[i]);
                        if (!presente){
                          this.prodottoTipLav = new ProdottiTipologieLavoratori();
                          this.prodottoTipLav.prodotto.id = this.prodotto.id;
                          this.prodottoTipLav.tipologiaLavoratore.id = this.idSelezionati[i];
                          console.log('this.prodottoTipLav ', this.prodottoTipLav);
                          /* this.prodottoTipLavSrv.inserisciProdottoTipologiaLavoratore(this.prodottoTipLav).
                              subscribe(
                                data => {
                                  console.log('tip lav inserita ', data);
                                }
                              );
                          }
                      }
                      //se una tipologia lavoratore tra quelle associate al prodotto non è selezionata
                      //sul form viene cancellata dal db
                      // console.log('tipologie selezionate form',this.idSelezionati);
                      // console.log('tipologie selezionate DB', this.tipLavSelected);
                      for (i=0; i<this.tipLavSelected.length; i++)
                      {
                        const presente = this.idSelezionati.some(x => x == this.tipLavSelected[i].tipologiaLavoratore.id);
                        if (!presente){
                          console.log('id da cancellare ', this.tipLavSelected[i].id)
                          /* this.prodottoTipLavSrv.rimuoviProdottoTipologiaLavoratore(this.tipLavSelected[i].id).
                              subscribe(
                                data => {
                                  console.log('tip lav rimossa', data);
                                }
                              );
                          }
                        }

                              this.dialogRef.close();
                          }) */
  }

  salvaTipologiaLavoratore(){
    this.tipologiaLavoratore.nome = this.form4.value.inputTipologiaLavoratore;
    /* this.tipLavSrv.aggiornaTipologiaLavoratore(this.tipologiaLavoratore).subscribe(
                  data => {
                              console.log(data);
                              this.dialogRef.close();
                          }); */
  }

  salvaSettore() {
    this.settore.nome = this.form5.value.inputSettore.replace(/\s+/g,' ').trim();
    this.settoreSrv.inserisciSettore(this.settore).subscribe({
      next: () => {
        this.dialogRef.close(true); // Passa 'true' per indicare che l'aggiornamento è riuscito
      },
      error: (error) => {
        this.errorMessage = error.error.message;
      }
    });
  }

  onSubmit(): void {
    //console.log('evento: ', this.buttonClicked);
    if(this.buttonClicked === 'modifica') {
      //E' stato premuto il tasto Salva
      switch (this.formAttivo){
        case 0:   //Area
            this.newAggiornaArea();
            break;
        case 1:   //SottoArea
            this.salvaSottoArea();
            break;
        case 2:   //Prodotto
            //console.log('aggiornamento prodotto: ', this.prodotto.id)
            this.salvaProdotto();
            break;
        case 3:   //Tipologia Lavoratore
            //console.log('aggiornamento prodotto: ', this.prodotto.id)
            this.salvaTipologiaLavoratore();
            break;
        case 4:   //Settore/Materia
            //console.log('aggiornamento prodotto: ', this.prodotto.id)
            this.salvaSettore();
            break;
      }
    }
  }

  clickDelete(){
    this.deleteButton = !this.deleteButton;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

  elimina(){
    this.delay(1);
    switch (this.formAttivo){
      case 0:   //AreeProdotti
          this.areaSrv.newDeleteAreeProdotti(this.areeProdotti.id).subscribe(
            () => {
              this.dialogRef.close();
          });
          break;
      case 1:   //SottoArea
          /* this.sottoAreaSrv.deleteSottoArea(this.sottoarea.id).subscribe(
            data => {
              this.dialogRef.close();
          }); */
          break;
      case 2:   //Prodotto
          /* this.prodottoTipLavSrv.rimuoviProdottoTipologieLavoratori(this.prodotto.id).subscribe(
            data => {
              console.log('cancellazione tip lav del prodotto');
              this.prodottoSrv.deleteProdotto(this.prodotto.id).subscribe(
                data => {
                  this.dialogRef.close();
              });
            }
          ) */
          break;
       case 3:   //Tipologia Lavoratore
          /* this.tipLavSrv.deleteTipologiaLavoratore(this.tipologiaLavoratore.id).subscribe(
            data => {
              this.dialogRef.close();
          }); */
          break;
       case 4:   //Settore/Materia
        this.settoreSrv.deleteSettoriMaterie(this.settore.id).subscribe(
          data => {
            this.dialogRef.close();
          }
        );

      break;
    }
  }

  onTipLavSelectionChanged(idSelected: number[])
  {
    this.tipLavModificate = true;
    this.idSelezionati=idSelected;

    // this.tipLavSelected=tipLavSelected;
    // console.log(tipLavSelected);
  }
}
