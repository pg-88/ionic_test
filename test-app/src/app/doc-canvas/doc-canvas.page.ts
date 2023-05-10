import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FakeSellsService, Vendita } from '../fake-sells.service';
import { NumberSymbol } from '@angular/common';

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
  }

  intestazioneTabella(){
    const ctx = this.docCanvas.nativeElement.getContext('2d');
    ctx.fillStyle = '#cc0000';
    ctx.scale(1,1);
    ctx.font = 'small-caps bold 24px/0.8 sans-serif';
    const colsNames = Object.keys(this.dataList[0]);
    let distX: number = 0;
    colsNames.forEach(name => {
      console.log(name);
      ctx.fillText(name, distX, 25);
      distX += 150;
    });
  }

}
