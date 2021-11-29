import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchfoodComponent } from './pages/searchfood/searchfood.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import{MatFormFieldModule} from '@angular/material/form-field';
import{MatInputModule} from "@angular/material/input";
import{FormsModule} from "@angular/forms"
const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'searchfood',component:SearchfoodComponent},
  {path:'adminlogin',component:AdminloginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatFormFieldModule,  MatInputModule,  FormsModule],
  


  exports: [RouterModule]
})
export class AppRoutingModule { }
