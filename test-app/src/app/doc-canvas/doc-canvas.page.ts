import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FakeSellsService } from '../fake-sells.service';

@Component({
  selector: 'app-doc-canvas',
  templateUrl: './doc-canvas.page.html',
  styleUrls: ['./doc-canvas.page.scss'],
})
export class DocCanvasPage implements OnInit {
  //proprietà:
  @ViewChild('docCanvas', {static: true}) docCanvas!: ElementRef;
  ctx!: CanvasRenderingContext2D;
  ctx1!: CanvasRenderingContext2D;
  

  constructor(
    private list: FakeSellsService
  ) { }

  ngOnInit() {
    this.ctx = this.docCanvas.nativeElement.getContext('2d');
    this.ctx.fillStyle = '#ff0000'
    this.ctx.fillText("Test1", 0, 10);
    this.ctx.fillText("Test1", 0, 10);
  }

}
