import { Component } from '@angular/core';
import { Tweet } from './Tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'twitter';
  tweets: Tweet[];

  constructor() {
    this.tweets = [
      new Tweet("name", "text"),
      new Tweet("name", "text1"),
      new Tweet("name", "text2"),
      new Tweet("name", "text3"),
    ];
  }

  addPost(tweet: Tweet) {
    this.tweets.push(tweet);
  }

  onDelete(index: number) {
    console.log(this.tweets);
    this.tweets.splice(index, 1);
  }

}
