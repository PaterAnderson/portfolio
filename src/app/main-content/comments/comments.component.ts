import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  currentCommentIndex: number = 0;
  animationClass: string = '';

  comments = [
    {
      text: $localize`:@@comment one:I greatly enjoyed working with Tom! He was always professional in his interactions with team members and in his work. I highly appreciated his dedication to contributing both to the team and to the tasks at hand. With his skills, he played a key role in advancing the project and solving the technical challenges.`,
      name: "S. Hilgert",
      status: $localize`:@@Team Partner:Team Partner`
    },
    {
      text: $localize`:@@comment two:I thoroughly enjoyed working with Tom. His professionalism and dedication to the team were evident at all times. Tom's design skills significantly contributed to the success of the project and helped overcome key challenges.`,
      name: "A. Ivkin",
      status: $localize`:@@Team Partner:Team Partner`
    },
    {
      text: $localize`:@@comment three:Working with Tom has been a great experience. His logical thinking and ability to solve problems are outstanding. He always has an alternative solution in mind, which has been invaluable in overcoming challenges throughout the project.`,
      name: "C. Wildhagen",
      status: $localize`:@@Team Partner:Team Partner`
    }
  ];

  /**
   * Initializes the component by setting the initial animation class to 'scale-y'.
   */
  ngOnInit() {
    this.animationClass = 'scale-y';
  }

  /**
   * Toggles the current comment in a specified direction ('next' or 'prev').
   * Sets the animation class for the transition and updates the current comment index accordingly.
   * 
   * @param {string} direction - The direction to toggle the comment. Can be 'next' or 'prev'.
   */
  toggleComment(direction: string): void {
    this.animationClass = '';

    setTimeout(() => {
      this.animationClass = direction === 'next' ? 'move-left' : 'move-right';

      if (direction === 'prev') {
        this.currentCommentIndex =
          this.currentCommentIndex > 0
            ? this.currentCommentIndex - 1
            : this.comments.length - 1;
      } else {
        this.currentCommentIndex =
          this.currentCommentIndex < this.comments.length - 1
            ? this.currentCommentIndex + 1
            : 0;
      }
      setTimeout(() => {
        this.animationClass = 'scale-y';
      }, 400);
    }, 50);
  }

  /**
   * Returns the currently selected comment.
   * 
   * @returns {CommentType} The current comment.
   */
  get currentComment() {
    return this.comments[this.currentCommentIndex];
  }

  /**
   * Returns the last comment relative to the current comment.
   * 
   * @returns {CommentType} The last comment.
   */
  get lastComment() {
    const lastIndex = this.currentCommentIndex === 0 ? this.comments.length - 1 : this.currentCommentIndex - 1;
    return this.comments[lastIndex];
  }

  /**
   * Returns the next comment relative to the current comment.
   * 
   * @returns {CommentType} The next comment.
   */
  get nextComment() {
    const nextIndex = this.currentCommentIndex === this.comments.length - 1 ? 0 : this.currentCommentIndex + 1;
    return this.comments[nextIndex];
  }
}