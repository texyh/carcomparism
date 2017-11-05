import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import {Car} from '../model/car.model';
import {CarComparismService} from '../service/carComparism.service';
import {CarComparismResult} from '../model/carComparismResult.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  results: CarComparismResult[];


  ngOnInit(): void {
    let service = new CarComparismService();
    this.results = service.GetCars();
  }

}
