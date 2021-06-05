import React, {useContext} from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
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

      {/* App container */}
      <div className={cl('App__container', 'App__container-background')}>

        <Switch>

          <Route exact path="/">
            {/* Should have context with cards */}
            <CardList />
          </Route>

          <Route path="/auth">
            <Auth/>
          </Route>

          <Route path="/404">
            Page not found
          </Route>

          <Route path="/">
            <Redirect to="/404"/>
          </Route>

        </Switch>

      </div>
    </div>
  );
}

export default CardsContextProvider(App);
export { App };
