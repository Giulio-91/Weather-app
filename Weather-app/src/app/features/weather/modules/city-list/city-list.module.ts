import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CityListRoutingModule } from './city-list-routing.module';
import { CityListComponent } from './container/city-list.component';
import { SelectableCityListComponent } from './components/selectable-city-list.component';
import { DetailsCardComponent } from './components/details-card.component';
import { CitySearchComponent } from './components/city-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CityListRoutingModule,
  ],
  declarations: [CityListComponent, SelectableCityListComponent, DetailsCardComponent, CitySearchComponent]
})
export class CityListModule { }
