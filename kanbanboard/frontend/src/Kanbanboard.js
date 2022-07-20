import React from 'react';
import cards from './assets/json/data.json';
import CardList from './CardList';


function KanbanBoard() {
  return (
    <div className={'KanbanBoard'}>
      <CardList title={'ToDo'} cards={cards.filter((card) =>card.status === 'ToDo')} />
      <CardList title={'Doing'} cards={cards.filter((card) =>card.status === 'Doing')} />
      <CardList title={'Done'} cards={cards.filter((card) =>card.status === 'Done')} />
    </div>
  );
}

export default KanbanBoard;