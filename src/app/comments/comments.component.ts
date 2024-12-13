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
      text: "Ich möchte meinen Kollegen im Frontend-Team für ihre herausragenden Beiträge anerkennen. Ihr Gespür für Design und Codierungsfähigkeiten steigert ständig unsere Projekte.",
      name: "A. Fischer",
      status: "Team Partner"
    },
    {
      text: "Sie haben eine fantastische Fähigkeit, benutzerfreundliche Oberflächen zu erstellen, die sowohl Kunden als auch Benutzer beeindrucken.",
      name: "B. Müller",
      status: "Team Partner"
    },
    {
      text: "Darüber hinaus sind sie immer bereit, den Teamkollegen zu helfen und schaffen so eine tolle kollaborative Atmosphäre.",
      name: "C. Schneider",
      status: "Team Partner"
    }
  ];

  ngOnInit() {
    this.animationClass = 'scale-y';
  }

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

  get currentComment() {
    return this.comments[this.currentCommentIndex];
  }

  get lastComment() {
    const lastIndex = this.currentCommentIndex === 0 ? this.comments.length - 1 : this.currentCommentIndex - 1;
    return this.comments[lastIndex];
  }

  get nextComment() {
    const nextIndex = this.currentCommentIndex === this.comments.length - 1 ? 0 : this.currentCommentIndex + 1;
    return this.comments[nextIndex];
  }
}