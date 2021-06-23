import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cl from 'classnames';
import './App.scss';
import Header from '../Header';
import { fetchCards } from '../store/cardsSlice';
import {Redirect, Route, Switch} from "react-router-dom";
import CardList from "../CardComponents/CardList/CardList";
import CardPage from "../CardComponents/CardPage/CardPage";
import Auth from "../Auth/Auth";
import PrivateRoute from "./Router/PrivateRoute";
import Settings from "../Settings/Settings";


function App() {
  const dispatch = useDispatch();
  const cardsCount = useSelector(state => state.cards.cards.length);
  const userRole = useSelector(state => state.user.user?.role);

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
            <CardList />
          </Route>

          <Route path="/card/:id" children={<CardPage />}/>

          <Route path="/auth">
            <Auth/>
          </Route>

          <PrivateRoute path="/settings" condition={userRole === 'admin'}>
            <Settings/>
          </PrivateRoute>

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
