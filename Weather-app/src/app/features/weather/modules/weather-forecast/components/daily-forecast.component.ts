import { Component, OnInit, Input } from '@angular/core';
import { ForecastDailyData } from '../model/forecast-data.model';

@Component({
  selector: 'daily-forecast',
  template: `
    <div class="daily-forecast-container">
      <div class="row align-items-center justify-content-center">
        <strong>{{dailyForecast.dt}}</strong>
      </div>
      <div class="row align-items-center justify-content-center">
        <img [src]="dailyForecast.icon"/>
      </div>
      <div class="row align-items-center justify-content-center">
        <div class="col-6 row flex-column">
          <strong>Min:</strong> <span>{{dailyForecast.temp_min}}°</span>
        </div>
        <div class="col-6 row flex-column">
          <strong>Max:</strong> <span>{{dailyForecast.temp_max}}°</span>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .daily-forecast-container{
    border-radius: 10px;
    border: 1px solid #323232;
    margin: 0 5px 0 5px;
    width: 140px;
  }
  `]
})
export class DailyForecastComponent implements OnInit {

  @Input() dailyForecast: ForecastDailyData;
  constructor() { }

  ngOnInit() {
  }

}
