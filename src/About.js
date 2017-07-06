import React from 'react';

const About = () => (
  <div className="flex flex-wrap">
    <div className="about-text">
      <h2>The Game</h2>
      <p className="about-text-description">
        Each player takes the role of a G8 representative, each representative has a different goal and the first to complete their goal is the winner. The players can gain public favour by spending money on political moves. They can gain money finding resources and creating trade agreements with other players. The individual goals for each player is unknown to the rest, leaving the player balancing the benefits of trade agreements with the negatives of helping the others.
      </p>
    </div>
    <div className="about-text">
      <h2>The Rules</h2>
      <p className="about-text-description">
        Separate the action cards from the money, favour and player cards and then shuffle the actions cards. Each player is dealt $1.5M, a player card and five action cards all faced down. The play starts with the player at the right of the dealer and travels clockwise. Each turn a player can do one of three things, play an action card, throw away an action card or swap an action card with an allied player. Every time a card is played the player must pick up a new one from the deck keeping 5 cards in their hands at all times. The game ends when a player fulfills the goals described on their player cards. This is when they reveal who they are to the other players.
      </p>
    </div>
  </div>
)

export default About;
