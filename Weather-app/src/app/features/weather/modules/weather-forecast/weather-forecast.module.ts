import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherForecastRoutingModule } from './weather-forecast-routing.module';
import { WeatherForecastComponent } from './container/weather-forecast.component';
//
import { FORECAST_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    WeatherForecastRoutingModule
  ],
  providers: [
  ],
  declarations: [
    WeatherForecastComponent,
    ...FORECAST_COMPONENTS
  ]
})
export class WeatherForecastModule { }
