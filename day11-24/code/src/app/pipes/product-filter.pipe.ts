import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(product:any, minvalue: number, maxvalue:number): any {
    return product.filter((x:any)=>((x.price)>=minvalue && (x.price)<=maxvalue))
  }

}
