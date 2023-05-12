import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {
  meteoData!: Observable<any>;
  constructor() {

  }

  ngOnInit() {
  }

}