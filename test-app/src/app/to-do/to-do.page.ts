import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.page.html',
  styleUrls: ['./to-do.page.scss'],
})

export class ToDoPage implements OnInit {
  list: string[] = ["Attività:"];

  constructor() {}

  ngOnInit() {
  }

  updateLst(ev: any){
    console.log(typeof(ev.target.value))
    if (typeof(ev.target.value) == 'string'){
      console.log(ev);
      this.list.push(ev.target.value)
    }
  }
}
