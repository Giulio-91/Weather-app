import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: './features/weather/modules/dashboard/dashboard.module#DashboardModule',
    pathMatch: 'full'
  },
  {
    path: 'cities',
    loadChildren: './features/weather/modules/city-list/city-list.module#CityListModule'
  },
  {
    path: 'forecast',
    loadChildren: './features/weather/modules/weather-forecast/weather-forecast.module#WeatherForecastModule'
  },
  {
    path: '**',
    redirectTo: 'weather',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
