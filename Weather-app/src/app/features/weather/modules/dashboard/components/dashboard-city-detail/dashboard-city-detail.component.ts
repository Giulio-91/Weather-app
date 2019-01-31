import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { CityWeather } from '../../../../model/city-weather.interface';

@Component({
  selector: 'dashboard-city-detail',
  template: `
  <div class="dashboard-city">
    <div class="dashboard-city-refresh" (click)="refresh()">
      <fa-icon [icon]="faSyncAlt"></fa-icon>
    </div>
    <div class="row">
      <div class="col-2">
        <strong>{{weatherData.city}}</strong>
      </div>
      <div class="col-6 text-center">
        {{weatherData.description}}
      </div>
    </div>
    <div class="row">
      <div class="col-2">
      <img [src]="weatherData.icon"/>
      </div>
      <div class="col-9 offset-1 row" style="padding: 10px;">
          <div class="col-6">
            <strong>Min:</strong> {{weatherData.temp_min}}°
          </div>
          <div class="col-6">
            <strong>Humidity:</strong> {{weatherData.humidity}} %
          </div>
          <div class="col-6">
            <strong>Max:</strong> {{weatherData.temp_max}}°
          </div>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <strong>Sunrise:</strong> {{weatherData.sunrise | date:'shortTime'}}
      </div>
      <div class="col-6">
        <strong>Sunset:</strong> {{weatherData.sunset | date:'shortTime'}}
      </div>
    </div>
  </div>
  `,
  styles: [
    `.dashboard-city{
      position: relative;
      margin: 20px;
      width: 100%;
      border-radius: 10px;
      padding: 20px;
      background-color: white;
      -webkit-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.75);
      -moz-box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.75);
      box-shadow: 10px 10px 40px 0px rgba(0,0,0,0.75);
    }
    .dashboard-city-refresh{
      position: absolute;
      cursor: pointer;
      top: 10px;
      right: 15px;
      font-size: 20px;
    }`
  ]
})
export class DashboardCityDetailComponent implements OnInit {

  @Input() weatherData: CityWeather;
  @Output() refreshWeather: EventEmitter<any> = new EventEmitter();

  faSyncAlt = faSyncAlt;

  constructor() { }

  ngOnInit() {
  }
  //
  refresh() {
    this.refreshWeather.emit();
  }
}
