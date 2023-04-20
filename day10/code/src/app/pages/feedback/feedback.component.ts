import { Component } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';
@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbacklist:any

        constructor(private fs:FeedbackService)  {
           this.fs.getFeedbacks().subscribe(
              {
                  next : (data:any)=> this.feedbacklist =data
              }
           )
        }
}
