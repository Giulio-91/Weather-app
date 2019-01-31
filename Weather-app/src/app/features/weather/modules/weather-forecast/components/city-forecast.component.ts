import { ForecastData } from '../model/forecast-data.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'city-forecast',
  template: `
    <div class="city-forecast-container">
      <div class="row">
        <div class="col-2">
          <strong>{{forecastData.city}}</strong>
        </div>
      </div>
      <div class="row">
        <div class="col-2">
        <img [src]="forecastData.forecast[0].icon"/>
        </div>
        <div class="col-9 offset-1 row align-items-center" style="padding: 10px;">
            <div class="col-4">
              <strong>Min:</strong> {{forecastData.forecast[0].temp_min}}°
            </div>
            <div class="col-4">
              <strong>Max:</strong> {{forecastData.forecast[0].temp_max}}°
            </div>
            <div class="col-4">
              <strong>Humidity:</strong> {{forecastData.forecast[0].humidity}} %
            </div>
        </div>
      </div>
      <div class="row justify-content-around">
        <div *ngFor="let daily of forecastData.forecast">
          <daily-forecast [dailyForecast]="daily"></daily-forecast>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .city-forecast-container{
      position: relative;
      margin: 10px;
      width: 100%;
      border-radius: 10px;
      padding: 20px;
      background-color: white;
      -webkit-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.75);
    }
  `]
})
export class CityForecastComponent implements OnInit {

  @Input() forecastData: ForecastData;

  constructor() { }

  ngOnInit() {
  }

}
