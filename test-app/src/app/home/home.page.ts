import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //proprietà della classe:
  @ViewChild('testCanvas',{static: true}) testCanvas!: ElementRef;
  //NB tutte le property vanno inizializzate!
  ctx!: CanvasRenderingContext2D;
  
  //bisogna inserire il parametro router nel costruttore 
  constructor(
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.ctx = this.testCanvas.nativeElement.getContext('2d');
    this.ctx.scale(3, 3);
    this.ctx.fillStyle = "#aa0099"; // text color
    this.ctx.font = "20 pt Verdena";

    //test dei metodi:
    this.addText("Hello World!");
  }

  addText(txt: string){
    this.ctx.fillText(txt, 10, 10);
    this.ctx.scale(2,2);
    this.ctx.fillText("Test", 50, 50);
  }

  //qui router viene riassegnato
  toDo(){
    this.router.navigate(['/to-do']);
    console.log("cliccato TO DO LIST")
  }

  vendita(){
    this.router.navigate(['/inserimento-vendite'])
  }


}