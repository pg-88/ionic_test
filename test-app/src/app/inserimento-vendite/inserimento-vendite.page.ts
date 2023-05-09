import { Component, OnInit } from '@angular/core';
import { Vendita, FakeSellsService } from '../fake-sells.service';
import { jsPDF } from "jspdf"; 
import { autoTable } from 'jspdf-autotable';



@Component({
    selector: 'app-inserimento-vendite',
    templateUrl: './inserimento-vendite.page.html',
    styleUrls: ['./inserimento-vendite.page.scss'],
})
export class InserimentoVenditePage implements OnInit {
    listaVendite: Vendita[] = [
        {
            id: 0,
            nome: "Test",
            prodotto: "w40",
            prezzo: 35,
            data: new Date()
        }
    ]; //dichiaro la lista vuota

    //devo inizializzare le variabili sia per la struttura dati che per il servizio
    constructor(private insVendite: FakeSellsService) {};

    ngOnInit(): void {
        
    };

    header(): string[] {
        let tabHead: string[] = []
        for(let i in this.listaVendite[0]){
            //console.log(i.toString())
            tabHead.push(i.toString())
        }
        return tabHead;
    }

    nuovaVendita(nomeCliente: string, prodotto: string, prezzo: number){
        const oggi = new Date();
        this.insVendite.addSell(undefined, nomeCliente, prodotto, prezzo, oggi)
    }
    
    //TO DO: Da spostare in un altro service che si chiamerà genera-pdf
    toPDF(){
        let pdf = new jsPDF('portrait', 'mm', 'a4');
        //oggetto che crea il pdf, parametri: orientamento, unità, formato (si può passare array con dimensioni)

        const source = new Promise((res, rej) => {
            res(document.getElementById('export-table'))
            rej(console.log("Not Found!"))
        })
        //da dove recuperare gli elementi da inserire nel pdf


        //Promise --------------------------------------------
        // const myPDF = new Promise((res, rej) => {
        //     res(() =>  pdf.html(source!));
        //     rej((err: any) => console.log(err));
        // })
        // myPDF.then(() => pdf.save("test.pdf"));
        //----------------------------------------------------
        //pdf.text("hello world!", 105, 5);
        
        
        source.then((el: any) => {
            console.log("this is the .then of the source promise: ", el,
            "\nthis is its type: ", typeof(el));
            const element : HTMLElement = document.createElement("div");
            element.append(el);
            console.log(element);
            pdf.html(element);
            pdf.save("TestHelloWorld.pdf")
        })
        //################ NOTE ####################
        //il div contiene i tag ionic ma il pdf risulta vuoto.
        //il metodo text funziona passando una str costante
        //forse i tag pseudo html non piacciono al metodo html di jspdf

    }
    //################ TO DO #######################
    //creare un metodo per generare un elemento HTML con la tabella.
}