import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SearchfoodComponent } from './pages/searchfood/searchfood.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
const routes: Routes = [
  {path:'',component:HomeComponent}, 
  {path:'searchfood',component:SearchfoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
