import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FakeSellsService, Vendita } from '../fake-sells.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-doc-canvas',
  templateUrl: './doc-canvas.page.html',
  styleUrls: ['./doc-canvas.page.scss'],
})
export class DocCanvasPage implements OnInit {
  /**Proprietà: 
   *   docCanvas: è il riferimento al template dove inserire il disegno
   *   dataList: è l'array che arriva dal servizio esterno e contiene
   *     i dati da rappresentare nel documento.
   * 
  */
  @ViewChild('docCanvas', {static: true}) docCanvas!: ElementRef;
  dataList: Vendita[] = this.list.reportVendite;
  


  constructor(
    private list: FakeSellsService
  ) { }
  
  ngOnInit() {
    //const ctx = this.docCanvas.nativeElement.getContext('2d');
    //ctx.fillStyle = '#ff0000'
    // for (let i in this.dataList){
    //   //console.log(this.dataList[i]);
    //   let Obj: Vendita = this.dataList[i];
    //   let k: keyof Vendita; //dichiaro la variabile come chiave dell'oggetto
    //   for (k in Obj){ 
    //     //essendo k una chiave dello stesso tipo di oggetto si può usare per il ciclo
    //     console.log(k, Obj[k])
    //   }
    // }
    //this.intestazioneTabella();
    // this.generaCanvas();
    //this.htmlPDF('preview-table');
    this.autoTabPDF();
  }

  intestazioneTabella(){
    /**Genera il context e inserisce nel canvas del testo per l'intestazione
     * tabella.
     * Si appoggia all'elemento con reference 'docCanvas' dichiarato come
     * View child.
     * ### TO DO ###
     * sistemare allineamenti carattere e creare la griglia
     */
    const ctx = this.docCanvas.nativeElement.getContext('2d');
    ctx.fillStyle = '#080808'; //colore del testo
    //ctx.scale(1,1);
    ctx.font = 'small-caps bold 24px/1 sans-serif';
    const colsNames = this.getKeys();
    let distX: number = 0;
    colsNames.forEach(name => {
      console.log(name);
      ctx.fillText(name, distX, 25);
      distX += 120;
    });
  }

  contenutoTabella(){
    const ctx = this.docCanvas.nativeElement.getContext('2d');
    ctx.font = 'small-caps bold 14px/1 sans-serif'
    let k: keyof Vendita;

  }

  getKeys(){
    return Object.keys(this.dataList[0]);
  }

  dataVendita(idVendita: number): string{
    let match = false;
    let i = 0;
    let d = new Date();
    while( i < this.dataList.length && !match){
      if (this.dataList[i].id == idVendita){
        match = true;
        d = this.dataList[i].data;
      } else {
        i++;
      }
    }
    return d.toLocaleDateString();
  }

  generaCanvas(){
    const preview = document.getElementById('preview-table')!;
    html2canvas(preview).then(function(canvas){
      console.log(canvas);
      document.getElementById('doc-canvas')!.append(canvas)
    })
    .catch(err => console.log(err))
  }

  canvasPDF(){
    /**prende il primo canvas che trova nella pagina,
     * quindi lo trasforma in immagine codificata come URL
     * poi lo passa all'oggetto di jsPDF per esportare un pdf.
     */
    let myPdf = new jsPDF('p', 'mm', 'a4');
    let image = document.getElementsByTagName('canvas')[0].toDataURL('img/jpeg', 1);
    console.log(image);
    myPdf.addImage(image, 'jpeg', 0, 0, 100,100);
    myPdf.save("test.pdf");
  }

  htmlPDF(idElement: string){
    /**Genera il pdf del elemento con id passato come parametro
     * Arg:
     *  idElement: stringa con l'id dell'elemento da esportare
     *  Se l'id non viene trovato nella pagina, viene preso l'intero body
     */
    let myPdf = new jsPDF({
      orientation: 'portrait',

    });
    let target = document.getElementById(idElement);
    if(target == null) target = document.body;
    
    myPdf.save("methodTable.pdf");

    myPdf.html(target, {
      callback: pdf => {
        console.log('pdf object ',pdf);
        pdf.save('fromHTML.pdf');
      }
    })
  }


  tablePDF(){
    const doc = new jsPDF();
    doc.table(5, 5,
      [
        {
          'id': this.dataList[0].id.toString(),
          'nome': this.dataList[0].nome,
          'prodotto': this.dataList[0].prodotto,
          'prezzo': this.dataList[0].prezzo.toString(),
          'data': this.dataVendita(this.dataList[0].id)
        },
      ],
      this.getKeys(),
      {
        autoSize: true,
        fontSize: 14
        
      }
    );

  }

  autoTabPDF(){
    const doc = new jsPDF(); //default portrait a4

    //trasforma array di oggetti in array di array:
    let contentBody = this.dataList.map(e => {
      return Object.values(e)
    });

    autoTable(doc, {
      head: [ this.getKeys() ],
      body: [ ...contentBody ],
      styles: {
        //TODO capire come modificare stili e dimensioni table
      }
    });

    //doc.autoPrint();
    //doc.save("autoTable.pdf");
    console.log(doc.output(), doc.output().length);
  }
}
