import { Injectable } from '@angular/core';
import { jsPDF, Context2d } from 'jspdf'
import { FakeSellsService } from './fake-sells.service';

@Injectable({
  providedIn: 'root'
})
export class GeneraPdfService {

  constructor(private vendite: FakeSellsService) { }


  toPDF(): void {
    /**Seleziona usando il tag, la parte di html da esportare
     * quindi genera un oggetto pdf e lo salva.
     * TO DO: gestire impaginazione
    */

    this.testContex();
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

  testContex(){
    /**Primi tentativi col plugin context2D */
    const canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx?.fillRect(0,0,210,297);
    ctx?.fillText(this.vendite.reportVendite[0].nome, 150, 20);
    document.body.lastElementChild?.append(canvas);
  }


  testTablePDF(){
    let pdf = new jsPDF('p', 'mm', 'a4');
    const htmlEl = document.getElementsByTagName("main")[0];
    pdf.html(htmlEl, {
        callback: function(pdf){
            pdf.save("test_HTML_PDF.pdf");
        }
    });
  }
}
