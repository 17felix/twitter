import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tweet } from 'src/app/Tweet';

@Component({
  selector: 'app-add-tweet',
  templateUrl: './add-tweet.component.html',
  styleUrls: ['./add-tweet.component.scss']
})
export class AddTweetComponent implements OnInit {

  title!: string;
  text!: string;

  @Output() newPostEvent = new EventEmitter<Tweet>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.newPostEvent.emit(new Tweet(this.title, this.text));
    this.title = "";
    this.text = "";
  }

}
