import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/comment.mode';

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
  styleUrls: ['./comment-item.component.css'],
})
export class CommentItemComponent {
  @Input({ required: true }) comment!: Comment;
  activeState: any = {};

  onToggleChild(id: string) {
    this.activeState[id]
      ? (this.activeState[id] = false)
      : (this.activeState[id] = true);
  }
}
