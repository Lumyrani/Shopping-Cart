import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { ProductlistComponent } from './productlist/productlist.component';


const routes: Routes = [{ path: '', component: ProductComponent },{ path: 'productentry', component:  ProductentryComponent },{ path: 'productlist', component:  ProductlistComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
