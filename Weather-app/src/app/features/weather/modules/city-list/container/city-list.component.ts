import { map } from 'rxjs/operators';
import { CityWeather } from '../../../model/city-weather.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city-list',
  template: `
    <div class="container">

      <city-search (search)="searchCity($event)"></city-search>

      <!-- city list -->
      <hr style="border-color: white">

      <div class="row">
        <div class="col-sm-3 offset-sm-1" >

          <h5 style="color: white">Your city list</h5>
          <selectable-city-list
            [cities]="cities"
            (citySelection)="onCitySelection($event)"
          ></selectable-city-list>

        </div>

        <div class="col-sm-5 offset-sm-1 mt-2" *ngIf="selectedCityWeather">

          <details-card
            [city]="selectedCityWeather"
            (goForecast)="onGoForecast($event)"
            (removeCity)="onRemoveCity($event)"
          ></details-card>

        </div>
      </div>
    </div>
  `,
  styles: [`
    .shadow {
      box-shadow: 5px 5px 20px 0px rgba(0,0,0,0.5);
    }
  `]
})
export class CityListComponent implements OnInit {


  cities: Array<string> = new Array<string>();
  selectedCityWeather: CityWeather;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  searchCity(cityName: string) {
    if (this.cities.indexOf(cityName) < 0) {
      this.cities.push(cityName);
    }
  }

  onCitySelection(selectedCityWeather: string) {
    this.selectedCityWeather = new CityWeather();
    this.selectedCityWeather.city = selectedCityWeather;
    this.selectedCityWeather.id = 104;
    this.selectedCityWeather.humidity = 84;
    this.selectedCityWeather.temp_min = 20;
    this.selectedCityWeather.temp_max = 30;
    this.selectedCityWeather.sunrise = 13245648;
    this.selectedCityWeather.sunset = 13245648;
    this.selectedCityWeather.description = 'Nuvoloso';
    this.selectedCityWeather.icon = 'http://openweathermap.org/img/w/02d.png';
    this.selectedCityWeather.temp = 34;
  }

  onRemoveCity(city: CityWeather) {
    const index = this.cities.indexOf(city.city);
    if (index > -1) {
      this.cities.splice(index, 1);
      this.selectedCityWeather = null;
    }
  }

  onGoForecast(cityName: string) {
    //
    this.router.navigate(['/forecast'], { queryParams: { city: cityName } });
  }

}
