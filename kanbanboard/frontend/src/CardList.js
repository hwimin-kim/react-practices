import React from 'react';
import Card from './Card.js';
import styles from './assets/scss/CardList.scss';

function CardList({title, cards}) {

  return (
    <div className={styles.CardList}>
      <h1>{title}</h1>
      {cards.map(card => <Card key={card.no} card={card}/>)}
    </div>
  );
}

export default CardList;