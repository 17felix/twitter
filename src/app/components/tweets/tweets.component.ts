import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/Tweet';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  tweets: Tweet[] = [];

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
    this.tweets = this.tweetService.getAll();
  }

  onDeleteClick(id: number) {
    this.tweetService.delete(id);
  }

}
