import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/comment.mode';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
})
export class CommentListComponent {
  @Input({ required: true }) data!: Comment[];
}
