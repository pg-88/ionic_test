import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  
  constructor(private meteo: MeteoService) {};

  ngOnInit() {
    this.previsioni();
  }

  async cheTempoFa(city: string){
    /**testo la chiamata get*/
    //this.meteo.getWeather(city);
  }

  async previsioni(){
    /**Chiamata a hourly forecast per la città di Modena*/
    console.log(await this.meteo.previsioni());
  }

}