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

  // addTweet(tweet: Tweet) {
  //   this.tweets.unshift(tweet);
  // }

  // onDelete(id: number) {
  //   console.log(this.tweets);
  //   this.tweets.splice(id, 1);
  // }

}
