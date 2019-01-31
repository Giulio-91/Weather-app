import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'selectable-city-list',
  template: `
    <div class="list-group shadow" *ngIf="cities">
      <button
        *ngFor="let city of cities"
        type="button"
        class="list-group-item list-group-item-action"
        (click)="onSelection(city)">
        {{city}}
      </button>
    </div>
  `,
  styles: []
})
export class SelectableCityListComponent implements OnInit {

  @Input() cities: Array<string>;
  @Output() citySelection: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelection(city: string) {
    this.citySelection.emit( city );
  }

}
