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
    selectable: true,
    selected: true
  }, {
    id: '1',
    caption: 'Card two header',
    content: loremIpsum,
    selectable: true,
    selected: true
  }, {
    id: '2',
    caption: 'Card three header',
    content: loremIpsum,
    selectable: true,
    selected: false
  }
];


function App() {
  const [cardsState, setCardsState] = useState(beValues);

  const cardsRendered = cardsState.map((one, index) =>
    <Card
      key={one.id}
      caption={one.caption}
      content={one.content}
      checkbox={one.selectable}
      selected={one.selected}
      onSelect={() => {
        const newCardsState = [...cardsState];
        newCardsState[index] = {
          ...one,
          selected: !one.selected
        }
        setCardsState(newCardsState);
      }}
    />
  );

  return (
    <div>
      <Header containerStyleName={'App__container'}/>
      <div className={cl('App__container', 'App__container-background')}>
        <div className={'App__content'}>
          {cardsRendered}
        </div>
      </div>
    </div>
  );
}

export default App;
