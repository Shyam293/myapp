import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {AddressComponent} from './address/address.component'
import {AboutComponent} from './about/about.component'

const routes: Routes = [
  {path : "home", component: HomeComponent },
  {path : "about", component: AboutComponent },
  {path : "address", component: AddressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
