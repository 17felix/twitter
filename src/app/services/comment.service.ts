import { Injectable } from '@angular/core';
import { Comment } from '../models/Comment';
import { TweetsModule } from '../modules/tweets/tweets.module';

@Injectable({
  providedIn: TweetsModule
})
export class CommentService {
  comments: Comment[] = [];

  constructor() {
    this.comments = [];
  }

  getAll(): Comment[] {
    return this.comments;
  }

  getAllByTweetId(tweetId: number): Comment[] {
    let result = this.comments.filter(value => value.tweet.id === tweetId);
    result.forEach((value, index, array) => console.log(index + ":" + value))
    console.log(this.comments);
    return result;
  }

  save(comment: Comment) {
    this.comments.push(comment);
  }
  
}
