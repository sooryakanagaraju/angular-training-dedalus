import { Component } from '@angular/core';
import { DialogBodyComponent } from './common/dialogue-form/dialogue-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  constructor(private matDialog:MatDialog){}
  openDialog(){
   this.matDialog.open(DialogBodyComponent,{
    width:'350px',
   })
 }
}