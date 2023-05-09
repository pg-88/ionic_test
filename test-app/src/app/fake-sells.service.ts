import { Injectable } from '@angular/core';

export interface Vendita {
    //rappresenta la struttura dei dati da servire all'app tramite questo servzio
    id: number;
    nome: string; //diventerà richiamo a tabella clienti
    prodotto: string; //diventerà un richiamo a una tabella di prodotti
    prezzo: number;
    data: Date;
}

@Injectable({
    providedIn: 'root'
})
export class FakeSellsService {

    reportVendite: Vendita[] = [];

    constructor() {}

    getLastSell(){
        return this.reportVendite[-1].id;
    }

    addSell(
        prog: number | undefined, 
        cliente:string, 
        prod: string, 
        prz: number, 
        giorno: Date | null){
            if (prog == undefined){
                prog = this.getLastSell() + 1; 
            }
            if (giorno == undefined){
                giorno = new Date();
            }
            this.reportVendite.push({
                id: prog,
                nome: cliente,
                prodotto: prod,
                prezzo: prz,
                data: giorno
            })
     }
}
