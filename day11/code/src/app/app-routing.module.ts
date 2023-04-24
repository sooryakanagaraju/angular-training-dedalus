import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductBoxComponent } from './pages/product/product-box/product-box.component';


const routes: Routes = [
  {path: "reachus", component:ProductBoxComponent},
  {path:"testimonials", component:ProductComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


