import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FakeSellsService, Vendita } from '../fake-sells.service';
import  html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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
    this.intestazioneTabella();
    this.creaPDF();
    // this.generaCanvas();
  }

  intestazioneTabella(){
    /**Genera il context e inserisce nel canvas del testo per l'intestazione
     * tabella.
     * Si appoggia al Elemento con reference 'docCanvas' dichiarato come
     * View child.
     * ### TO DO ###
     * sistemare allineamenti carattere e creare la griglia
     */
    const ctx = this.docCanvas.nativeElement.getContext('2d');
    ctx.fillStyle = '#cc0000';
    ctx.scale(1,1);
    ctx.font = 'small-caps bold 24px/0.8 sans-serif';
    const colsNames = Object.keys(this.dataList[0]);
    let distX: number = 0;
    colsNames.forEach(name => {
      console.log(name);
      ctx.fillText(name, distX, 25);
      distX += 120;
    });
  }

  getKeys(){
    return Object.keys(this.dataList[0]);
  }

  getData(index: number){
    if(index <= this.dataList.length){
      const localDate = this.dataList[index].data.getDate();
      return localDate;
    } else {
      console.log("Data non presente.");
      return Date();
    }
  }
  generaCanvas(){
    const preview = document.getElementById('preview-table')!;
    html2canvas(preview).then(function(canvas){
      console.log(canvas);
      document.getElementById('doc-canvas')!.append(canvas)
    })
    .catch(err => console.log(err))
  }

  creaPDF(){
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
}
