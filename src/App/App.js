import { useState } from 'react';
import './App.scss';
import Header from '../Header';
import Card from '../Card';
import cl from 'classnames';


const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vestibulum mauris justo, non egestas sapien malesuada sit amet.';

const beValues = [
  {
    id: '0',
    caption: 'Card one header',
    content: loremIpsum,
    selected: true
  }, {
    id: '1',
    caption: 'Card two header',
    content: loremIpsum,
    selected: true
  }, {
    id: '2',
    caption: 'Card three header',
    content: loremIpsum,
    selected: false
  }, {
    id: '3',
    caption: 'Card four header',
    content: loremIpsum,
    selected: false
  }, {
    id: '4',
    caption: 'Card five header',
    content: loremIpsum,
    selected: false
  }, {
    id: '5',
    caption: 'Card six header',
    content: loremIpsum,
    selected: false
  }, {
    id: '6',
    caption: 'Card seven header',
    content: loremIpsum,
    selected: false
  }, {
    id: '7',
    caption: 'Card eight header',
    content: loremIpsum,
    selected: false
  }
];


function App() {
  const [cardsState, setCardsState] = useState(beValues);
  const [readOnlyState, setReadOnlyState] = useState(false);

  const cardsRendered = cardsState.map(card =>
    <Card
      key={card.id}
      className={'App__card'}
      data={card}
      readOnly={readOnlyState}
      onEdit={newOne => setCardsState(
        cardsState.map(one =>
          one.id === card.id
            ? { ...one, ...newOne }
            : one
        )
      )}
    />
  );

  const readOnlyCheckboxHandler = (e) => {
    setReadOnlyState(e.currentTarget.checked);
    // Clear editing status
    setCardsState(cardsState.map(card => ({ ...card, editing: false })));
  };

  return (
    <div>
      <Header containerStyleName={'App__container'}/>
      <div className={cl('App__container', 'App__container-background')}>
        <div className={'App__read_only_checkbox_wrapper'}>
          <label htmlFor={'read_only_checkbox'}>
            <input
              id='read_only_checkbox'
              type={'checkbox'}
              className={'App__read_only_checkbox'}
              onChange={e => readOnlyCheckboxHandler(e)}
            />
            <span>Read only</span>
          </label>
        </div>

        <div className={'App__cards'}>
          {cardsRendered}
        </div>
      </div>
    </div>
  );
}

export default App;
