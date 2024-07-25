import { Component } from '@angular/core';
import { comments } from './data';
import { Comment } from './comment.mode';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  commentsData: Comment[] = [...comments];
}
