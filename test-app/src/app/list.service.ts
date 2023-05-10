import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {
    list: string[] = [
        "Test1",
        "Test2",
        "Test3"
    ];//inizializzo array vuoto
  
    constructor() {}

    updateList(val: string){
        this.list.push(val);
    }

    emptyList(){
        this.list = [];
    }
}