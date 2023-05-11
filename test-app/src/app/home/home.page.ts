import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  //bisogna inserire il parametro router nel costruttore 
  constructor(
    private router: Router,
    ) {}

  ngOnInit(): void {
    
  }
  //qui router viene riassegnato
  canvas(){
    this.router.navigate(['/doc-canvas']);
  }


}