import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TweetsComponent } from './components/tweets/tweets.component';
import { AddTweetComponent } from './components/add-tweet/add-tweet.component';
import { FormsModule } from '@angular/forms';
import { ColorOpacityDirective } from './directives/color-opacity.directive';
import { WhileDirective } from './directives/while.directive';
import { TrackByDirective } from './directives/track-by.directive';
import { CommentsComponent } from './components/comments/comments.component';
import { TweetsModule } from './modules/tweets/tweets.module';

@NgModule({
  declarations: [
    AppComponent,
    TweetsComponent,
    AddTweetComponent,
    ColorOpacityDirective,
    WhileDirective,
    TrackByDirective,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TweetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
