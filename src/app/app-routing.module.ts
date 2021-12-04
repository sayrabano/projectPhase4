import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { HomeComponent } from './pages/home/home.component';
import { ManageFoodItemsComponent } from './pages/manage-food-items/manage-food-items.component';

import { SearchfoodComponent } from './pages/searchfood/searchfood.component';


const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'searchfood',component:SearchfoodComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'dashboard',component:AdminDashboardComponent},
  {path:'manage',component:ManageFoodItemsComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  


  exports: [RouterModule]
})
export class AppRoutingModule { }
