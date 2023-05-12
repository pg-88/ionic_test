import { Component, OnInit } from '@angular/core';
import { MeteoService, WeatherForecast } from '../meteo.service';
import { GeneraPdfService } from '../genera-pdf.service';
import { RowInput } from 'jspdf-autotable';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  previsioni5g!: WeatherForecast[];

  constructor(
    private meteo: MeteoService,
    private pdf: GeneraPdfService
    ){};

  ngOnInit() {
  }

  async cheTempoFa(city: string){
    /**testo la chiamata get*/
    this.meteo.meteo(city);
  }

  async previsioni(city: string){
    const prevArr = await this.meteo.getPrevisioni(city);
    let intestazione = ['Giorno', 'Ora', 'Meteo Previsto', 'Temperatura Percepita'];
    let contenuto = [];
    
    for (let i in prevArr){
      //console.log(`Elemento indice ${i}`,prevArr[i])
      let riga = new Array();
      let date = new Date(prevArr[i].dt_txt);
      riga.push(date.toLocaleDateString());
      riga.push(date.toLocaleTimeString());
      riga.push(prevArr[i].weather[0].description);
      riga.push(Math.round(prevArr[i].main.feels_like - 273.16));
      contenuto.push(riga);
    }
    console.log(contenuto);
    return({
      header: intestazione, 
      body: contenuto
    });
  }

  async generaPDF(){
    /**servizio genera-pdf*/
    console.log('Facciamo un pdf');
    //const tab = {header: ['a','b','c','d'], body:[['a1','b1','c1','d1'],['a2','b2','c2','d2']]};
    const tab = await this.previsioni('Modena');
    let testa = tab.header;
    let corpo = tab.body;
    this.pdf.inserisciTab(testa, corpo);
    this.pdf.doc.save('weather.pdf');
  }
}