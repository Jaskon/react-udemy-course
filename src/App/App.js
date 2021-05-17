import React from 'react';
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
  return (
    <div>
      <CardsContextProvider initCardList={beValues}>
        <CardsContext.Consumer>
          {value =>
            <Header
              containerStyleName={'App__container'}
              badge={value.cards.length}
            />
          }
        </CardsContext.Consumer>
        <div className={cl('App__container', 'App__container-background')}>
          {/* Should have context with cards */}
          <CardList />
        </div>
      </CardsContextProvider>
    </div>
  );
}

export default App;
