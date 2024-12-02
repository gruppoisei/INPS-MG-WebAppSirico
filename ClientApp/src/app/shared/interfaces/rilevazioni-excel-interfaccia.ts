export interface RilevazioniExcelInterfaccia {
  id: BigInteger ,
  creato: String,
  aggiornato: String,
  confermata:boolean
  prodotto:[{
    id:BigInteger,
    creato:String,
    aggiornato:String,
    nome:String,
    sottoarea:{
      id:BigInteger,
      creato:String,
      aggiornato:String,
      nome:String,
      area:{
        id:BigInteger,
        creato:String,
        aggiornato:String,
        nome:String,}},
        attore:{
          id:BigInteger,
          creato:String,
          aggiornato:String,
          nome:String,
        },
        tipologiaRicorso:
        {      id:BigInteger,
          creato:String,
          aggiornato:String,
          nome:String,},
          proceduraRiferimento:{
            id:BigInteger,
            creato:String,
            aggiornato:String,
            nome:String,}}]
}
