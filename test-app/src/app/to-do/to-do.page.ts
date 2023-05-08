import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})

export class ToDoPage implements OnInit {

  constructor(public service: ListService) {}
  //utilizzo un servizio per gstire la lista


  ngOnInit() {
    //tutto quello che succede all'avvio della pagina

  }

  updateLst(ev: any){
    console.log(typeof(ev.target.value));
    if (typeof(ev.target.value) == 'string'){
      console.log(ev);
      this.service.list.push(ev.target.value);
      ev.target.value = '';
    }
  }

  resetList(){
    this.service.emptyList()
  }

  markDone(e: any){
    console.log(e.srcElement.innerText)

    if (e.currentTarget.value == 'on'){
        e.srcElement.innerText=e.srcElement.innerText.concat("-----Fatto")
    }
  }
}