import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import cl from 'classnames';
import './App.scss';
import Header from '../Header';
import CardList from '../CardComponents/CardList/CardList';
import Auth from '../Auth/Auth';
import { fetchCards } from '../store/cardsSlice';
import CardPage from '../CardComponents/CardPage/CardPage';
import Settings from '../Settings/Settings';


function App() {
  const dispatch = useDispatch();
  const cardsCount = useSelector(state => state.cards.cards.length);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    dispatch(fetchCards());
  // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Header
        containerStyleName={'App__container'}
        badge={cardsCount}
      />

      {/* App container */}
      <div className={cl('App__container', 'App__container-background')}>

        <Switch>

          <Route exact path="/">
            {/* Should have context with cards */}
            <CardList />
          </Route>

          <Route path="/card/:id" children={<CardPage />}/>

          <Route path="/auth">
            <Auth/>
          </Route>

          {user &&
            <Route path="/settings">
              <Settings/>
            </Route>
          }

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

export default App;
