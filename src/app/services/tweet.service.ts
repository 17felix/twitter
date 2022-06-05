import { Injectable } from '@angular/core';
import { Tweet } from '../models/Tweet';
import { TweetsModule } from '../modules/tweets/tweets.module';

@Injectable({
  providedIn: TweetsModule
})
export class TweetService {
  tweets: Tweet[] = [
    new Tweet("Breacking news", "lorem ipsum camia var dalores"),
    new Tweet("Boba Biba Bom", "lorem ipsum camia var dalores"),
    new Tweet("$ E Uan", "lorem ipsum camia var dalores"),
    new Tweet("Angular crash", "lorem ipsum camia var dalores"),
  ];

  constructor() { }

  getAll(): Tweet[] {
    return this.tweets;
  }

  save(tweet: Tweet) {
    this.tweets.push(tweet);
  }

  delete(id: number) {
    const index = this.tweets.findIndex(value => value.id === id);

    if(index !== -1) {
      this.tweets.splice(index, 1);
    }
  }
}
