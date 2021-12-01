import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor( private _http:HttpClient) { }

  foodList(){
    console.log("this will work");
  }
  

  ngOnInit(): void {
  }

}
