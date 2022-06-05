import { Injectable } from '@angular/core';
import { Comment } from '../models/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  comments: Comment[] = [];

  constructor() { }

  getAll(): Comment[] {
    return this.comments;
  }
  // !can be err
  getAllByTweetId(tweetId: number): Comment[] {
    let result = this.comments.filter(value => value.tweet.id === tweetId);
    result.forEach((value, index, array) =>
      console.log(index + ":" + value)
    );   ///here
    return result;
  }

  save(comment: Comment) {
    this.comments.push(comment);
  }
}
