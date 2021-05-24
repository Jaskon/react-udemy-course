import React, {useContext} from 'react';
import { Switch, Route } from 'react-router-dom';
import cl from 'classnames';
import './App.scss';
import Header from '../Header';
import CardList from '../CardComponents/CardList/CardList';
import CardsContextProvider, {CardsContext} from "../CardContextComponent/CardsContextProvider";
import Auth from '../Auth/Auth';


function App() {

  const cardsContext = useContext(CardsContext);

  return (
    <div>
      <Header
        containerStyleName={'App__container'}
        badge={cardsContext.cards?.length || 0}
      />

      <Switch>

        <Route exact path="/">
          <div className={cl('App__container', 'App__container-background')}>
            {/* Should have context with cards */}
            <CardList />
          </div>
        </Route>

        <Route path="/auth">
          <div className={cl('App__container', 'App__container-background')}>
            <Auth/>
          </div>
        </Route>

        <Route path="/">
          <div className={cl('App__container', 'App__container-background')}>
            Page not found
          </div>
        </Route>

      </Switch>
    </div>
  );
}

export default CardsContextProvider(App);
export { App };
