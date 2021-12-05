import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchfoodComponent } from './pages/searchfood/searchfood.component';
import { AdminloginComponent } from './pages/adminlogin/adminlogin.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { ManageFoodItemsComponent } from './pages/manage-food-items/manage-food-items.component';





@NgModule({
  declarations: [
    AppComponent,

    FooterComponent,
    HomeComponent,
    SearchfoodComponent,
    AdminloginComponent,
    AdminDashboardComponent,
    ManageFoodItemsComponent,

    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    
 
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
