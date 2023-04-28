import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuBarComponent } from './common/menu-bar/menu-bar.component';
import { ProductComponent } from './pages/product/product.component';
import { ProductBoxComponent } from './pages/product/product-box/product-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ProductFilterPipe } from './pipes/product-filter.pipe';
import { TypeFilterPipe } from './pipes/type-filter.pipe';
import { ComplaintComponent } from './pages/complaint/complaint.component';
import { FilterPipe } from './pipes/filter.pipe';
import { DetailsComponent } from './pages/product/details/details.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewfilterPipe } from './pipes/reviewfilter.pipe';







@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    ProductComponent,
    ProductBoxComponent,
    ProductFilterPipe,
    TypeFilterPipe,
    ComplaintComponent,
    FilterPipe,
    DetailsComponent,
    ReviewsComponent,
    ReviewfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
