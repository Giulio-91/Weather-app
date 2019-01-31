import { Component, OnInit } from '@angular/core';
import { CityWeather } from '../../../model/city-weather.interface';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="row justify-content-center">
      <h3 style="color: white;">{{title}}</h3>
    </div>
    <div class="row justify-content-center" *ngIf="weather">
      <div class="col-10">
        <dashboard-city-detail [weatherData]="weather" (refreshWeather)="onRefreshWeather()"></dashboard-city-detail>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  GEO_NOT_SUPPORTED = 'Geolocation is not supported by this browser';
  GEO_IN_PROGRESS = 'Geolocation in progress...';
  //
  title: string;
  weather: CityWeather;
  //
  constructor(
  ) { }

  ngOnInit() {
    if (navigator.geolocation) {
      this.getCurrentWeather();
    } else {
      this.title = this.GEO_NOT_SUPPORTED;
    }
  }
  //
  getCurrentWeather() {
    this.title = this.GEO_IN_PROGRESS;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.weather = new CityWeather();
        this.weather.city = 'Torino';
        this.weather.id = 104;
        this.weather.humidity = 84;
        this.weather.temp_min = 20;
        this.weather.temp_max = 30;
        this.weather.sunrise = 13245648;
        this.weather.sunset = 13245648;
        this.weather.description = 'Nuvoloso';
        this.weather.icon = 'http://openweathermap.org/img/w/02d.png';
        this.weather.temp = 34;
      }
    );
  }
  //
  onRefreshWeather() {
    console.log(' On refresh ');
  }
}
