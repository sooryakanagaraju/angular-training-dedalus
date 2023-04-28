import { Component,Input } from '@angular/core';
import { ProductReviewService } from '../services/product-review.service';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  @Input() prod:string | undefined;
  reviewForm:any;
// types:string[]=["Branding and Communication","Inbound & Content Marketing","Film & Webinar","Digital Marketing","ECommerce & Websites",
// "Market Analysis"]
       constructor(private fb:FormBuilder,private fs:ProductReviewService){
       this.reviewForm = this.fb.group({
          name:['',[Validators.required,Validators.minLength(3)]],
          message:['',[Validators.required,Validators.minLength(15)]],
          email:['',[Validators.required, Validators.pattern(
            "^[A-Za-z][A-Za-z_\.0-9]+@[A-Za-z]+[\.][A-Za-z]{2,5}$")]],

          // type:['Branding and Communication']
        });
       }

       saveReview(product:any){


        var temp:any={
          id: Math.round(Math.random()*10000),
          name: this.reviewForm.value.name,
          email: this.reviewForm.value.email,
          message:this.reviewForm.value.message,
          product:product

        }
        this.fs.postReview(temp).subscribe(
         { 
          next: data=>{
            alert('Your Review is saved')
            location.reload();
          },
          error:(error)=>alert('Not saved ---some Error')
        }

        )

      }
}
