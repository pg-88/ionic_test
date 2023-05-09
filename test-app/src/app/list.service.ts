import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
    list: string[] = [];//inizializzo array vuoto
  
    constructor() {}

    updateList(val: string){
        this.list.push(val);
    }

    emptyList(){
        this.list = [];
    }
}