import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchfoodComponent } from './pages/searchfood/searchfood.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';

import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ServiceComponent } from './service/service.component';
import { FoodComponent } from './pages/food/food.component';
import { FoodListComponent } from './foodList/food-list/food-list.component';


@NgModule({
  declarations: [
    AppComponent,
   NavbarComponent,
    FooterComponent,
    HomeComponent,
    SearchfoodComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    ServiceComponent,
    FoodComponent,
    FoodListComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
