import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
 
  public email:string='';
  public password:string='';

  constructor( private route :Router) { 
    
  }

  ngOnInit(): void {
    
  }
  adminLogin(){
    if((this.email=="admin@gmail.com" && this.password=="admin") && (this.email!=null && this.password!=null)){
      console.log("You are logged in successfully !!");
      this.route.navigate(['/dashboard']);
  
    }
    else{
      console.log("User unauthorized !Try again ||");
      window.alert("Invalid Credential try again !!");
    }
  }

  
}


