import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-botton-container',
  templateUrl: './botton-container.component.html',
  styleUrls: ['./botton-container.component.css']
})
export class BottonContainerComponent {
  @Input() title:string=""
  @Input() description:string=""
  @Input() imgtxt:string=""
  @Input() servicelist:string[]=[]
}
