import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //bisogna inserire il parametro router nel costruttore 
  constructor(private router: Router) {}

  test(){
    console.log("cliccato");
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