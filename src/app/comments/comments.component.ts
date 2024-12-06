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
    const totalCards = this.cards.length;
    const cardsToShow = Math.min(3, totalCards);
    const displayedCards = [];

    for (let i = 0; i < cardsToShow; i++) {
      const index = (this.currentIndex + i) % totalCards;
      displayedCards.push(this.cards[index]);
    }

    return displayedCards;
  }

  nextCard() {
    this.isMoving = true; // Start der Bewegung
    setTimeout(() => {
      this.currentIndex = (this.currentIndex + 1) % this.cards.length;
      this.isMoving = false; // Beenden der Bewegung
    }, 500); // Die Dauer der Animation, sollte mit dem CSS übereinstimmen
  }

  previousCard() {
    this.isMoving = true; // Start der Bewegung
    setTimeout(() => {
      this.currentIndex = (this.currentIndex - 1 + this.cards.length) % this.cards.length;
      this.isMoving = false; // Beenden der Bewegung
    }, 500); // Die Dauer der Animation
  }
}