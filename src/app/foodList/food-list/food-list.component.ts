import { Component, OnInit } from '@angular/core';
import { ServiceComponent } from 'src/app/service/service.component';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor( private service:ServiceComponent) { }

  ngOnInit(): void {
    this.service.foodList();
  }

}
