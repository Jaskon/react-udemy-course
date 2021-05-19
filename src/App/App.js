import React, {useContext} from 'react';
import cl from 'classnames';
import './App.scss';
import Header from '../Header';
import CardList from '../CardComponents/CardList/CardList';
import CardsContextProvider, {CardsContext} from "../CardContextComponent/CardsContextProvider";


function App() {

  const cardsContext = useContext(CardsContext);

  return (
    <div>
      <Header
        containerStyleName={'App__container'}
        badge={cardsContext.cards?.length || 0}
      />
      <div className={cl('App__container', 'App__container-background')}>
        {/* Should have context with cards */}
        <CardList />
      </div>
    </div>
  );
}

export default CardsContextProvider(App);
export { App };
