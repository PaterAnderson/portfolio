import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent {
  cards = [
    {
      text: "I want to recognize my colleague in the frontend team for their outstanding contributions. Their eye for design and coding skills consistently elevate our projects.",
      name: "A. Fischer - Team Partner"
    },
    {
      text: "They have a fantastic ability to create user-friendly interfaces that impress both clients and users alike.",
      name: "B. Müller - Team Partner"
    },
    {
      text: "Furthermore, they are always willing to lend a helping hand to teammates, fostering a great collaborative atmosphere.",
      name: "C. Schneider - Team Partner"
    },
  ];

  currentIndex = 0; 
  isMoving = false; 

  get displayedCards() {
    const cardCount = this.cards.length;
    const indices = [
        (this.currentIndex - 2 + cardCount) % cardCount, // 2 vor
        (this.currentIndex - 1 + cardCount) % cardCount, // 1 vor
        this.currentIndex,                                 // Aktuelle Karte
        (this.currentIndex + 1) % cardCount,             // 1 nach
        (this.currentIndex + 2) % cardCount              // 2 nach
    ];
    
    return indices.map(i => this.cards[i]);
}

  nextCard() {
    if (!this.isMoving) {
      this.isMoving = true; 
      setTimeout(() => {
        this.currentIndex = (this.currentIndex + 1) % this.cards.length; 
        this.isMoving = false; 
      }, 1000); 
    }
  }

  previousCard() {
    if (!this.isMoving) {
      this.isMoving = true; 
      setTimeout(() => {
        this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length; 
        this.isMoving = false; 
      }, 1000); 
    }
  }
}