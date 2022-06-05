import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { TweetsModule } from '../modules/tweets/tweets.module';

@Injectable({
  providedIn: TweetsModule
})
export class AuthService {
  private _user: User = new User("Tester");

  constructor() { }

  getUser(): User {
    return this._user;
  }
}
