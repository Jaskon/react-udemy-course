import React, {useContext} from 'react';
import cl from 'classnames';
import './App.scss';
import Header from '../Header';
import CardList from '../CardComponents/CardList/CardList';
import CardsContextProvider, {CardsContext} from "../CardContextComponent/CardsContextProvider";


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

  const cardsContext = useContext(CardsContext);

  return (
    <div>
      <Header
        containerStyleName={'App__container'}
        badge={cardsContext.cards.length}
      />
      <div className={cl('App__container', 'App__container-background')}>
        {/* Should have context with cards */}
        <CardList />
      </div>
    </div>
  );
}

export default CardsContextProvider(App, { initCardList: beValues });
export { App };
