import { Component, OnInit } from '@angular/core';
import { jsPDF } from "jspdf"; 
import { autoTable } from 'jspdf-autotable';

import { FakeSellsService } from '../fake-sells.service';
import { GeneraPdfService } from '../genera-pdf.service';

@Component({
    selector: 'app-inserimento-vendite',
    templateUrl: './inserimento-vendite.page.html',
    styleUrls: ['./inserimento-vendite.page.scss'],
})
export class InserimentoVenditePage implements OnInit {
    //listaVendite: Vendita[] = []; //dichiaro la lista vuota

    //devo inizializzare le variabili sia per la struttura dati che per il servizio
    constructor(private vendite: FakeSellsService,
                private creapdf: GeneraPdfService) {};

    ngOnInit(): void {
        
    };

    header(): string[] {
        let tabHead: string[] = []
        for(let i in this.vendite.reportVendite[0]){
            //console.log(i.toString())
            tabHead.push(i.toString())
        }
        return tabHead;
    }

    data(){
        const lista = this.vendite.reportVendite;
        return lista;
    }

    nuovaVendita(nomeCliente: string, prodotto: string, prezzo: number){
        const oggi = new Date();
        this.vendite.addSell(undefined, nomeCliente, prodotto, prezzo, oggi);
    }

    btnpdf(){
        this.creapdf.toPDF();
    }
}