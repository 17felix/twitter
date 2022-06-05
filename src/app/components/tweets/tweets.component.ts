import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tweet } from 'src/app/Tweet';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.scss']
})
export class TweetsComponent implements OnInit {

  @Input() tweets: Tweet[] = [];
  @Output() onDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteClick(id: number) {
    this.onDelete.emit(id);
  }

}
