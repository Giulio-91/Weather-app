import { ForecastData } from './../../../../../../../src/app/features/weather/modules/weather-forecast/model/forecast-data.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { ForecastDailyData } from '../model/forecast-data.model';

@Component({
  selector: 'app-weather-forecast',
  template: `
  <div class="row justify-content-center">
    <h3 style="color: white;">{{title}}</h3>
  </div>
  <div class="row justify-content-center" *ngIf="!forecasts">
    <h4 style="color: white;margin-top:20px;">The list of favorite cities is empty</h4>
  </div>
  <div class="row justify-content-center">
    <div class="col-10">
      <city-forecast [forecastData]="forecasts"></city-forecast>
    </div>
  </div>
  `,
  styles: []
})
export class WeatherForecastComponent implements OnInit {
  city: string;
  forecasts: ForecastData;
  title = 'Forecast weather';

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.city = params['city'] || null;
      if (this.city) {
        this.forecasts = new ForecastData();
        this.forecasts.city = this.city;
        this.forecasts.forecast = new Array();
        for (let i = 0; i < 5; i++) {
          const forecastDailyData = new ForecastDailyData();
          forecastDailyData.description = 'Nuvoloso';
          forecastDailyData.temp_min = Math.floor(Math.random() * 20) + 15;
          forecastDailyData.temp_max = Math.floor(Math.random() * 20) + 25;
          forecastDailyData.humidity = Math.floor(Math.random() * 100);
          forecastDailyData.icon = 'http://openweathermap.org/img/w/02d.png';
          forecastDailyData.dt = new Date().toDateString();
          this.forecasts.forecast.push(forecastDailyData);
        }
      }
    });
  }
}
