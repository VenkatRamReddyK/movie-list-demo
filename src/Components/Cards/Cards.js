import React, { useState, useEffect } from 'react';
import Card from './Card';

const Cards = ({ cards, searchKey }) => {
  const [filteredCards, setFilteredCards] = useState([]);
  useEffect(() => {
    if (searchKey?.length > 2) {
      setFilteredCards(
        cards.filter(card =>
          card.name.toLowerCase().includes(searchKey.toLowerCase())
        )
      );
    } else {
      setFilteredCards(cards);
    }
  }, [searchKey, cards]);

  return (
    <div className="cards-container">
      {filteredCards &&
        Array.isArray(filteredCards) &&
        filteredCards.map((card, idx) => (
          <>
            <Card key={idx} card={card} />
          </>
        ))}
      {(!filteredCards || !Array.isArray(filteredCards)) && (
        <p>No Cards Available</p>
      )}
    </div>
  );
};

export default Cards;
