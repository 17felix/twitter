import { Tweet } from "./Tweet";
import { User } from "./User";

export class Comment {
  private readonly _id: number;
  private _text: string;
  private _date: Date;
  private _tweet: Tweet;
  private _user: User;

  constructor(text: string, tweet: Tweet, user: User) {
    this._id = Date.now();
    this._text = text;
    this._tweet = tweet;
    this._user = user;
    this._date = new Date();
  }

  get text(): string {
    return this._text;
  }

  set text(value: string) {
    this._text = value;
  }

  get date(): Date {
    return this._date;
  }

  set date(value: Date) {
    this._date = value;
  }

  get tweet(): Tweet {
    return this._tweet;
  }

  set tweet(value: Tweet) {
    this._tweet = value;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }
}
