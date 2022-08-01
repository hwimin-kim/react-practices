import React from 'react';
import cards from './assets/json/data.json';
import CardList from './CardList';
import styles from './assets/scss/KanbanBoard.scss';

function KanbanBoard() {
  return (
    <div className={styles.KanbanBoard}>
      <CardList title={'To Do'} cards={cards.filter((card) =>card.status === 'ToDo')} />
      <CardList title={'Doing'} cards={cards.filter((card) =>card.status === 'Doing')} />
      <CardList title={'Done'} cards={cards.filter((card) =>card.status === 'Done')} />
    </div>
  );
}

export default KanbanBoard;

// 처음엔 카드만
// -> 눌렀을때 task 가져요기

// react add-one 쓰기