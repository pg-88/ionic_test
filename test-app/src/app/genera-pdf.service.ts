import { Injectable } from '@angular/core';
import { jsPDF } from 'jspdf'
import { FakeSellsService } from './fake-sells.service';

@Injectable({
  providedIn: 'root'
})
export class GeneraPdfService {

  constructor() { }


  toPDF(): void {
    /**Seleziona usando il tag, la parte di html da esportare
     * quindi genera un oggetto pdf e lo salva.
     * TO DO: gestire impaginazione
    */
    let pdf = new jsPDF('portrait', 'mm', 'a4');
    //oggetto che crea il pdf, parametri: orientamento, unità,
    //formato iso (si può passare array con dimensioni)

    pdf.html(document.getElementById("export-table")!, {
      callback: function(pdf){
        pdf.text("Titolo Prova", 105, 295)
        pdf.save("test_html_pdf.pdf");
      }
    });
  }

testTablePDF(){
    let pdf = new jsPDF('p', 'mm', 'a4');
    const htmlEl = document.getElementsByTagName("main")[0];
    pdf.html(htmlEl, {
        callback: function(pdf){
            pdf.save("test_HTML_PDF.pdf")
        }
    });
  }


}
