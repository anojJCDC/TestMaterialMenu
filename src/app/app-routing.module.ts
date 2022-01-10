import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import {CustomerListComponent} from './customers/customer-list/customer-list.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';


const routes: Routes = [

  {
    path: 'enrollment', component:EnrollmentComponent
  },
  {
    path:'customers',
    component: CustomerListComponent
    //loadChildren: () => import('./customers/customers.module').then(mod => mod.CustomersModule)
  },
  {
    path:'orders',
    //component: OrdersModule,
    loadChildren: () => import('./orders/orders.module').then(mod => mod.OrdersModule)
  },
  {
    path:'messages',
    //component: MessagesModule
    loadChildren: () => import('./messages/messages.module').then(mod => mod.MessagesModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
