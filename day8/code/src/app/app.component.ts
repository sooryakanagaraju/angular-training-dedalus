import { Component } from '@angular/core';
import { datafields } from './appdata/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'business-app-task';
  services:string[] =datafields.servicelist;
  descriptions:string[]=
  [
    datafields.seo,
    datafields.branding,
    datafields.logo
  ]
  imgs:string[] = datafields.images
  dataitems=datafields;
}
