import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-helpnote',
  templateUrl: './helpnote.component.html',
  styleUrls: ['./helpnote.component.css']
})
export class HelpnoteComponent {
  @Input() content:string=""
  @Input() description:string=""
}
