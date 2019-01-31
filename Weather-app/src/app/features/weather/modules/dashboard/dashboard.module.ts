import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './container/dashboard.component';
import { DASHBOARD_COMPONENTS } from './components';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    DashboardComponent,
    ...DASHBOARD_COMPONENTS
  ]
})
export class DashboardModule { }
