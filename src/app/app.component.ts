import { Component } from '@angular/core';
import { Tweet } from './Tweet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'twitter';
  color:string = '';
  tweets: Tweet[];

  constructor() {
    this.tweets = [
      new Tweet("Breacking news", "lorem ipsum camia var dalores"),
      new Tweet("Boba Biba Bom", "lorem ipsum camia var dalores"),
      new Tweet("$ E Uan", "lorem ipsum camia var dalores"),
      new Tweet("Angular crash", "lorem ipsum camia var dalores"),
    ];
  }

  addTweet(tweet: Tweet) {
    this.tweets.unshift(tweet);
  }

  onDelete(id: number) {
    console.log(this.tweets);
    this.tweets.splice(id, 1);
  }

}
