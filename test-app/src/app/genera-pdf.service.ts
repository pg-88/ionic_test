import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf'
import  autoTable, { PageHook } from 'jspdf-autotable';
import { RowInput } from 'jspdf-autotable';
import { CellInput } from 'jspdf-autotable';


@Injectable({
  providedIn: 'root'
})
export class GeneraPdfService {
  
  doc: jsPDF = new jsPDF({ //oggetto jsPDF
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
    compress: false
  });

    constructor() { }

    inserisciTab(intestazione: string[], righe: any[][]){
      /**aggiunge tabella con autotable.
       * Args:
       *  intestazione: array di stringhe contenente l'intestazione delle colonne
       *  body: array di array che rappresentano le righe della tab
       *  ###todo###-->>style???
       */
      autoTable(this.doc, {
        //dati per la tabella
        head: [intestazione],
        body: righe,
        //stile
        
        //hook che parte alla fine della scrittura della pagina
        didDrawPage: (data) => {
          let str = 'Pag ' + this.doc.getNumberOfPages().toString();
          this.doc.setFontSize(10);
          this.doc.text(str, data.settings.margin.left, this.doc.internal.pageSize.getHeight() - 10);
        },
      });
    }

    toPDF(nomeFile: string = 'download.pdf'){
      /**Salva il pdf con il nome passato in nomeFile, default 'download.pdf'*/
      //console.log(this.doc.output())
      this.doc.save(nomeFile);
    }
}