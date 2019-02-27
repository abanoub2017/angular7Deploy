import { MainServerService } from './servers/main-server.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { ValidationComponent } from './components/validation/validation.component';
import { HttpComponent } from './components/http/http.component';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AdminOrderComponent } from './components/admin/admin-order/admin-order.component';
import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { OrderComponent } from './components/order/order.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TodolistComponent,
    ValidationComponent,
    HttpComponent,
    HeaderComponent,
    AdminOrderComponent,
    AdminProfileComponent,
    OrderComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule



  ],
  providers: [MainServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
