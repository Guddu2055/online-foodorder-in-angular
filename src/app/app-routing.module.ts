import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailPageComponent } from './detail-page/detail-page.component';

import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
   {path:'detail/:id',component:DetailPageComponent},
  {path:'itemdetail',component:ItemDetailComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
