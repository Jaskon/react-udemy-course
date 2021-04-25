import CustomCheckbox from '../CustomCheckbox/CustomCheckbox';
import Card from '../Card';
import { useState } from 'react';


function CardList({ cards, onListEdit }) {

  const [readOnlyState, setReadOnlyState] = useState(false);


  const cardsRendered = cards.map(card =>
    <Card
      key={card.id}
      className={'App__card'}
      data={card}
      readOnly={readOnlyState}
      onEdit={newCard =>
        onListEdit(
          cards.map(one =>
            one.id === card.id
              ? { ...one, ...newCard }
              : one
          )
        )
      }
    />
  );


  const readOnlyCheckboxHandler = (e) => {
    setReadOnlyState(e.currentTarget.checked);
    // Clear editing status
    onListEdit(cards.map(card => ({ ...card, editing: false })));
  };

  const deleteSelectedButtonHandler = () => {
    onListEdit(cards.filter(card => !card.selected));
  };


  return <>
    <CustomCheckbox
      checked={readOnlyState}
      onChange={readOnlyCheckboxHandler}
      label='Read only'
    />
    <button
      disabled={!cards.find(card => card.selected)}
      onClick={deleteSelectedButtonHandler}
    >
      Delete selected
    </button>

    <div className={'App__cards'}>
      {cardsRendered}
    </div>
  </>;
}


export default CardList;
