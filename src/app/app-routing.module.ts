import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCompComponent } from 'src/app/main-comp/main-comp.component';
import { ProductsListComponent } from 'src/app/products-list/products-list.component';
import { ProductComponent } from 'src/app/products-list/product/product.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: MainCompComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:id', component: ProductComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
