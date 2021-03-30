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
  }
];


function App() {
  const [cardsState, setCardsState] = useState(beValues);

  const cardsRendered = cardsState.map(one =>
    <Card
      key={one.id}
      caption={one.caption}
      content={one.content}
      selected={one.selected}
      editMode={one.editing}
      onSelect={() => setCardsState(
        cardsState.map(newOne =>
          newOne.id === one.id
            ? {...newOne, selected: !newOne.selected}
            : newOne
        )
      )}
      onEdit={editing => setCardsState(
        cardsState.map(newOne =>
          newOne.id === one.id
            ? {...newOne, editing, selected: false}
            : newOne
        )
      )}
      onEditSave={({ caption, content }) => setCardsState(
        cardsState.map(newOne =>
          newOne.id === one.id
            ? {...newOne, caption, content, editing: false}
            : newOne
        )
      )}
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
