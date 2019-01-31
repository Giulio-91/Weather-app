import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityListComponent } from './container/city-list.component';

const routes: Routes = [{
  path: '',
  component: CityListComponent,
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityListRoutingModule { }
