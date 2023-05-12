import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface WeatherCondition {
  citta: string | undefined,
  meteo: string | undefined,
  temperatura: number | undefined
}

export interface WeatherForecast {
  data: Date,
  meteo: string,
  temperatura: number
}

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  datiMeteo!: WeatherCondition;
  previsioni!: any[];

  constructor() {}

  async meteo(city: string) {
    /**chiama openweathermap e recupera i dati meteo attuali
     * della città passata come parametro. 
     */
    try {
      const response = await 
      fetch(`${environment.datiMeteo}q=${city}&appid=${environment.apiKey}`, 
      {
        method: 'GET',
      });
      const result = await response.json();
      console.log("Success:", result);
      this.datiMeteo = 
      {
        citta: city,
        meteo: result.weather[0].main,
        temperatura: result.main.temp
      } 
    } catch (err) {
      console.error("Error:", err);
    }
  }

  async getPrevisioni(city: string = 'Modena'){
    try{
      const request = 
      await fetch(`${environment.previsioniMeteo}q=${city}&appid=${environment.apiKey}`,
      {
        method: 'GET'
      });

      const result = await request.json();
      //console.log(result);
      return result.list;
    } catch (err) {
      console.error("Qualcosa è andato storto", err);
    }
  }

}
