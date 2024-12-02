import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Area } from '@shared/models/area.model';
import { Sottoarea } from '@shared/models/sottoarea.model';
import { Prodotto } from '@shared/models/prodotto.model';
import { TipologiaLavoratore } from '@shared/models/tipologia-lavoratore.model';
import { ProdottiTipologieLavoratori } from '@shared/models/prodotti-tipologie-lavoratori.model';
import { Aree } from '@shared/services/areeservice.service';
import { SottoareeService } from '@shared/services/sottoaree.service';
import { ProdottiService } from '@shared/services/prodotti.service';
import { TipologieLavoratoriService } from '@shared/services/tipologie-lavoratori.service';
import { ProdottiTipologieLavoratoriService } from '@shared/services/prodotti-tipologie-lavoratori.service';
import { Settore } from '@shared/models/settore-materia.model';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { AreeProdotti } from '@shared/models/areeprodotti';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modellazione-nuova',
  templateUrl: './modellazione-nuova.component.html',
  styleUrls: ['./modellazione-nuova.component.scss']
})
export class ModellazioneNuovaComponent implements OnInit {
  isInputAreaFocused: boolean = false;
  isInputSettoreFocused: boolean = false;
  formAttivo: number=0;
  listaSettoriMaterie : Settore[] = []
  listaAree: Area[] = [];
  listaSottoAree: Sottoarea[] = [];
  sottoareeFiltered: Sottoarea[] = [];
  listaTipLav: TipologiaLavoratore[] = [];
  tipLavSelected: TipologiaLavoratore[] = [];
  listaSettori: Settore[] =[];
  idSelezionati: number[] = [];
  prodotto: Prodotto = new Prodotto();
  prodottoTipLav: ProdottiTipologieLavoratori = new ProdottiTipologieLavoratori();
  errorMessage: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private areaSrv: Aree,
    private sottoAreaSrv: SottoareeService,
    private prodottoSrv: ProdottiService,
    private tipLavSrv: TipologieLavoratoriService,
    private prodottoTipLavSrv: ProdottiTipologieLavoratoriService,
    private settoreSrv: SettoreMateriaService,
    private settoreMtr : SettoreMateriaService,
    private router: Router,
    public dialogRef: MatDialogRef<ModellazioneNuovaComponent>,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public id: number
    ) { }


  form1 = this.formBuilder.group({
    inputArea: ['', [Validators.required, Validators.maxLength(50)]],
    selectSettoreMateria: ['', Validators.required]
  });

  form2 = this.formBuilder.group({
    inputSottoarea: ['', Validators.required],
    area: ['', Validators.required]
  });

  form3 = this.formBuilder.group({
    inputProdotto: ['', Validators.required],
    area: ['', Validators.required],
    sottoarea: [{ value: "", disabled: true }, Validators.required],
    tiplav: [null, Validators.required]
  });

  form4 = this.formBuilder.group({
    inputTipologiaLavoratore: ['', Validators.required],
  });

  form5 = this.formBuilder.group({
    inputSettore: ['', [Validators.required, Validators.maxLength(50)]],
  });

  /* popolaSettori(){
    this.settoreMtr.getAllSettoriMaterie().subscribe({
      next : (data =>{
        this.listaSettori = data;
        this.listaSettori.sort((a, b) => (a.nome > b.nome ? 1 : -1));
      })
    });
  } */
    popolaSettori() {
      this.settoreMtr.getAllSettoriMaterie().subscribe({
        next: (data) => {
          this.listaSettori = data;
          this.listaSettori.sort((a, b) => (a.nome > b.nome ? 1 : -1));
        },
        error: (err) => {
          this.errorMessage = 'Error fetching data';
        }
      });
    }

  popolaAree(conSottoaree: boolean){
    /* this.areaSrv.getAreeConSottoaree(conSottoaree).subscribe(data => {
      this.listaAree = data;
    }); */
  }

  popolaSottoAree(){
    /* this.sottoAreaSrv.getSottoAreeAll(false).subscribe(data => {
      this.listaSottoAree = data;
    }); */
  }

  popolaTipologieLavoratori(){
    /* this.tipLavSrv.getTipologieLavoratoriAll().subscribe(data => {
      this.listaTipLav = data;
    }); */
  }

  popolaSettore(){
    this.settoreSrv.getAllSettoriMaterie().subscribe(data => {
      this.listaSettori = data;
    });
  }

  ngOnInit(): void {

    this.formAttivo = this.id;
    if (this.formAttivo == 1)
      this.popolaAree(false);
    else if (this.formAttivo == 2)
      this.popolaAree(true);
    this.popolaSettori();
    if (this.formAttivo == 4)
      this.popolaSettore();
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

  onAreaSelectionChanged(value: number) {
    this.sottoareeFiltered = this.listaSottoAree.filter(
                                                s => s.area.id == value);
    //console.log('sottoaree filtrate: ', this.sottoareeFiltered );
    if (this.sottoareeFiltered.length > 0)
        this.form3.controls["sottoarea"].enable();
    else this.form3.controls["sottoarea"].disable();

    this.form3.patchValue({
        sottoarea: ""
    });
  }

  onTipLavSelectionChanged(idSelected: number[])
  {
    this.idSelezionati=idSelected;
  }

/*   salvaArea(){
    const area = new Area();
    area.nome = this.form1.value.inputArea;
    this.areaSrv.inserisciArea(area).subscribe(
                data => {
                          this.dialogRef.close();
                        });
  } */

  newSalvaAreeProdotto(){
    const areaProdotto = new AreeProdotti()
    areaProdotto.nome = this.form1.value.inputArea.replace(/\s+/g,' ').trim();
    areaProdotto.idSettore = this.form1.value.selectSettoreMateria;
    this.areaSrv.newSalvaAreeProdotti(areaProdotto).subscribe({
      next:() =>{
        this.dialogRef.close();
      },
      error : (error) =>{
        this.errorMessage = error.error.message;
      }
    });
  }

  salvaSottoArea(){
    const sottoarea = new Sottoarea();
    sottoarea.nome = this.form2.value.inputSottoarea;
    sottoarea.area.id = +this.form2.get('area')?.value;
    /* this.sottoAreaSrv.inserisciSottoArea(sottoarea).subscribe(
                data => {
                          this.dialogRef.close();
                        }); */
  }

  salvaProdotto(){
    this.prodotto = new Prodotto();
    this.prodotto.nome = this.form3.value.inputProdotto;
    this.prodotto.sottoarea.id = +this.form3.get('sottoarea')?.value;
    /* this.prodottoSrv.inserisciProdotto(this.prodotto).subscribe(
                data => {
                          this.prodotto = data;
                          let i: number;
                          for (i=0; i<this.idSelezionati.length; i++)
                          {
                            console.log('lav selected ', this.idSelezionati[i])
                            this.prodottoTipLav = new ProdottiTipologieLavoratori();
                            this.prodottoTipLav.prodotto.id = this.prodotto.id;
                            this.prodottoTipLav.tipologiaLavoratore.id = this.idSelezionati[i];
                            console.log('prodotto tip lav ', this.prodotto.id, this.idSelezionati[i])
                            this.prodottoTipLavSrv.inserisciProdottoTipologiaLavoratore(this.prodottoTipLav).subscribe(
                              data => {}
                            );
                          }
                          this.dialogRef.close();
                        }); */
  }

  salvaTipologiaLavoratore(){
    const tipLav = new TipologiaLavoratore();
    tipLav.nome = this.form4.value.inputTipologiaLavoratore;
    /* this.tipLavSrv.inserisciTipologiaLavoratore(tipLav).subscribe(
                data => {
                          this.dialogRef.close();
                        }); */
  }

  /*salvaSettore() {
    if (this.form5.invalid) {
      console.error('Form non valido');
      return;
    }
    const settore = new Settore();
    settore.nome = this.form5.value.inputSettore;
    this.settoreSrv.insertSettoreMateria(settore).subscribe(
      data => {
        this.dialogRef.close();
      },
      error => {
        console.error('Errore durante il salvataggio del settore: ', error);
      }
    );
  }*/

    salvaSettore() {
      if (this.form5.invalid) {
        // console.error('Form non valido');
        return;
      }
      const settoreNome = this.form5.value.inputSettore;

/*       // Controlla se il settore esiste già
      const settoreEsistente = this.listaSettori.find(s => s.nome.toLowerCase() === settoreNome.toLowerCase());
      if (settoreEsistente) {
        this.errorMessage = `Il Settore/Materia "${settoreNome}" è già presente nel sistema.`;
        return;
      } */

      // Se non esiste, procedi con l'inserimento
      const settore = new Settore();
      settore.nome = settoreNome.replace(/\s+/g,' ').trim();
      this.settoreSrv.insertSettoreMateria(settore).subscribe({
        next: () => {
          this.dialogRef.close();
        },
        error: (error) => {
          this.errorMessage = error.error.message;
        }
      });
    }
}
