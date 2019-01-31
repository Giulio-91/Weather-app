import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherForecastComponent } from './container/weather-forecast.component';

const routes: Routes = [{
  path: '',
  component: WeatherForecastComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherForecastRoutingModule { }
