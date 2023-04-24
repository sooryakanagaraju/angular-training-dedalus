import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
productlist:any;
types=[
"All",
"Electronics",
"Cosmetics",
"Groceries",
"Books",
"Accessories"
]
selected: string ="All";
constructor(private ps:ProductService){
  this.ps.getProduct().subscribe({
    next:(data:any)=>this.productlist=data,
    error:()=>this.productlist=[]
  })
} 

minvalue:number=200;
maxvalue:number=20000


}

