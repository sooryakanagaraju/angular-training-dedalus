import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './pages/product/product.component';
import { ProductBoxComponent } from './pages/product/product-box/product-box.component';
import { ComplaintComponent } from './pages/complaint/complaint.component';



const routes: Routes = [
  {path: "reachus", component:ProductBoxComponent},
  {path:"product", component:ProductComponent},
  {path:"Complaint",component:ComplaintComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


