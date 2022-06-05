import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/Tweet';
import { TweetService } from 'src/app/services/tweet.service';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.scss']
})
export class AddTweetComponent implements OnInit {

  title!: string;
  text!: string;

  constructor(private tweetService: TweetService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.tweetService.save(new Tweet(this.title, this.text));
    this.title = "";
    this.text = "";
  }

}
