import React from 'react';

const Card = ({ key, card }) => {
  return (
    <div id={key} className="card-item">
      {card && (
        <>
          <div className="card-title-ratings">
            <div> {card.name}</div>
            <div className="card-ratings"> Ratings: {card.rating}/100</div>
          </div>
          <div className="card-duration"> {card.duration} Hrs</div>
        </>
      )}
    </div>
  );
};

export default Card;
