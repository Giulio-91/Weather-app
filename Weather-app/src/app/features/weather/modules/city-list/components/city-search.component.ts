import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'city-search',
  template: `
  <div class="row">
  <div class="col-sm-6 offset-sm-3">
    <div class="input-group mb-3 mt-5">
      <input
        type="text"
        class="form-control"
        placeholder="Type a city"
        aria-describedby="btn-search"
        [(ngModel)]="searchedCity"
      />
      <div class="input-group-append">
        <button
          id="btn-search"
          type="button"
          class="btn btn-outline-info"
          (click)="onCitySearch()"
        >CERCA</button>
      </div>
    </div>
  </div>
</div>
  `,
  styles: []
})
export class CitySearchComponent implements OnInit {

  searchedCity: string;
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.searchedCity = '';
  }

  onCitySearch() {
    this.search.emit( this.searchedCity );
  }

}
