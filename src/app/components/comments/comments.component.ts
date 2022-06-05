import { Component, Input, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/Tweet';
import { User } from 'src/app/models/User';
import { Comment } from 'src/app/models/Comment';
import { AuthService } from 'src/app/services/auth.service';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() _tweetId: number = -1;
<<<<<<< HEAD

  comments: Comment[] = [];

  commentText: any

  constructor(private commentService: CommentService,private authService: AuthService) {
  }

  ngOnInit(): void {
    this.comments = this.commentService.getAllByTweetId(this._tweetId);
=======
  comments: Comment[] = [];
  commentText: any;

  constructor(private commentService: CommentService, private  authService: AuthService) { }

  ngOnInit(): void {
    this.comments = this.commentService.getAllByTweetId(this._tweetId)
>>>>>>> cc5d67e146781ccb148405f3f300e15ce90e8c6e
  }

  onSubmit(): void {
    let user: User = this.authService.getUser();
    let comment: Comment = new Comment(
      this.commentText, 
      new Tweet("", "",this._tweetId), 
      user
    );
    this.commentService.save(comment);
    this.comments = this.commentService.getAllByTweetId(this._tweetId);
    console.log(this.comments);

    this.commentText = "";
  }

}
