import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CityWeather } from '../../../model/city-weather.interface';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'details-card',
  template: `
    <div class="card shadow" style="width: 18rem;">

      <img [src]="city.icon"/>

      <div class="card-body">
        <h5 class="card-title">{{city.city}}</h5>
        <p class="card-text">Temp: {{city.temp}}° C</p>
        <p class="card-text"></p>
        <p class="card-text"></p>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-danger" (click)="onRemoveCity(city)">X</button>
          <button type="button" class="btn btn-primary" (click)="onCheckForecast(city)">Check Forecast</button>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DetailsCardComponent implements OnInit {

  @Input() city: CityWeather;

  @Output() removeCity: EventEmitter<CityWeather> = new EventEmitter<CityWeather>();
  @Output() goForecast: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  onCheckForecast(city: CityWeather) {
    this.goForecast.emit( city.city );
  }

  onRemoveCity(city: CityWeather) {
    this.removeCity.emit(city);
  }
}
