import { Component } from '@angular/core';
import { Tweet } from './models/Tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'twitter';
  color:string = '';

  constructor() { }
}
