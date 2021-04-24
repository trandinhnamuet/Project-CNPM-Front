import { CartComponent } from './cart/cart.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AppComponent } from './app.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full'},
  { path: 'product/:productCode', component: ProductDetailsComponent},
  { path: 'main', component: MainPageComponent},
  { path: 'cart', component: CartComponent}
]


@NgModule({

  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

