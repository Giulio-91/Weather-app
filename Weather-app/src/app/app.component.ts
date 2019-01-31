import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#"><strong>Weather</strong></a>
      <button class="navbar-toggler"
        type="button" data-toggle="collapse"
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item"
              [routerLink]="['dashboard']"
              routerLinkActive="active">
            <a class="nav-link">Dashboard</a>
          </li>
          <li class="nav-item"
              [routerLink]="['cities']"
              routerLinkActive="active">
            <a class="nav-link">City list</a>
          </li>
          <li class="nav-item"
              [routerLink]="['forecast']"
              routerLinkActive="active">
            <a class="nav-link">Weather forecast</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="back-image">
      <div class="container app-body">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .back-image{
      height: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../assets/images/home-background.jpg");
    }
    .app-body{
      padding: 20px;
    }
  `]
})
export class AppComponent {
  //
}
