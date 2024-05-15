/*

Phase 2 -> Controlled Components
Sakib Rasul | Created January 31, 2024

Core Deliverables
1. Write a function `randomize` that generates a random card string, e.g. "6 of Clubs".
2. Call `randomize` when `Nah.` is clicked in `Card`.
3. Display the current card string in `Card`.
4. (Bonus) Make the card's border "solid red" when the current suit is diamond or hearts
           and "solid black" when the current suit is clubs or spades.

*/

// To make `Card` a child of `App`, we need to import it (and render it) inside `App`.
import Card from "./Card";
import { useState } from "react";

export default function App() {
  // 1. Make a state that manages the current card
  const [ card, setCard ] = useState("Ace of Spades")
  // 2. Make arrays of suites and rank
    const suits = ['Spades', 'Hearts', 'Clubs', 'Diamonds'];
    const ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
  // 3. Make a function that randomly chooses from the arrays to change the card state
  const randomizeCard = () => {
    // a. Construct a new card
    const randomRank = ranks[Math.floor(Math.random() * ranks.length)];
    // a.ii. Get a random suite
    const randomSuit = suits[Math.floor(Math.random() * ranks.length)];
    // a.iii. Interpolate string
    const randomCard = `${randomRank} of ${randomSuit}`;
    // b. Call setCard with that new card
    setCard(randomCard);
  }
  // 4. [Inside Card] Add a click event listener to the button that triggers the function
  // 5. [Inside Card] Replace the static card text with the state value
  return (
    <div style={{ minHeight: "100vh",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center" }}>
      <h1>Is This Your Card?</h1>
      <Card card={card} randomize={randomizeCard} />
      <footer>&copy; 2023 Sakib Rasul</footer>
    </div>
  );
}