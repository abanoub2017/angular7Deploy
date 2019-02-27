import { AdminProfileComponent } from './components/admin/admin-profile/admin-profile.component';
import { AdminOrderComponent } from './components/admin/admin-order/admin-order.component';
import { HttpComponent } from './components/http/http.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'todolist', component: TodolistComponent},
  {path: 'http', component: HttpComponent},
  {path: 'admin/order', component: AdminOrderComponent},
  {path: 'admin/profile', component: AdminProfileComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
