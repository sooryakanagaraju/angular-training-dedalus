import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { FeedbackComponent } from './pages/feedback/feedback.component';

const routes: Routes = [
  {path: "reachus", component:ContactComponent},
  {path:"testimonials", component:FeedbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
