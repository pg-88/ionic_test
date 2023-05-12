import { Component, OnInit } from '@angular/core';
import { MeteoService, WeatherForecast } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  previsioni5g!: WeatherForecast[];

  constructor(private meteo: MeteoService) {};

  ngOnInit() {
    //this.previsioni('Modena');
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
      let riga = [];
      let date = new Date(prevArr[i].dt_txt);
      riga.push(date.toLocaleDateString());
      riga.push(date.toLocaleTimeString());
      riga.push(prevArr[i].weather[0].description);
      riga.push(prevArr[i].main.feels_like - 273.16);
      contenuto.push([riga]);
    }
    console.log(contenuto);
    return({
      header: intestazione, 
      body: contenuto
    });
  }
//### TO DO ###
//Impaginare il risultato nel template
//Creare il pdf 'reportMeteo.pdf'
}