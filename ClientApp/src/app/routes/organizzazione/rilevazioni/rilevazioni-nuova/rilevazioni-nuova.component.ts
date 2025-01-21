import { Component, IterableDiffers, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Aree } from '@shared/services/areeservice.service';
import { Area } from '@shared/models/area.model';
import { Sottoarea } from '@shared/models/sottoarea.model';
import { ProdottiService } from '@shared/services/prodotti.service';
import { Prodotto } from '@shared/models/prodotto.model';
import { Componente } from '@shared/models/componente.model';
import { TaComponentiCriteri } from '@shared/models/ta-componenti-criteri.model';
import { RilevazioneService } from '@shared/services/rilevazione.service';
import { StatiRilevazione } from '@shared/models/stati-rilevazione.model';
import { RilevazioneTaComponenteCriterioService } from '@shared/services/rilevazione-ta-componente-criterio.service';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Aspetto, StepperService } from '@shared/services/stepper.service';
import { MatStepper } from '@angular/material/stepper';
import { StepperDialogModificaComponent } from '../stepper-dialog-modifica/stepper-dialog-modifica.component';
import { StepperDialogCreazioneAspettoComponent } from '../stepper-dialog-creazione-aspetto/stepper-dialog-creazione-aspetto.component';
import { SettoreMateriaService } from '@shared/services/settore-materia.service';
import { TerritorioService } from '@shared/services/territorio.service';
import { ContenziosoService } from '@shared/services/contenzioso.service';
import { StorageService } from '@shared/services/storage.service';
import { MatTable } from '@angular/material/table';
import { PopupErroreInserimentoComponent } from '../../../popup-errore-inserimento/popup-errore-inserimento.component'; // Importa il componente del dialogo di errore
import { map, Observable, startWith } from 'rxjs';
import { AreaService } from '../data.service';
import { DocumentiService } from '@shared/services/documenti.service';
import { InfoFile } from '@shared/interfaces/infoFile';
import { AspettoAllegato } from '@shared/interfaces/aspettoAllegato';

@Component({
  selector: 'app-rilevazioni-nuova',
  templateUrl: './rilevazioni-nuova.component.html',
  styleUrls: ['./rilevazioni-nuova.component.scss'],
})
export class RilevazioniNuovaComponent implements OnInit, OnDestroy {
  aree: Area[] = [];
  sottoaree: Sottoarea[] = [];
  prodotti: Prodotto[] = [];
  sede: Sede[] = [];
  tipologieContenzioso: TipologieContenzioso[] = [];
  componenti: Componente[] = [];
  taComponentiCriteri: TaComponentiCriteri[] = [];
  statiRilevazioni: StatiRilevazione[] = [];
  ruoloRegionale: string = 'P12799';
  ruoloProvinciale: string = 'P12801';
  ruoloAmministrativo: string = 'P12690';
  dataFileSegnalazione: InfoFile[] = [];
  idAspetti: number[] = [];
  nomiFileAspetti: {idAspetto: number, fileName: string}[] = []
  // NUOVO
  listaAspettiAggiunti: Aspetto[] = [];
  role: string | null = null;
  codiceSede: string[] = [];
  isLinear = false;
  aspettoSelezionato: Aspetto | undefined;
  maxIdAspettiDaValutare!: number;
  checkNuovoAspetto: boolean = false;

  displayedColumnsStep2: string[] = [
    'modifica',
    'rimuovi',
    'nomeAspetto',
    'descrizioneCriticita',
    'allegato',
  ];
  displayedColumnsStep3: string[] = [
    'modifica',
    'nomeAspetto',
    'descrizioneCriticita',
    'descrizioneSuggerimento',
  ];
  displayedColumnsStep4: string[] = [
    'nomeAspetto',
    'descrizioneCriticita',
    'descrizioneSuggerimento',
  ];
  fileColumns: string[] = [
    'fileName',
    'fileSize',
    'download',
    'rimuovi'
  ];

  showGestioneFileDatiGenerali: boolean = false;
  isFileDatiGenerali: boolean = false;
  isFileAspetti: AspettoAllegato[] = [];

  @ViewChild('stepper') stepper!: MatStepper;
  @ViewChild('tableStep2') tableStep2!: MatTable<any>;
  @ViewChild('tableStep3') tableStep3!: MatTable<any>;
  @ViewChild('tableStep4') tableStep4!: MatTable<any>;

  firstFormGroup = this._formBuilder.group({
    settoreMateria: ['', Validators.required],
    areaProdotto: ['', Validators.required],
    sede: ['', Validators.required],
    tipologiaContenzioso: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    step2Criticita: [''], //, this.checkFormEGriglia()],
    step2Aspetti: [''], //, this.checkFormEGriglia()],
    step2ArrayAspettiCriticita: [[] as Aspetto[], Validators.required],
    // step2ListaAspettiCriticita: [[] as Aspetto[], Validators.required]
  });

  thirdFormGroup = this._formBuilder.group({
    step3Aspetti: ['', Validators.required],
    step3Suggerimenti: [''],
  });
  segnalazioneContenzioso: segnalazioneContenzioso | null = null;
  segnalazioneProdotto: segnalazioneProdotto | null = null;
  statoSegnalazione: number = 1;
  idSegnalazioneCasoInvia: number = 0;

  settoreCtrl = new FormControl();
  areaCtrl = new FormControl();
  sedeCtrl = new FormControl();
  tipologiaCtrl = new FormControl();
  aspettiCtrl = new FormControl();

  filteredSettoreMateria!: Observable<SettoreMateria[]>;
  filteredAreaProdotto!: Observable<AreaProdotto[]>;
  filteredSede!: Observable<Sede[]>;
  filteredTipologia!: Observable<TipologieContenzioso[]>;
  filteredAspettiDaValutare!: Observable<AspettoConDescrizione[]>;

  // STEP1: DROPDOWN LIST
  settoreMateria: SettoreMateria[] | undefined = [];
  areaProdotto: AreaProdotto[] | undefined = [];
  areeProdotti: AreaProdotto | undefined;
  nomeSettoreMateria!: string;
  nomeAreaProdotto!: string;
  nomeSede!: string;
  numeroCodiceSede!: string;
  nomeCodiceSede!: string;
  nomeTipologiaContenzioso!: string;
  loadTipoSegnalazioni: any;
  // STEP2: DROPDOWN LIST ASPETTI DA VALUTARE
  aspettiDaValutare: AspettoConDescrizione[] = [];
  fileSegnalazione: File | null = null;
  filesAspetti: { file: File; idAspetto: number }[] = [];

  constructor(
    private prodottiSrv: ProdottiService, private rilevazioneSrv: RilevazioneService, private router: Router,
    private _formBuilder: FormBuilder, private dialog: MatDialog, private stepperService: StepperService,
    private settoreMateriaService: SettoreMateriaService, private areeProdottiService: Aree, private territorioService: TerritorioService,
    private contenziosoService: ContenziosoService, private storageService: StorageService, private documentiService: DocumentiService
  ) {}

  ngOnDestroy(): void {
    this.stepperService.datiSegnalazioneProdotto$.next(undefined);
    this.stepperService.datiSegnalazioneContenzioso$.next(undefined);
    this.listaAspettiAggiunti = [];
  }

  formatToSixDigits(value: any): string {
    const numberValue = Number(value);
    if (isNaN(numberValue)) {
      return '';
    }
    return numberValue.toString().padStart(6, '0');
  }

  async ngOnInit() {
    try {
      const codiceSedeString = this.storageService.getItem('listaSedi');
      this.role = this.storageService.getItem('allroles');
      this.codiceSede = codiceSedeString;
      this.loadTipoSegnalazioni = this.stepperService.inserimentoTipoSegnalazione$.value;

      await this.getSettoriMaterie();
      await this.getAllAreaProdotto();
      await this.loadTipologieContenzioso();
      this.loadAspettiDaValutare();

      await this.getSedi();
      await this.ensureSediLoaded();

      const savedSegnalazioneProdotto = this.stepperService.datiSegnalazioneProdotto$.value;
      const savedSegnalazioneContenzioso = this.stepperService.datiSegnalazioneContenzioso$.value;

      if (this.loadTipoSegnalazioni === 'Prodotto' && savedSegnalazioneProdotto) {
        this.segnalazioneProdotto = savedSegnalazioneProdotto;
        const ruolo = this.selectRole();
        this.documentiService.findAllegatoSegnalazione(this.segnalazioneProdotto.id, ruolo, "Prodotto").subscribe({
          next:(res) => {
            this.showGestioneFileDatiGenerali = res.esito;
            this.isFileDatiGenerali = res.esito;
            if(this.isFileDatiGenerali && this.segnalazioneProdotto){
              this.documentiService.getFileSegnalazione(this.segnalazioneProdotto.id, "Prodotto", ruolo).subscribe({
                next: (response) => {
                  const contentDisposition = response.headers.get('Content-Disposition');
                  const fileName = this.getFileNameFromContentDisposition(contentDisposition);
                  const blob = response.body;
                  const fileSize = blob?.size;
                  const fileSizeMb = fileSize?fileSize/(1024*1024): 0;
                  const fileData = [{
                    fileName,
                    fileSize: fileSizeMb
                  }]
                  this.dataFileSegnalazione = fileData;
                }
              })
            }
          }
        })

        const settore = this.settoreMateria?.find(
          option => option.id === this.segnalazioneProdotto?.settoreId
        );
        if (settore) {
          this.settoreCtrl.setValue(settore);
          this.firstFormGroup.patchValue({ settoreMateria: settore.id });
        }

        if (this.segnalazioneProdotto?.settoreId) {
          await this.areeProdottiService
            .newGetAllByIdSettore(this.segnalazioneProdotto?.settoreId)
            .toPromise();
          const area = this.areaProdotto?.find(
            option => option.id === this.segnalazioneProdotto?.areaId
          );
          if (area) {
            this.areaCtrl.setValue(area);
            this.firstFormGroup.patchValue({ areaProdotto: area.id });
          }
        }
        const sedeIdFormatted = this.formatToSixDigits(this.segnalazioneProdotto?.sedeId);
        const sede = this.sede?.find(
          option => this.formatToSixDigits(option.id?.toString() ?? '') === sedeIdFormatted
        );
        if (sede) {
          this.sedeCtrl.setValue(sede);
          this.firstFormGroup.patchValue({ sede: sede.id });
        } else {
        }
        await this.loadDettagliSegnalazioneProdotto(this.segnalazioneProdotto.id);
      } else if (this.loadTipoSegnalazioni === 'Contenzioso' && savedSegnalazioneContenzioso) {
        this.segnalazioneContenzioso = savedSegnalazioneContenzioso;
        const ruolo = this.selectRole()
        this.documentiService.findAllegatoSegnalazione(this.segnalazioneContenzioso.id, ruolo, "Contenzioso").subscribe({
          next: (res) => {
            this.showGestioneFileDatiGenerali = res.esito;
            this.isFileDatiGenerali = res.esito;
            if(this.isFileDatiGenerali && this.segnalazioneContenzioso){
              this.documentiService.getFileSegnalazione(this.segnalazioneContenzioso.id, "Contenzioso", ruolo).subscribe({
                next: (res) => {
                  const contentDisposition = res.headers.get('Content-Disposition');
                  const fileName = this.getFileNameFromContentDisposition(contentDisposition);
                  const blob = res.body;
                  const fileSize = blob?.size;
                  const fileSizeMb = fileSize?fileSize/(1024*1024): 0;
                  const fileData = [{
                    fileName,
                    fileSize: fileSizeMb
                  }]
                  this.dataFileSegnalazione = fileData;
                }
              })
            }
          }
        });
        const settore = this.settoreMateria?.find(
          option => option.id === this.segnalazioneContenzioso?.settoreId
        );
        if (settore) {
          this.settoreCtrl.setValue(settore);
          this.firstFormGroup.patchValue({ settoreMateria: settore.id });
        }

        if (this.segnalazioneContenzioso?.settoreId) {
          await this.areeProdottiService
            .newGetAllByIdSettore(this.segnalazioneContenzioso?.settoreId)
            .toPromise();
          const area = this.areaProdotto?.find(
            option => option.id === this.segnalazioneContenzioso?.areaId
          );
          if (area) {
            this.areaCtrl.setValue(area);
            this.firstFormGroup.patchValue({ areaProdotto: area.id });
          }
        }

        const sedeIdFormatted = this.formatToSixDigits(this.segnalazioneContenzioso?.sedeId);

        const sede = this.sede?.find(
          option => this.formatToSixDigits(option.id?.toString() ?? '') === sedeIdFormatted
        );
        if (sede) {
          this.sedeCtrl.setValue(sede);
          this.firstFormGroup.patchValue({ sede: sede.id });
        }
        const tipologia = this.tipologieContenzioso?.find(
          option => option.id === this.segnalazioneContenzioso?.contenziosoId
        );
        if (tipologia) {
          this.tipologiaCtrl.setValue(tipologia);
          this.firstFormGroup.patchValue({ tipologiaContenzioso: tipologia.id });
        }
        await this.loadDettagliSegnalazioneContenzioso(this.segnalazioneContenzioso.id);
      }

      this.filteredSettoreMateria = this.settoreCtrl.valueChanges.pipe(
        startWith(this.settoreCtrl.value ?? ''),
        map(value => this._filterSettore(value))
      );

      this.filteredAreaProdotto = this.areaCtrl.valueChanges.pipe(
        startWith(this.areaCtrl.value ?? ''),
        map(value => this._filterArea(value))
      );

      this.filteredSede = this.sedeCtrl.valueChanges.pipe(
        startWith(this.sedeCtrl.value ?? ''),
        map(value => this._filterSede(value))
      );

      this.filteredTipologia = this.tipologiaCtrl.valueChanges.pipe(
        startWith(this.tipologiaCtrl.value ?? ''),
        map(value => this._filterTipologia(value))
      );
      this.filteredAspettiDaValutare = this.aspettiCtrl.valueChanges.pipe(
        startWith(this.aspettiCtrl.value ?? ''),
        map(value => this._filterAspetti(value))
      );

    } catch (error) {
      // console.error('Error in ngOnInit:', error);
    }

    this.statoSegnalazione =
      this.segnalazioneProdotto == null
        ? this.statoSegnalazione
        : this.segnalazioneProdotto.statoId;
    this.statoSegnalazione =
      this.segnalazioneContenzioso == null
        ? this.statoSegnalazione
        : this.segnalazioneContenzioso.statoId;
  }

  async ensureSediLoaded() {
    while (!this.sede || !this.sede.length) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  }

  async loadDettagliSegnalazioneProdotto(id: number) {
    try {
      const data = await this.rilevazioneSrv.getDettagliSegnalazioneById(id).toPromise();

      // Mappa gli aspetti già aggiunti
      this.listaAspettiAggiunti = data.map((item: any) => ({
        idAspetto: item.idAspetto,
        nomeAspetto: item.nomeAspetto,
        descrizioneCriticita: item.criticita,
        descrizioneSuggerimento: item.suggerimento,
        nuovoAspetto: item.nuovoAspetto
      }));

      // Verifico se presente un nuovo aspetto per disabilitare il'opzione Altro della select aspettiDaValutare
      for (let i = 0; i < data.length; i++) {
        if (data[i].nuovoAspetto === true) {
          this.checkNuovoAspetto = true;
        }
      }

      // Rimuovi gli aspetti già aggiunti dalla lista degli aspetti da valutare
      this.aspettiDaValutare = this.aspettiDaValutare.filter(aspetto =>
        !this.listaAspettiAggiunti.some(aggiunto => aggiunto.idAspetto === aspetto.idAspetto)
      );

      // Aggiungi gli idAspetti degli aspetti già aggiunti alla segnalazione
      this.listaAspettiAggiunti.forEach(aspetto => {
        if (aspetto.idAspetto) {
          this.idAspetti.push(aspetto.idAspetto);
        }
      });

      if (this.segnalazioneProdotto?.id != null) {
        const ruolo = this.selectRole();
        this.documentiService.findAllegatiAspetti(this.segnalazioneProdotto?.id, this.idAspetti, "Prodotto", ruolo).subscribe({
          next: (res: AspettoAllegato[]) => {
            this.isFileAspetti = res;

            this.listaAspettiAggiunti.forEach(aspetto => {
              const isAllegato = this.isFileAspetti.find(a => a.idAspetto === aspetto.idAspetto);
              if (isAllegato) {
                aspetto.hasAllegato = isAllegato.esito;
                if (aspetto.hasAllegato && this.segnalazioneProdotto?.id != null) {
                  this.documentiService.getFileAspetti(this.segnalazioneProdotto.id, aspetto.idAspetto, "Prodotto", ruolo).subscribe({
                    next: (res) => {
                      const contentDisposition = res.headers.get('Content-Disposition');
                      const aspettoFileName = {
                        idAspetto: aspetto.idAspetto,
                        fileName: this.getFileNameFromContentDisposition(contentDisposition)
                      };
                      this.nomiFileAspetti.push(aspettoFileName);
                    }
                  });
                }
              }
            });
          }
        });
      }
    } catch (error) {
      console.error('Errore durante la ricerca dei dettagli della segnalazione: ', error);
    }
  }

  async loadDettagliSegnalazioneContenzioso(id: number) {
    try {
      const data = await this.rilevazioneSrv.getDettagliSegnalazioneContenziosoById(id).toPromise();

      // Mappa gli aspetti già aggiunti
      this.listaAspettiAggiunti = data.map((item: any) => ({
        idAspetto: item.idAspetto,
        nomeAspetto: item.nomeAspetto,
        descrizioneCriticita: item.criticita,
        descrizioneSuggerimento: item.suggerimento,
        hasAllegato: false,
        nuovoAspetto: item.nuovoAspetto
      }));
      // Verifico se presente un nuovo aspetto per disabilitare il'opzione Altro della select aspettiDaValutare
      for (let i = 0; i < data.length; i++) {
        if (data[i].nuovoAspetto === true) {
          this.checkNuovoAspetto = true;
        }
      }

      // Rimuovi gli aspetti già aggiunti dalla lista degli aspetti da valutare
      this.aspettiDaValutare = this.aspettiDaValutare.filter(aspetto =>
        !this.listaAspettiAggiunti.some(aggiunto => aggiunto.idAspetto === aspetto.idAspetto)
      );

      // Aggiungi gli idAspetti degli aspetti già aggiunti alla segnalazione
      this.listaAspettiAggiunti.forEach(aspetto => {
        if (aspetto.idAspetto) {
          this.idAspetti.push(aspetto.idAspetto);
        }
      });

      if (this.segnalazioneContenzioso && this.segnalazioneContenzioso.id != null) {
        const ruolo = this.selectRole();
        this.documentiService.findAllegatiAspetti(this.segnalazioneContenzioso.id, this.idAspetti, "Contenzioso", ruolo).subscribe({
          next: (res: AspettoAllegato[]) => {
            this.isFileAspetti = res;

            this.listaAspettiAggiunti.forEach(aspetto => {
              const allegato = this.isFileAspetti.find(a => a.idAspetto === aspetto.idAspetto);
              if (allegato && allegato.esito) {
                aspetto.hasAllegato = true;

                if (aspetto.idAspetto !== undefined && this.segnalazioneContenzioso?.id != null) {
                  this.documentiService.getFileAspetti(this.segnalazioneContenzioso.id, aspetto.idAspetto, "Contenzioso", ruolo).subscribe({
                    next: (res) => {
                      const contentDisposition = res.headers.get('Content-Disposition');
                      const aspettoFileName = {
                        idAspetto: aspetto.idAspetto,
                        fileName: this.getFileNameFromContentDisposition(contentDisposition)
                      };
                      this.nomiFileAspetti.push(aspettoFileName);
                    }
                  });
                }
              }
            });
          }
        });
      }
    } catch (error) {
      console.error('Errore durante la ricerca dei dettagli della segnalazione: ', error);
    }
  }

  // NUOVO

  private _filterSettore(value: string | SettoreMateria): SettoreMateria[] {
    const filterValue = (typeof value === 'string' ? value : value?.nome || '').toLowerCase();
    return (
      this.settoreMateria?.filter(option => option.nome.toLowerCase().includes(filterValue)) ?? []
    );
  }

  private _filterArea(value: string | AreaProdotto): AreaProdotto[] {
    const filterValue = (typeof value === 'string' ? value : value?.nome || '').toLowerCase();
    return (
      this.areaProdotto?.filter(option => option.nome.toLowerCase().includes(filterValue)) ?? []
    );
  }

  private _filterSede = (value: string | Sede): Sede[] => {
    const filterValue = (
      typeof value === 'string' ? value : this.formatToSixDigits(value?.id?.toString() ?? '')
    ).toLowerCase();
    return (
      this.sede?.filter(
        option =>
          this.formatToSixDigits(option.id?.toString() ?? '')
            ?.toLowerCase()
            .includes(filterValue) || option.nome.toLowerCase().includes(filterValue)
      ) ?? []
    );
  };

  private _filterTipologia = (value: string | TipologieContenzioso): TipologieContenzioso[] => {
    const filterValue = (typeof value === 'string' ? value : value?.nome || '').toLowerCase();
    return (
      this.tipologieContenzioso?.filter(option =>
        option.nome.toLowerCase().includes(filterValue)
      ) ?? []
    );
  };

  private _filterAspetti(value: any): AspettoConDescrizione[] {
    let filterValue = '';

    if (typeof value === 'string') {
      filterValue = value.toLowerCase();
    } else if (value && value.nomeAspetto) {
      filterValue = value.nomeAspetto.toLowerCase();
    }

    return this.aspettiDaValutare
      .filter(option => option && option.nomeAspetto) // Assicurati che l'opzione abbia un nome
      .filter(option => option.nomeAspetto.toLowerCase().includes(filterValue));
  }


  displayAspetto(aspetto?: AspettoConDescrizione): string {
    return aspetto && aspetto.nomeAspetto ? aspetto.nomeAspetto :  '';
  }

  async getSettoriMaterie() {
    this.settoreMateriaService.getSettoriConAreeProdotti().subscribe((data: SettoreMateria[] | string) => {
      const emptyObject: SettoreMateria = { id: null, nome: '' };
      if (Array.isArray(data)) {
        this.settoreMateria = [emptyObject, ...data];
      } else {
        this.settoreMateria = [emptyObject];
      }
    });
  }


  async getAllAreaProdotto() {
    await this.areeProdottiService.getAllAreaProdotto().subscribe((data: any) => {
      const emptyObject: AreaProdotto = { id: null, nome: '' };
      this.areaProdotto = [emptyObject, ...data];
    });
  }

  settoreSelected(event: any) {
    const selectedSettore = event.option.value;
    const selectedId = selectedSettore.id;

    this.firstFormGroup.patchValue({ settoreMateria: selectedId });

    if (selectedId && selectedId !== null && selectedId !== undefined) {
      this.areeProdottiService.newGetAllByIdSettore(selectedId).subscribe(
        (data: any) => {
          const emptyObject: AreaProdotto = { id: null, nome: '' };
          this.areaProdotto = [emptyObject, ...data];
        },
        error => {
          console.error('Errore durante il caricamento delle aree prodotti:', error);
        }
      );
    } else {
      console.warn('ID Settore non valido:', selectedId);
    }
  }

  areaSelected(event: any) {
    if (event.option && event.option.value) {
      const selectedArea = event.option.value;
      const selectedAreaId = selectedArea.id;
      const selectedSettoreId = selectedArea.idSettore;
      this.firstFormGroup.patchValue({ areaProdotto: selectedAreaId });

      const selectedSettore = this.settoreMateria?.find(option => option.id === selectedSettoreId);
      if (selectedSettore) {
        this.firstFormGroup.patchValue({ settoreMateria: selectedSettore.id });
        this.settoreCtrl.setValue(selectedSettore);
      } else {
        console.warn('Settore non trovato per ID:', selectedSettoreId);
      }
    } else {
      console.error('Evento non contiene un valore valido:', event);
    }
  }

  sedeSelected(event: any) {
    if (event.option && event.option.value) {
      const selectedSede = event.option.value;
      const selectedSedeId = selectedSede.id;
      this.firstFormGroup.patchValue({ sede: selectedSedeId });
    } else {
      console.error('Evento non contiene un valore valido:', event);
    }
  }

  tipologiaSelected(event: any) {
    const selectedTipologia = event.option.value;
    const selectedId = selectedTipologia.id;
    this.firstFormGroup.patchValue({ tipologiaContenzioso: selectedId });
  }

  aspettoSelected(selectedAspetto: AspettoConDescrizione) {
    if (!selectedAspetto || !selectedAspetto.nomeAspetto) {
        return;
    }

    this.aspettiCtrl.setValue(selectedAspetto);
    this.secondFormGroup.patchValue({ step2Aspetti: selectedAspetto.idAspetto });
}


  clearSettore() {
    this.settoreCtrl.setValue('');
    this.firstFormGroup.patchValue({ settoreMateria: '' });
    this.getAllAreaProdotto();
    this.clearArea();
  }

  clearArea() {
    this.areaCtrl.setValue('');
    this.firstFormGroup.patchValue({ areaProdotto: '' });

    const settoreId = this.settoreCtrl.value ? this.settoreCtrl.value.id : null;
    if (settoreId !== null) {
      this.areeProdottiService.newGetAllByIdSettore(settoreId).subscribe(
        (data: any) => {
          const emptyObject: AreaProdotto = { id: null, nome: '' };
          this.areaProdotto = [emptyObject, ...data];
          this.filteredAreaProdotto = this.areaCtrl.valueChanges.pipe(
            startWith(this.areaCtrl.value),
            map(value => this._filterArea(value))
          );
        },
        error => {
          console.error('Errore durante il caricamento delle aree prodotti:', error);
        }
      );
    } else {
      // Se non c'è un settore selezionato, carica tutte le aree prodotto
      this.getAllAreaProdotto();
    }
  }


  clearSede() {
    this.sedeCtrl.setValue('');
    this.firstFormGroup.patchValue({ sede: '' });
  }

  clearTipologia() {
    this.tipologiaCtrl.setValue('');
    this.firstFormGroup.patchValue({ tipologiaContenzioso: '' });
  }

  /*clearAspetto() {
    this.aspettiCtrl.setValue('');
    this.secondFormGroup.patchValue({ step2Aspetti: '' });
  }*/
  clearAspetto() {
    if (this.aspettiCtrl.value.idAspetto > this.maxIdAspettiDaValutare) {
      this.aspettiDaValutare.pop();
      this.checkNuovoAspetto = false;
    }
    // Imposta il valore del controllo su una stringa vuota
    this.aspettiCtrl.setValue('');
    // Rimuove il valore dal form group (se necessario)
    this.secondFormGroup.patchValue({ step2Aspetti: null });

    // Forza il filtro a ritriggerare inviando un valore vuoto o spazio per rilanciare il filtro
    this.filteredAspettiDaValutare = this.aspettiCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this._filterAspetti(value || ''))
    );
  }

  onFocus(ctrl: FormControl): void {
    if (!ctrl.value || ctrl.value === '') {
      ctrl.setValue(' ');
      setTimeout(() => ctrl.setValue(''), 1);
    }
  }


  displaySettore(settore?: SettoreMateria): string {
    return settore ? settore.nome : '';
  }

  displayArea(area?: AreaProdotto): string {
    return area ? area.nome : '';
  }

  displaySede = (sede?: Sede): string => {
    if (!sede || sede.id === null || sede.id === undefined) {
      return '';
    }
    const formattedId = this.formatToSixDigits(sede.id?.toString() ?? '');
    return `${formattedId} - ${sede.nome}`;
  };

  displayTipologia(tipologia?: TipologieContenzioso): string {
    return tipologia ? tipologia.nome : '';
  }


  async areaProdottoSelezionato(idSettore: number, tipoSegnalazione: string) {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    this.areeProdottiService.newGetAllByIdSettore(idSettore).subscribe((data: any) => {
      this.areaProdotto = [...data];

      for (let i = 0; i < data.length; i++) {
        this.areaProdotto![i].id = data[i].id;
        this.areaProdotto![i].nome = data[i].nome;
      }

      switch (tipoSegnalazione) {
        case prodotto: {
          for (let i = 0; i < this.areaProdotto!.length; i++) {
            if (
              this.stepperService.datiSegnalazioneProdotto$.value!.areaProdotto ==
              this.areaProdotto![i].nome
            ) {
              this.firstFormGroup.patchValue({ areaProdotto: this.areaProdotto![i].id });
              break;
            }
          }
          break;
        }

        case contenzioso: {
          for (let i = 0; i < this.areaProdotto!.length; i++) {
            if (
              this.stepperService.datiSegnalazioneContenzioso$.value!.areaProdotto ==
              this.areaProdotto![i].nome
            ) {
              this.firstFormGroup.patchValue({ areaProdotto: this.areaProdotto![i].id });
              break;
            }
          }
          break;
        }
      }
    });
  }

  toggleAllegaDatiGenerali() {

    if(!this.isFileDatiGenerali || this.showGestioneFileDatiGenerali)
      this.showGestioneFileDatiGenerali = !this.showGestioneFileDatiGenerali;
  }

  onFilesAddedDatiGenerali(file: any) {
    this.fileSegnalazione = file;
  }

  removeFileSegnalazione(file: any) {
    if (
      this.fileSegnalazione &&
      this.fileSegnalazione.name === file.name &&
      this.fileSegnalazione.size === file.size
    ) {
      this.fileSegnalazione = null;
    }
  }

  removeFileAspetti(event: { file: File; idAspetto?: number }) {
    const index = this.filesAspetti.findIndex(
      f =>
        f.file.name === event.file.name &&
        f.file.size === event.file.size &&
        f.idAspetto === event.idAspetto
    );
    if (index !== -1) {
      this.filesAspetti.splice(index, 1);
    }
  }

  onFilesAddedCriticita(file: any) {
    this.filesAspetti.push(file);
  }

  async getSedi() {
    const ruoliTrimmed = this.role!.split(';').map(ruolo => ruolo.trim());

    if (ruoliTrimmed.includes('P12689') || ruoliTrimmed.includes('P12690')) {
      // Caso 1: specifici ruoli sono presenti
    } else {
      if (
        (ruoliTrimmed.includes(this.ruoloRegionale) ||
          ruoliTrimmed.includes(this.ruoloProvinciale)) &&
        this.codiceSede.length === 0
      ) {
        alert('Non ci sono sedi associate al tuo account.');
        return;
      }
    }

    this.territorioService
      .getSedi(
        this.role!,
        this.codiceSede,
        this.loadTipoSegnalazioni,
        this.ruoloRegionale,
        this.ruoloProvinciale
      )
      .subscribe((results: Sede[]) => {
        const emptyObject: Sede = { id: null, nome: '' };
        this.sede = [emptyObject, ...results];

        if (this.sede.length === 0) {
          alert('Non ci sono sedi disponibili.');
          return;
        }

        const segnalazioneProdotto = this.stepperService.datiSegnalazioneProdotto$.value;
        const segnalazioneContenzioso = this.stepperService.datiSegnalazioneContenzioso$.value;

        const selectedSede =
          this.loadTipoSegnalazioni === 'Prodotto' && segnalazioneProdotto
            ? segnalazioneProdotto.sede
            : segnalazioneContenzioso
            ? segnalazioneContenzioso.sede
            : null;

        if (selectedSede) {
          this.sede.forEach(sede => {
            if (selectedSede === sede.nome) {
              this.firstFormGroup.patchValue({ sede: sede.id });
            }
          });
        }
      });
  }


  async loadTipologieContenzioso() {
    this.contenziosoService.getAllTioplogie().subscribe((data: Sede[]) => {
      this.tipologieContenzioso.unshift({ id: null, nome: '' });
      const emptyObject: TipologieContenzioso = { id: null, nome: '' };
      this.tipologieContenzioso = [emptyObject, ...data];

      if (this.stepperService.datiSegnalazioneContenzioso$.value! != undefined) {
        for (let i = 0; i < this.tipologieContenzioso!.length; i++) {
          if (
            this.stepperService.datiSegnalazioneContenzioso$.value!.contenziosoDesc ==
            this.tipologieContenzioso![i].nome
          ) {
            this.firstFormGroup.patchValue({
              tipologiaContenzioso: this.tipologieContenzioso![i].id,
            });
          }
        }
      }
    });
  }

  stepperChange(event: any) {
    this.formatIdToNameStep1();

    if (event.selectedIndex == 2) {
      this.tableStep3.renderRows();
    }
    if (event.selectedIndex == 3) {
      this.tableStep4.renderRows();
    }
  }

  aggiungiAspettoCriticita() {
    const esito = this.stepperService.checkStringOnlySpaces(this.secondFormGroup.value.step2Criticita!.trim());
    if (!esito) {
      const aspettoId = Number(this.secondFormGroup.value.step2Aspetti!);
      const aspetto = this.aspettiDaValutare.find(a => a.idAspetto === aspettoId);
      if (aspetto) {

        this.listaAspettiAggiunti.push({
          idAspetto: aspetto.idAspetto > this.maxIdAspettiDaValutare ? -1 : aspetto.idAspetto,
          nomeAspetto: aspetto.nomeAspetto,
          descrizioneCriticita: this.secondFormGroup.value.step2Criticita!.trim(),
          descrizioneSuggerimento: '',
          hasAllegato: false,
          nuovoAspetto: aspetto.idAspetto > this.maxIdAspettiDaValutare ? true : false
        });
        // Verifico la presenza di nuovi aspetti
        if (aspetto.idAspetto > this.maxIdAspettiDaValutare) {
          this.checkNuovoAspetto = true;
        }

        // Rimuovi dalla lista degli aspetti da valutare
        this.aspettiDaValutare = this.aspettiDaValutare.filter(a => a.idAspetto !== aspettoId);

        // Ordina gli aspetti in modo che quelli con ID negativi (nuovi) siano in fondo
        this.aspettiDaValutare.sort((a, b) => a.idAspetto - b.idAspetto);
        // this.aspettiDaValutare.sort((a, b) => (a.idAspetto > b.idAspetto ? 1 : -1));

        // this.clearAspetto();
        // Imposta il valore del controllo su una stringa vuota
        this.aspettiCtrl.setValue('');
        // Rimuove il valore dal form group (se necessario)
        this.secondFormGroup.patchValue({ step2Aspetti: null });

        // Forza il filtro a ritriggerare inviando un valore vuoto o spazio per rilanciare il filtro
        this.filteredAspettiDaValutare = this.aspettiCtrl.valueChanges.pipe(
          startWith(''),
          map(value => this._filterAspetti(value || ''))
        );

        this.secondFormGroup.reset();
        if (this.listaAspettiAggiunti.length - 1 > 0) { // conto l'elemento appena aggiunto; evito errore nella console
          this.tableStep2.renderRows();
        }
      }
    } else {
      alert('Inserire una descrizione valida per proseguire.');
    }

    this.clearAspetto();
  }

  rimuoviAspettoAggiunto(idAspettoAggiunto: number) {

    for (let i = 0; i < this.listaAspettiAggiunti.length; i++) {

      if (this.listaAspettiAggiunti[i].idAspetto == idAspettoAggiunto) {

        // Verifico che sia un aspetto standard (aspetto Altro ha id negativo) &&
        // && che non sia un aspetto Altro inserito precedentemente e ora recuperato per la modifica
        if (idAspettoAggiunto > 0 && this.listaAspettiAggiunti[i].nuovoAspetto == false) {
          this.aspettiDaValutare.push({
            idAspetto: this.listaAspettiAggiunti[i].idAspetto,
            nomeAspetto: this.listaAspettiAggiunti[i].nomeAspetto,
            descrizioneAspetto: '',
          });
        }
        else {
          this.checkNuovoAspetto = false;
        }

        if (this.listaAspettiAggiunti[i].hasAllegato){
          this.deleteFileAspetto(idAspettoAggiunto);
        }

        this.listaAspettiAggiunti.splice(i, 1);
        this.tableStep2.renderRows();

        this.aspettiDaValutare.sort((a, b) => (a.idAspetto > b.idAspetto ? 1 : -1));

        this.filteredAspettiDaValutare = this.aspettiCtrl.valueChanges.pipe(
          startWith(''),
          map(value => this._filterAspetti(value || ''))
        );
        break;
      }
    }
    const index = this.filesAspetti.findIndex(f => f.idAspetto === idAspettoAggiunto);
    if (index !== -1) {
      this.filesAspetti.splice(index, 1);
    }
  }

  modifica(aspettiAggiunti: Aspetto, casoDaModificare: string) {
    const criticita = 'Criticita';
    const suggerimento = 'Suggerimento';

    this.stepperService.datiAspetto$.next(aspettiAggiunti);
    this.stepperService.setTitolo(casoDaModificare);

    casoDaModificare === criticita || casoDaModificare === suggerimento
      ? this.dialogStepperModifica()
      : null;
  }

  show(nota: string) {
    alert(nota);
  }

  dialogStepperModifica() {
    const dialogRef = this.dialog.open(StepperDialogModificaComponent, {
      disableClose: true,
      width: '75%',
      height: '60%',
    });
    dialogRef.afterClosed().subscribe(result => {
      for (let i = 0; i < this.listaAspettiAggiunti.length; i++) {
        if (
          this.stepperService.datiAspetto$.value!.idAspetto ==
          this.listaAspettiAggiunti[i].idAspetto
        ) {
          this.listaAspettiAggiunti[i].descrizioneCriticita =
            this.stepperService.datiAspetto$.value!.descrizioneCriticita;
          this.listaAspettiAggiunti[i].descrizioneSuggerimento =
            this.stepperService.datiAspetto$.value!.descrizioneSuggerimento;
          break;
        }
      }
      this.stepperService.datiAspetto$.next(undefined);
    });
  }

  dialogStepperCreazioneAspetto() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = 2;

    let dialogRef = this.dialog.open(StepperDialogCreazioneAspettoComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      if (this.stepperService.nuovoAspetto$.value !== '') {
        const nuovoAspetto = {
          nomeAspetto: this.stepperService.nuovoAspetto$.value,
          idAspetto: this.maxIdAspettiDaValutare + 1,
          descrizioneAspetto: '',
        };
        this.aspettiDaValutare.push(nuovoAspetto);
        this.checkNuovoAspetto = true;
        const ultimoAspetto = this.aspettiDaValutare[this.aspettiDaValutare.length - 1];
        this.aspettiCtrl.setValue(ultimoAspetto)
        this._filterAspetti(ultimoAspetto)
        this.secondFormGroup.patchValue({
          step2Aspetti: nuovoAspetto.idAspetto,
        });
      }
    });
  }

  invia(statoSegnalazione: number) {
    let datiSegnalazione: any;
    if (this.loadTipoSegnalazioni === 'Prodotto') {
      datiSegnalazione = this.stepperService.datiSegnalazioneProdotto$.value || {};
    } else if (this.loadTipoSegnalazioni === 'Contenzioso') {
      datiSegnalazione = this.stepperService.datiSegnalazioneContenzioso$.value || {};
    }
    datiSegnalazione.Id = statoSegnalazione == 3 ? this.idSegnalazioneCasoInvia : datiSegnalazione.Id;

    if (
      (datiSegnalazione?.statoId === 3 && statoSegnalazione < 3) ||
      (datiSegnalazione?.statoId === 2 && statoSegnalazione < 2)
    ) {
      alert(
        'Errore: non si può più modificare una segnalazione inviata o salvare in bozza una segnalazione già salvata'
      );
      return;
    }

    // Controllo se Settore/Materia è selezionato senza Area/Prodotto
    if (
      this.firstFormGroup.value.settoreMateria &&
      (!this.firstFormGroup.value.areaProdotto || this.firstFormGroup.value.areaProdotto === '')
    ) {
      this.openErrorDialog(
        'Per salvare in bozza devi aggiungere un Area/Prodotto al Settore/Materia selezionato'
      );

      return;
    }

    if ((statoSegnalazione === 2 || statoSegnalazione === 3) && !this.isValidFormGroup()) {
      alert('Errore: tutti i campi tranne i suggerimenti devono essere non vuoti e non null');
      return;
    }

    if (this.loadTipoSegnalazioni === 'Prodotto') {
      this.inviaSegnalazioneProdotto(datiSegnalazione, statoSegnalazione);
    } else if (this.loadTipoSegnalazioni === 'Contenzioso') {
      this.inviaSegnalazioneContenzioso(datiSegnalazione, statoSegnalazione);
    }
  }

  selectRole(): string {
    if (!this.role) {
      // console.error('Il ruolo non è stato impostato correttamente.');
      return '';
    }

    else if (this.role.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === this.ruoloRegionale)){
      return this.ruoloRegionale;
    }

    else if (this.role.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === this.ruoloProvinciale)){
      return this.ruoloProvinciale;
    }

    else if (this.role.split(';').map(ruolo => ruolo.trim()).some(ruolo => ruolo === 'P12689')){
      return 'P12689';
    }

    return '';
  }

  private inviaSegnalazioneProdotto(datiSegnalazione: any, statoSegnalazione: number) {
    const segnalazioneProdotto: SegnalazioneProdotto = {
      id: datiSegnalazione.id ?? 0,
      creato: datiSegnalazione.creato ?? new Date().toISOString(),
      aggiornato: new Date().toISOString(),
      confermata: true,
      matricolaIns: this.storageService.getItem('matricola') ?? 'matins',
      scadenza: new Date().toISOString(),
      matricolaIncarico: 'matinc',
      sede: this.formatToSixDigits(this.firstFormGroup.value.sede),
      idStatoSalvataggioRilevazione: statoSegnalazione,
      ruoloIns: this.selectRole(),
      idArea: Number(this.firstFormGroup.value.areaProdotto) ?? datiSegnalazione.areaId,
      aspettiSegnalazione: this.listaAspettiAggiunti.map(aspetto => ({
        id: 0,
        creato: new Date().toISOString(),
        aggiornato: new Date().toISOString(),
        idAspetto: aspetto.idAspetto < 0 ? 0 : aspetto.idAspetto, // Se ID è negativo, invialo come 0
        nome: aspetto.nomeAspetto.replace(/\s+/g,' ').trim(),
        idSegnalazioneProdotto: 0,
        criticita: aspetto.descrizioneCriticita,
        suggerimento: aspetto.descrizioneSuggerimento,
      })),
    };

    let formData = new FormData();

    (Object.keys(segnalazioneProdotto) as Array<keyof SegnalazioneProdotto>).forEach(key => {
      if (key === 'aspettiSegnalazione') {
        segnalazioneProdotto.aspettiSegnalazione.forEach((aspetto, index) => {
          Object.keys(aspetto).forEach(aspettoKey => {
            const fieldKey = `aspettiSegnalazione[${index}].${aspettoKey}`;
            const fieldValue = (aspetto as any)[aspettoKey] ?? 'null'; // Convert null/undefined to empty string
            formData.append(fieldKey, fieldValue);
          });
        });
      } else {
        formData.append(key, segnalazioneProdotto[key] as any);
      }
    });

    if (this.fileSegnalazione) {
      formData.append('fileSegnalazione', this.fileSegnalazione);
    }

    const idAspetti: number[] = [];
    if (this.filesAspetti.length > 0) {
      this.filesAspetti.forEach(item => {
        formData.append(`filesAspetti`, item.file);
        idAspetti.push(item.idAspetto);
      });
    }
    formData.append('idAspetti', JSON.stringify(idAspetti));

    this.rilevazioneSrv.salvaSegnalazioneProdotto(formData).subscribe({
      next: response => {
        if (response && response.id !== null && response.id !== undefined) {
          statoSegnalazione == 2 ? null : this.router.navigate(['/segnalazione/inserimento']);
          this.statoSegnalazione = statoSegnalazione;
          this.idSegnalazioneCasoInvia = response.id;
        } else {
          // console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
          this.openErrorDialog("Errore durante l'invio dei dati. ERRORE: " + response.error.message);
        }
      },
      error: error => {
        // console.error("Errore durante l'invio dei dati:", error);
        if(error.error.message == 'Esiste già una segnalazione identica con lo stato di bozza.')
          this.openErrorDialog(error.error.message);
        else
          this.openErrorDialog("Errore durante l'invio dei dati: " + error.error.message)
      },
    });
  }

  private inviaSegnalazioneContenzioso(datiSegnalazione: any, statoSegnalazione: number) {
    const segnalazioneContenzioso: SegnalazioneContenzioso = {
      id: datiSegnalazione.id ?? 0,
      creato: datiSegnalazione.creato ?? new Date().toISOString(),
      aggiornato: new Date().toISOString(),
      confermata: true,
      matricolaIns: this.storageService.getItem('matricola') ?? 'matins',
      scadenza: new Date().toISOString(),
      matricolaIncarico: 'matinc',
      sede: this.formatToSixDigits(this.firstFormGroup.value.sede),
      idStatoSalvataggioRilevazione: statoSegnalazione,
      ruoloIns: this.selectRole(),
      idArea: Number(this.firstFormGroup.value.areaProdotto) ?? datiSegnalazione.areaId,
      aspettiSegnalazione: this.listaAspettiAggiunti.map(aspetto => ({
        id: 0,
        creato: new Date().toISOString(),
        aggiornato: new Date().toISOString(),
        idAspetto: aspetto.idAspetto < 0 ? 0 : aspetto.idAspetto, // Se ID è negativo, invialo come 0         //da mettere anche sul contenzioso
        nome: aspetto.nomeAspetto.replace(/\s+/g,' ').trim(),
        idSegnalazioneProdotto: 0,
        criticita: aspetto.descrizioneCriticita,
        suggerimento: aspetto.descrizioneSuggerimento,
      })),
      contenziosoId:
        Number(this.firstFormGroup.value.tipologiaContenzioso) ?? datiSegnalazione.contenziosoId,
    };

    let formData = new FormData();

    (Object.keys(segnalazioneContenzioso) as Array<keyof SegnalazioneProdotto>).forEach(key => {
      if (key === 'aspettiSegnalazione') {
        segnalazioneContenzioso.aspettiSegnalazione.forEach((aspetto, index) => {
          Object.keys(aspetto).forEach(aspettoKey => {
            formData.append(
              `aspettiSegnalazione[${index}].${aspettoKey}`,
              (aspetto as any)[aspettoKey]
            );
          });
        });
      } else {
        formData.append(key, segnalazioneContenzioso[key] as any);
      }
    });

    if (this.fileSegnalazione) {
      formData.append('fileSegnalazione', this.fileSegnalazione);
    }

    const idAspetti: number[] = [];
    if (this.filesAspetti.length > 0) {
      this.filesAspetti.forEach(item => {
        formData.append(`filesAspetti`, item.file);
        idAspetti.push(item.idAspetto);
      });
    }
    formData.append('idAspetti', JSON.stringify(idAspetti));

    this.rilevazioneSrv.salvaSegnalazioneContenzioso(formData).subscribe({
      next: response => {
        if (response.id !== null || response.id !== undefined) {
          statoSegnalazione == 2 ? null : this.router.navigate(['/segnalazione/inserimento']);
          this.statoSegnalazione = statoSegnalazione;
          segnalazioneContenzioso.id = response.id;
          this.idSegnalazioneCasoInvia = response.id;
        } else {
          console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
          this.openErrorDialog("Errore durante l'invio dei dati");
        }
      },
      error: error => {
        console.error("Errore durante l'invio dei dati:", error);
        if(error.error.message == 'Esiste già una segnalazione identica con lo stato di bozza.')
          this.openErrorDialog(error.error.message);
        else
          this.openErrorDialog("Errore durante l'invio dei dati")
      },
    });
  }

  sendDialogStepperModifica(statoId: number) {
    if (this.loadTipoSegnalazioni == 'Prodotto') {
      this.rilevazioneSrv
        .sendSegnalazione(this.loadTipoSegnalazioni, this.idSegnalazioneCasoInvia, statoId - 1)
        .subscribe({
          next: response => {
            if (response.success === true) {
              this.router.navigate(['/segnalazione/inserimento']);
            } else {
              console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
            }
          },
          error: error => {
            console.error("Errore durante l'invio dei dati:", error);
          },
        });
    } else {
      this.rilevazioneSrv
        .sendSegnalazione(this.loadTipoSegnalazioni, this.idSegnalazioneCasoInvia, statoId-1)
        .subscribe({
          next: response => {
            if (response.success === true) {
              this.router.navigate(['/segnalazione/inserimento']);
            } else {
              console.error("Errore durante l'invio dei dati: Il backend ha restituito false");
            }
          },
          error: error => {
            console.error("Errore durante l'invio dei dati:", error);
          },
        });
    }
  }

  isValidDatiGenerali(): boolean {
    const requiredFields = [
      this.firstFormGroup.value.settoreMateria,
      this.firstFormGroup.value.areaProdotto,
      this.firstFormGroup.value.sede,
    ];

    if (this.loadTipoSegnalazioni === 'Contenzioso') {
      requiredFields.push(this.firstFormGroup.value.tipologiaContenzioso);
    }

    return requiredFields.every(field => field !== null && field !== '');
  }

  isValidFormGroup(): boolean {
    if (!this.isValidDatiGenerali()) {
      return false;
    }

    return (
      this.listaAspettiAggiunti.length > 0 &&
      this.listaAspettiAggiunti.every(aspetto => aspetto.descrizioneCriticita.trim() !== '')
    );
  }

  formatIdToNameStep1() {
    const prodotto = 'Prodotto';
    const contenzioso = 'Contenzioso';

    var checkFields = true;



    switch (this.stepperService.inserimentoTipoSegnalazione$.value) {
      case prodotto: {
        if (
          this.firstFormGroup.value.settoreMateria != '' &&
          this.firstFormGroup.value.settoreMateria != null &&
          this.firstFormGroup.value.settoreMateria != undefined
        ) {
          this.nomeSettoreMateria = this.settoreMateria!.find(
            settore => settore.id == Number.parseInt(this.firstFormGroup.value.settoreMateria!)
          )!.nome;
        } else {
          checkFields = false;
        }
        if (
          this.firstFormGroup.value.areaProdotto != '' &&
          this.firstFormGroup.value.areaProdotto != null &&
          this.firstFormGroup.value.areaProdotto != undefined
        ) {
          for (let i = 0; i < this.areaProdotto!.length; i++) {
            if (this.firstFormGroup.value.areaProdotto! == this.areaProdotto![i].id) {
              this.nomeAreaProdotto = this.areaProdotto![i].nome;
              break;
            } else {
              this.nomeAreaProdotto == '';
            }
          }
        } else {
          checkFields = false;
        }
        if (
          this.firstFormGroup.value.sede != '' &&
          this.firstFormGroup.value.sede != null &&
          this.firstFormGroup.value.sede != undefined
        ) {
          this.nomeSede = this.sede.find(
            sede => sede.id == Number.parseInt(this.firstFormGroup.value.sede!)
          )!.nome;
          this.numeroCodiceSede = this.firstFormGroup.value.sede!;
        } else {
          checkFields = false;
        }

        if (checkFields == false) {
          this.nomeSettoreMateria = '';
          this.nomeAreaProdotto = '';
          this.nomeSede = '';
        }

        break;
      }

      case contenzioso: {
        if (
          this.firstFormGroup.value.settoreMateria != '' &&
          this.firstFormGroup.value.settoreMateria != null &&
          this.firstFormGroup.value.settoreMateria != undefined
        ) {
          this.nomeSettoreMateria = this.settoreMateria!.find(
            settore => settore.id == Number.parseInt(this.firstFormGroup.value.settoreMateria!)
          )!.nome;
        } else {
          checkFields = false;
        }
        if (
          this.firstFormGroup.value.areaProdotto != '' &&
          this.firstFormGroup.value.areaProdotto != null &&
          this.firstFormGroup.value.areaProdotto != undefined
        ) {
          for (let i = 0; i < this.areaProdotto!.length; i++) {
            if (this.firstFormGroup.value.areaProdotto! == this.areaProdotto![i].id) {
              this.nomeAreaProdotto = this.areaProdotto![i].nome;
              break;
            } else {
              this.nomeAreaProdotto == '';
            }
          }
        } else {
          checkFields = false;
        }
        if (
          this.firstFormGroup.value.sede != '' &&
          this.firstFormGroup.value.sede != null &&
          this.firstFormGroup.value.sede != undefined
        ) {
          this.nomeSede = this.sede.find(
            sede => sede.id == Number.parseInt(this.firstFormGroup.value.sede!)
          )!.nome;
          this.numeroCodiceSede = this.firstFormGroup.value.sede!;
        } else {
          checkFields = false;
        }
        if (
          this.firstFormGroup.value.tipologiaContenzioso != '' &&
          this.firstFormGroup.value.tipologiaContenzioso != null &&
          this.firstFormGroup.value.tipologiaContenzioso != undefined
        ) {
          this.nomeTipologiaContenzioso = this.tipologieContenzioso.find(
            contenzioso =>
              contenzioso.id == Number.parseInt(this.firstFormGroup.value.tipologiaContenzioso!)
          )!.nome;
        } else {
          checkFields = false;
        }

        if (checkFields == false) {
          this.nomeSettoreMateria = '';
          this.nomeAreaProdotto = '';
          this.nomeSede = '';
        }
        break;
      }
    }
  }

  showDescrizioneTroncata(descrizione: string | null | undefined): string {
    if (!!descrizione && descrizione.length > 23) {
      return descrizione.substring(0, 20) + '...';
    } else {
      return descrizione || '';
    }
  }

  mostraNotaCompleta(nota: string) {
    alert(nota); // Puoi sostituire questo con qualsiasi altra logica per mostrare il testo completo, come un modale
  }

  moveToStep(index: number) {
    this.stepper.selectedIndex = index - 1;
  }

  checkFormEGriglia(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (this.listaAspettiAggiunti.length != 0) {
        return { esito: true };
      } else if (value != '' && this.listaAspettiAggiunti.length == 0) {
        return { esito: true };
      } else if (value == '' && this.listaAspettiAggiunti.length == 0) {
        return { esito: false };
      }

      return { esito: null };
    };
  }

  loadAspettiDaValutare() {
    this.prodottiSrv
      .getAspettiEDescrizioni(this.stepperService.inserimentoTipoSegnalazione$.value!)
      .subscribe(data => {
        data.forEach(item => {
          this.aspettiDaValutare.push({
            nomeAspetto: item.nome,
            idAspetto: item.id,
            descrizioneAspetto: item.descrizione,
          });
        });
        const max = this.aspettiDaValutare.reduce(function (prev, current) {
          return prev && prev.idAspetto > current.idAspetto ? prev : current;
        });
        this.maxIdAspettiDaValutare = Number(max.idAspetto);
      });
  }

  showFieldSede(codiceSede: number, nomeSede: string): string {
    if (
      codiceSede != null &&
      codiceSede != undefined &&
      codiceSede != Number('') &&
      nomeSede != null &&
      nomeSede != undefined &&
      nomeSede != ''
    ) {
      var codiceFormattato = this.formatToSixDigits(codiceSede);
      return codiceFormattato + ' - ' + nomeSede;
    } else {
      return '';
    }
  }

  canAddAspect(): boolean {
    const aspetto = this.secondFormGroup.value.step2Aspetti;
    const criticita = this.secondFormGroup.value.step2Criticita;
    return aspetto && criticita && criticita.trim() !== '';
  }

  openErrorDialog(message: string): void {
    this.dialog.open(PopupErroreInserimentoComponent, {
      data: { message: message },
    });
  }

  isAllFieldsValidContenzioso(): boolean {
    return (
      this.isValid(this.nomeSettoreMateria) &&
      this.isValid(this.nomeAreaProdotto) &&
      this.isValid(this.nomeSede) &&
      this.isValid(this.nomeTipologiaContenzioso)
    );
  }

  isAllFieldsValidProdotto(): boolean {
    return (
      this.isValid(this.nomeSettoreMateria) &&
      this.isValid(this.nomeAreaProdotto) &&
      this.isValid(this.nomeSede)
    );
  }

  private isValid(field: string): boolean {
    return field !== '' && field !== null && field !== undefined;
  }

  private getFileNameFromContentDisposition(contentDisposition: string | null): string {
    if (!contentDisposition) {
      return 'download';
    }

    const filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches = filenameRegex.exec(contentDisposition);
    if (matches != null && matches[1]) {
      return matches[1].replace(/['"]/g, '');
    }

    const filenameStarRegex = /filename\*=UTF-8''(.*?)(?:;|$)/;
    const matchesStar = filenameStarRegex.exec(contentDisposition);
    if (matchesStar != null && matchesStar[1]) {
      return decodeURIComponent(matchesStar[1]);
    }

    return 'download';
  }

  deleteFileSegnalazione(fileName: string){
    const ruolo = this.selectRole();
    if(this.segnalazioneProdotto?.id != null)
      this.documentiService.deleteFileSegnalazione(this.segnalazioneProdotto.id, fileName, "Prodotto", ruolo).subscribe(() =>{
        this.isFileDatiGenerali = false;
    });
    else if(this.segnalazioneContenzioso?.id != null)
      this.documentiService.deleteFileSegnalazione(this.segnalazioneContenzioso.id, fileName, "Contenzioso", ruolo).subscribe(() =>{
      this.isFileDatiGenerali = false
    });
  }

  deleteFileAspetto(idAspetto: number){
    const ruolo = this.selectRole()
    let aspetto;
    if(this.segnalazioneProdotto?.id != null){
      const nomeFile = this.getNomeFileAspetto(idAspetto);
      if(nomeFile)
        this.documentiService.deleteFileAspetto(this.segnalazioneProdotto.id, idAspetto, nomeFile, "Prodotto", ruolo).subscribe((response) =>{
          if(response.esito){
            aspetto = this.listaAspettiAggiunti.find(a => a.idAspetto === idAspetto);
            if(aspetto)
              aspetto.hasAllegato = false;
          }
        });
      }
    else if(this.segnalazioneContenzioso?.id != null){
      const nomeFile = this.getNomeFileAspetto(idAspetto);
      if(nomeFile)
        this.documentiService.deleteFileAspetto(this.segnalazioneContenzioso.id, idAspetto, nomeFile, "Contenzioso", ruolo).subscribe((response)=>{
         if(response.esito){
          aspetto = this.listaAspettiAggiunti.find(a => a.idAspetto === idAspetto);
          if(aspetto)
            aspetto.hasAllegato = false
         }
      })
    }
  }

  downloadFileSegnalazione(){
    const ruolo = this.selectRole();
    if(this.segnalazioneProdotto?.id != null)
      this.documentiService.getFileSegnalazione(this.segnalazioneProdotto?.id, "Prodotto", ruolo).subscribe(response =>{
        const contentDisposition = response.headers.get('Content-Disposition');
        const fileName = this.getFileNameFromContentDisposition(contentDisposition);
        const blob = response.body;
        const url = window.URL.createObjectURL(blob as (Blob | MediaSource));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    });
    else if(this.segnalazioneContenzioso?.id != null)
      this.documentiService.getFileSegnalazione(this.segnalazioneContenzioso.id, "Contenzioso", ruolo).subscribe(response => {
        const contentDisposition = response.headers.get('Content-Disposition');
        const fileName = this.getFileNameFromContentDisposition(contentDisposition);
        const blob = response.body;
        const url = window.URL.createObjectURL(blob as (Blob | MediaSource));
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    });
  }

  downloadFileAspetto(idAspetto: number){
    const ruolo = this.selectRole();
    if(this.segnalazioneProdotto?.id != null){
      this.documentiService.getFileAspetti(this.segnalazioneProdotto.id, idAspetto, "Prodotto", ruolo).subscribe(response => {
        const contentDisposition = response.headers.get('content-disposition');
        const fileName = this.getFileNameFromContentDisposition(contentDisposition);

        const blob = response.body;
        const url = window.URL.createObjectURL(blob as (Blob | MediaSource));

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url);
      });
    }
    else if(this.segnalazioneContenzioso?.id != null){
      this.documentiService.getFileAspetti(this.segnalazioneContenzioso.id, idAspetto, "Contenzioso", ruolo).subscribe(response => {
        const contentDisposition = response.headers.get('content-disposition');
        const fileName = this.getFileNameFromContentDisposition(contentDisposition);

        const blob = response.body;
        const url = window.URL.createObjectURL(blob as (Blob | MediaSource));

        const a = document.createElement('a');
        a.href = url;
        a.download = fileName || 'download';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        window.URL.revokeObjectURL(url);
      })
    }
  }

  getNomeFileAspetto(idAspetto: number): string | undefined {
    const fileInfo = this.nomiFileAspetti.find(file => file.idAspetto === idAspetto);
    return fileInfo ? fileInfo.fileName : undefined;
  }

  truncateText(text: string | undefined, limit: number): string {
    if (!text) return '';
    return text.length > limit ? text.substring(0, limit) + '...' : text;
  }

}

interface SegnalazioneProdotto {
  id: number | null;
  creato: any;
  aggiornato: string | null;
  confermata: boolean;
  matricolaIns: any | null;
  scadenza: string | null;
  matricolaIncarico: string | null;
  sede: string | null;
  idStatoSalvataggioRilevazione: number | null;
  ruoloIns: any | null;
  idArea: number | null;
  aspettiSegnalazione: {
    id: any | null;
    creato: string | null;
    aggiornato: string;
    idAspetto: number | null;
    nome: string | null;
    idSegnalazioneProdotto: any | null;
    criticita: string | null;
    suggerimento: string | null;
  }[];
}

interface SegnalazioneContenzioso {
  id: number | null;
  creato: any;
  aggiornato: string | null;
  confermata: boolean;
  matricolaIns: any | null;
  scadenza: string | null;
  matricolaIncarico: string | null;
  sede: string | null;
  idStatoSalvataggioRilevazione: number | null;
  ruoloIns: any | null;
  idArea: number | null;
  contenziosoId: number | null;
  aspettiSegnalazione: {
    id: any | null;
    creato: string | null;
    aggiornato: string;
    idAspetto: number | null;
    nome: string | null;
    idSegnalazioneProdotto: any | null;
    criticita: string | null;
    suggerimento: string | null;
  }[];
}

interface SettoreMateria {
  id: number | null;
  nome: string;
}

interface AreaProdotto {
  id: number | null;
  nome: string;
}

interface Sede {
  id: number | null;
  nome: string;
}

interface TipologieContenzioso {
  id: number | null;
  nome: string;
}

interface AspettoConDescrizione {
  nomeAspetto: string;
  idAspetto: number;
  descrizioneAspetto: string;
}

interface segnalazioneContenzioso {
  areaId: number;
  areaProdotto: string;
  contenziosoDesc: string;
  contenziosoId: number;
  data1: string;
  data2: string;
  id: number;
  inviata: boolean;
  sede: string;
  sedeId: number;
  settoreId: number;
  settoreMateria: string;
  statoDesc: string;
  statoId: number;
}

interface segnalazioneProdotto {
  areaId: number;
  areaProdotto: string;
  data1: string;
  data2: string;
  id: number;
  inviata: boolean;
  sede: string;
  sedeId: number;
  settoreId: number;
  settoreMateria: string;
  statoDesc: string;
  statoId: number;
}
